import Link from "next/link";
import { Header, Footer } from "./Storefront";
import { PlugArt, BeltArt } from "./PartArt";
import { type ContentPage } from "@/lib/pages";
import {
  type Settings,
  type Category,
  whatsappUrl,
  safeHttps,
} from "@/lib/content";
export default function PageView({
  page: p,
  settings: s,
  categories,
}: {
  page: ContentPage;
  settings: Settings;
  categories: Category[];
}) {
  const welcome = p.slug === "welcome";
  return (
    <div id="top">
      {!welcome && <Header settings={s} />}
      <main
        id="main"
        className={`editorial-page section ${welcome ? "welcome-page" : ""}`}
      >
        <div className="editorial-hero">
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            {welcome && (
              <div className="glass-brand" aria-hidden="true">
                IA<span>IMRAN AUTOS</span>
              </div>
            )}
            <h1>{p.headline}</h1>
            <p className="editorial-intro">{p.intro}</p>
            <div className="hero-actions">
              <Link
                className="button primary"
                href={welcome ? "/" : "/catalogue"}
              >
                {welcome ? "Enter the experience" : "Explore parts"} ↗
              </Link>
              <a
                className="text-link"
                href={whatsappUrl(s.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask the team ↗
              </a>
            </div>
          </div>
          <div className="editorial-art">
            {p.image ? (
              <img src={safeHttps(p.image)} alt={p.title} />
            ) : (
              <PlugArt />
            )}
            <span>PRECISION / IN MOTION</span>
          </div>
        </div>
        {p.videoUrl && (
          <video
            className="editorial-video"
            controls
            playsInline
            preload="none"
            src={safeHttps(p.videoUrl)}
            aria-label={p.title + " video"}
          />
        )}
        <div className="editorial-sections">
          {p.sections.map((section, i) => (
            <article key={section._key || i}>
              <span className="editorial-index">0{i + 1}</span>
              <div>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            </article>
          ))}
        </div>
        {p.slug === "collections" && (
          <div className="collection-grid">
            {categories.map((c) => (
              <Link
                className="collection-card"
                key={c._id}
                href={`/catalogue?category=${encodeURIComponent(c.slug)}`}
              >
                <div className="collection-top">
                  {c.title.toUpperCase()}
                  <span>↗</span>
                </div>
                <div className="collection-art">
                  {c.kind === "belt" ? <BeltArt /> : <PlugArt />}
                </div>
                <div className="collection-info">
                  <h3>{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
        {p.slug === "contact" && (
          <>
            <div className="editorial-contact">
              <h2>VISIT THE SHOP.</h2>
              <p>{s.address}</p>
              <a href={`tel:${s.phone}`}>{s.phone}</a>
              <a href={`mailto:${s.email}`}>{s.email}</a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions ↗
              </a>
            </div>
            <section
              className="business-card-showcase"
              aria-labelledby="business-card-heading"
            >
              <div className="business-card-copy">
                <p className="eyebrow">IMRAN AUTOS / KEEP IN TOUCH</p>
                <h2 id="business-card-heading">
                  TAKE OUR
                  <br />
                  <em>DETAILS.</em>
                </h2>
                <p>
                  Keep the official Imran Autos card close by for shop details,
                  direct contacts and the brands we handle.
                </p>
                <div className="business-card-actions">
                  <a
                    className="button primary"
                    href="/business-card-front.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View contact card ↗
                  </a>
                  <a
                    className="text-link"
                    href={whatsappUrl(s.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Ghufran ↗
                  </a>
                </div>
                <small>
                  Cards show the shop contacts and the brands currently
                  represented at Imran Autos.
                </small>
              </div>
              <div className="business-card-previews">
                <a
                  className="business-card-preview card-front"
                  href="/business-card-front.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Imran Autos contact card"
                >
                  <img
                    src="/business-card-front.webp"
                    alt="Front of Imran Autos business card with shop contact details"
                  />
                  <span>FRONT / CONTACT DETAILS ↗</span>
                </a>
                <a
                  className="business-card-preview card-brands"
                  href="/business-card-brands.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Imran Autos brands card"
                >
                  <img
                    src="/business-card-brands.webp"
                    alt="Back of Imran Autos business card showing brands handled by the shop"
                  />
                  <span>BACK / BRANDS WE HANDLE ↗</span>
                </a>
              </div>
            </section>
          </>
        )}
        {p.slug === "updates" && (
          <div className="social-panel">
            <h2>FOLLOW THE SPARK.</h2>
            <a
              className="button primary"
              href={safeHttps(s.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Instagram ↗
            </a>
            {s.whatsappChannel && (
              <a
                className="button secondary"
                href={safeHttps(s.whatsappChannel)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp channel ↗
              </a>
            )}
          </div>
        )}
      </main>
      {!welcome && <Footer settings={s} />}
    </div>
  );
}

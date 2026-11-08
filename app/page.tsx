import Storefront from '@/components/Storefront';
import {getContent,siteOrigin} from '@/lib/content';
export const revalidate=60;
export const metadata={alternates:siteOrigin()?{canonical:'/'}:undefined};
export default async function Home(){const data=await getContent();const s=data.settings;const ld={'@context':'https://schema.org','@type':'AutoPartsStore',name:s.businessName,description:s.tagline,telephone:s.phone,email:s.email,address:{'@type':'PostalAddress',streetAddress:s.address,addressLocality:'Karachi',addressCountry:'PK'},foundingDate:s.since,...(siteOrigin()?{url:siteOrigin()}:{}),sameAs:[s.instagram]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld).replace(/</g,'\\u003c')}}/><Storefront {...data}/></>}

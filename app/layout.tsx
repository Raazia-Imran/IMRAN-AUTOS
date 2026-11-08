import type { Metadata } from 'next';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800-italic.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import './globals.css';
import {canIndex,siteOrigin} from '@/lib/content';
const origin=siteOrigin();
export const metadata:Metadata={metadataBase:origin?new URL(origin):undefined,title:{default:'Imran Autos | Spark Plugs & Drive Belts in Karachi',template:'%s | Imran Autos'},description:'The right parts for real performance. Explore spark plugs and drive belts at Imran Autos, M.A. Jinnah Road, Karachi. Contact our team for vehicle fitment.',icons:{icon:[{url:'/favicon.ico'},{url:'/icon.svg',type:'image/svg+xml'}],apple:'/apple-touch-icon.png'},openGraph:{title:'Imran Autos',description:'The right parts for real performance. Karachi, since 1997.',type:'website',locale:'en_PK',images:[{url:'/social-card-v2.png',width:1200,height:630,alt:'Imran Autos - The right parts for real performance'}]},twitter:{card:'summary_large_image',title:'Imran Autos',images:['/social-card-v2.png']},robots:canIndex()?{index:true,follow:true}:{index:false,follow:false},verification:process.env.GOOGLE_SITE_VERIFICATION?{google:process.env.GOOGLE_SITE_VERIFICATION}:undefined};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>}

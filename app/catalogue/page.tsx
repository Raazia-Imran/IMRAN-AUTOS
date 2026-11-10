import {Catalogue} from '@/components/Storefront';import {getContent,siteOrigin} from '@/lib/content';
export const revalidate=60;
export const metadata={title:'Explore Parts',alternates:siteOrigin()?{canonical:'/catalogue'}:undefined};
export default async function Page(){const data=await getContent();const origin=siteOrigin();const breadcrumb=origin?{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin},{'@type':'ListItem',position:2,name:'Explore parts',item:`${origin}/catalogue`}]}:null;return <>{breadcrumb&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,'\\u003c')}}/>}<Catalogue page={data.pages.find(p=>p.slug==='catalogue')} {...data}/></>}

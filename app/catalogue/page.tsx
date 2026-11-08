import {Catalogue} from '@/components/Storefront';import {getContent,siteOrigin} from '@/lib/content';
export const revalidate=60;
export const metadata={title:'Explore Parts',alternates:siteOrigin()?{canonical:'/catalogue'}:undefined};
export default async function Page(){const data=await getContent();return <Catalogue page={data.pages.find(p=>p.slug==='catalogue')} {...data}/>}

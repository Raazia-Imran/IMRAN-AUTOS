import PageView from '@/components/ContentPage';import {getContent,siteOrigin} from '@/lib/content';
export const revalidate=60;
export const metadata={title:'Enquiry Terms',alternates:siteOrigin()?{canonical:'/terms'}:undefined};
export default async function Page(){const d=await getContent();return <PageView page={d.pages.find(p=>p.slug==='terms')!} {...d}/>}

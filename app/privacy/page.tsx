import PageView from '@/components/ContentPage';import {getContent} from '@/lib/content';
export const revalidate=60;
export const metadata={title:'Privacy'};
export default async function Page(){const d=await getContent();return <PageView page={d.pages.find(p=>p.slug==='privacy')!} {...d}/>}
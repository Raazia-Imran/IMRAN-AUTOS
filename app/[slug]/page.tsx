import {notFound} from 'next/navigation';
import PageView from '@/components/ContentPage';
import {getContent,siteOrigin} from '@/lib/content';
import {pageDefaults} from '@/lib/pages';
export const revalidate=60;
export function generateStaticParams(){return pageDefaults.filter(p=>!['privacy','terms','catalogue'].includes(p.slug)).map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=await getContent();const p=d.pages.find(p=>p.slug===slug);return {title:p?.title,description:p?.seoDescription||p?.intro,alternates:siteOrigin()?{canonical:`/${slug}`}:undefined}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=await getContent();const p=d.pages.find(p=>p.slug===slug);if(!p)notFound();return <PageView page={p} {...d}/>}

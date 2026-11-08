import type {MetadataRoute} from 'next';import {canIndex,siteOrigin} from '@/lib/content';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(canIndex()?{allow:'/',disallow:['/studio/']}:{disallow:'/'})},...(canIndex()?{sitemap:`${siteOrigin()}/sitemap.xml`}:{})}}

import type {MetadataRoute} from 'next';import {canIndex,siteOrigin} from '@/lib/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return canIndex()?['','/catalogue','/about','/collections','/contact','/find-my-part','/updates','/privacy','/terms'].map(p=>({url:`${siteOrigin()}${p}`,changeFrequency:p==='/catalogue'?'weekly':'monthly',priority:p===''?1:.6})):[]}

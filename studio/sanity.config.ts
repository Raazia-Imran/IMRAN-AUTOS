import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemaTypes';
const projectId=process.env.SANITY_STUDIO_PROJECT_ID;
if(!projectId)throw new Error('Add SANITY_STUDIO_PROJECT_ID to studio/.env.local. See docs/SANITY_SETUP.md.');
export default defineConfig({name:'imran-autos',title:'Imran Autos · Shop Manager',projectId,dataset:process.env.SANITY_STUDIO_DATASET||'production',plugins:[structureTool({structure:S=>S.list().title('Manage your shop').items([S.listItem().title('Shop details & contact numbers').child(S.document().schemaType('siteSettings').documentId('siteSettings')),S.listItem().title('Landing page words').child(S.document().schemaType('landingPage').documentId('landingPage')),S.divider(),...S.documentTypeListItems().filter(i=>!['siteSettings','landingPage'].includes(i.getId()||''))])})],schema:{types:schemaTypes},document:{newDocumentOptions:(options)=>options.filter(o=>!['siteSettings','landingPage'].includes(o.templateId)),actions:(actions,context)=>['siteSettings','landingPage'].includes(context.schemaType)?actions.filter(a=>!['delete','duplicate','unpublish'].includes(a.action||'')):actions}});

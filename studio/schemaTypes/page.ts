import {defineType,defineField,defineArrayMember} from 'sanity';
export const contentPage=defineType({name:'contentPage',title:'Website pages',type:'document',fields:[
 defineField({name:'title',title:'Page name',type:'string',validation:R=>R.required()}),
 defineField({name:'slug',title:'Page address',type:'slug',options:{source:'title'},validation:R=>R.required()}),
 defineField({name:'eyebrow',title:'Small heading',type:'string',validation:R=>R.max(90)}),
 defineField({name:'headline',title:'Main heading',type:'text',rows:2,validation:R=>R.required().max(140)}),
 defineField({name:'intro',title:'Introduction',type:'text',rows:3}),
 defineField({name:'sections',title:'Page sections',type:'array',of:[defineArrayMember({type:'object',fields:[defineField({name:'heading',type:'string',validation:R=>R.required()}),defineField({name:'body',type:'text',rows:5,validation:R=>R.required()})]})]}),
 defineField({name:'image',title:'Original page photograph',type:'image',options:{hotspot:true},fields:[defineField({name:'alt',title:'Describe the image',type:'string'})]}),
 defineField({name:'video',title:'Original page video',type:'file',options:{accept:'video/mp4,video/webm'}}),
 defineField({name:'seoDescription',title:'Search description',type:'text',rows:2,validation:R=>R.max(180)}),
 defineField({name:'published',title:'Show on website',type:'boolean',initialValue:false})]});

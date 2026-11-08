'use client';
import {useEffect,useRef,useState} from 'react';
import {PlugArt} from './PartArt';
export default function SparkScene({paused}:{paused:boolean}){
 const mount=useRef<HTMLDivElement>(null),pauseRef=useRef(paused);const [ready,setReady]=useState(false);
 useEffect(()=>{pauseRef.current=paused},[paused]);
 useEffect(()=>{const el=mount.current;if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;let clean=()=>{};let alive=true;
 import('three').then(T=>{if(!alive)return;let renderer:InstanceType<typeof T.WebGLRenderer>;try{const canvas=document.createElement('canvas');const context=canvas.getContext('webgl2',{alpha:true,antialias:true});if(!context)return;renderer=new T.WebGLRenderer({canvas,context,alpha:true,antialias:true,powerPreference:'low-power'})}catch{return};
 renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=T.SRGBColorSpace;el.appendChild(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(32,1,.1,100);camera.position.set(0,0,12.5);
 scene.add(new T.HemisphereLight(0xbad8ff,0x101227,3));const key=new T.DirectionalLight(0xffffff,5);key.position.set(3,4,5);scene.add(key);const blue=new T.PointLight(0x345bff,45);blue.position.set(-3,-1,3);scene.add(blue);const red=new T.PointLight(0xff243c,30);red.position.set(3,-2,2);scene.add(red);
 const group=new T.Group();scene.add(group);const chrome=new T.MeshStandardMaterial({color:0xb9c6d5,metalness:.92,roughness:.21});const white=new T.MeshStandardMaterial({color:0xf6f5eb,metalness:.12,roughness:.22});const dark=new T.MeshStandardMaterial({color:0x283447,metalness:.9,roughness:.35});
 function cyl(top:number,bottom:number,height:number,y:number,mat:InstanceType<typeof T.MeshStandardMaterial>,segments=64){const m=new T.Mesh(new T.CylinderGeometry(top,bottom,height,segments),mat);m.position.y=y;group.add(m);return m}
 cyl(.13,.15,.48,2.4,chrome);cyl(.2,.23,.22,2.09,chrome);cyl(.24,.29,1.9,1.16,white);
 for(let i=0;i<6;i++)cyl(.36,.36,.135,1.88-i*.22,white);
 cyl(.3,.36,.45,.05,white);cyl(.55,.55,.46,-.37,chrome,6);cyl(.43,.43,.17,-.7,chrome);cyl(.56,.56,.1,-.83,chrome);cyl(.34,.34,.88,-1.32,chrome);
 for(let i=0;i<13;i++){const ring=new T.Mesh(new T.TorusGeometry(.35,.025,8,48),dark);ring.rotation.x=Math.PI/2;ring.position.y=-.93-i*.064;group.add(ring)}
 cyl(.16,.11,.24,-1.87,white);cyl(.04,.04,.19,-2.08,chrome);
 const points=[new T.Vector3(.28,-1.72,0),new T.Vector3(.32,-2.17,0),new T.Vector3(.1,-2.23,0),new T.Vector3(.02,-2.23,0)];group.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),24,.055,8,false),chrome));
 const spark=new T.Mesh(new T.IcosahedronGeometry(.055,1),new T.MeshBasicMaterial({color:0x9bbfff}));spark.position.set(.02,-2.15,0);group.add(spark);
 group.rotation.set(.1,0,-.48);let px=0,py=0,drag=false,manual=0,visible=true,frame=0;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const resize=()=>{const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};resize();const ro=new ResizeObserver(resize);ro.observe(el);
 const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5;if(drag)manual+=e.movementX*.012};const down=()=>{drag=true};const up=()=>{drag=false};el.addEventListener('pointermove',move);el.addEventListener('pointerdown',down);window.addEventListener('pointerup',up);
 const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting});io.observe(el);const start=performance.now();
 const tick=()=>{frame=requestAnimationFrame(tick);if(!visible||document.hidden)return;const t=(performance.now()-start)/1000;const moving=!pauseRef.current&&!reduce.matches;if(moving){group.rotation.y=manual+Math.sin(t*.42)*.65+px*.5;group.rotation.x=py*.2;group.position.y=Math.sin(t*1.1)*.09;spark.scale.setScalar(1+Math.sin(t*14)*.25)}renderer.render(scene,camera)};tick();setReady(true);
 clean=()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerdown',down);window.removeEventListener('pointerup',up);scene.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.dispose())}});renderer.dispose();renderer.domElement.remove()};
 }).catch(()=>{});return()=>{alive=false;clean()};},[]);
 return <div className="scene" onPointerMove={e=>{if(!ready&&!paused){const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--part-rotation',`${((e.clientX-r.left)/r.width-.5)*40}deg`)}}} ref={mount} role="img" aria-label="Interactive 3D spark plug. Drag horizontally to rotate."><div className={`scene-fallback ${ready?'hidden':''}`}><PlugArt/></div></div>;
}

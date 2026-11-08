import {spawn} from 'node:child_process';
const args=process.argv.slice(2).filter(v=>v!=='--strictPort');const h=args.indexOf('--host');if(h>=0)args[h]='--hostname';
const p=spawn(process.execPath,['node_modules/next/dist/bin/next','dev',...args],{stdio:'inherit'});p.on('exit',c=>process.exit(c??0));

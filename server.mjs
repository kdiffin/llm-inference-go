import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,resolve,sep} from 'node:path';
const root=resolve('web');
http.createServer(async(req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname.replace(/\/$/,'/index.html')));if(!path.startsWith(root+sep))throw Error();const data=await readFile(path);res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript'})[extname(path)]||'application/octet-stream');res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(8080,'127.0.0.1',()=>console.log('Field notes → http://localhost:8080'));

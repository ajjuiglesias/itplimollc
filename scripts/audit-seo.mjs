import fs from 'node:fs';
import path from 'node:path';
const root='.next/server/app';
const pages=[];
function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())walk(p);else if(p.endsWith('.html')&&!p.includes('_not-found'))pages.push(p);}}
walk(root);
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"');
const attr=(tag,key)=>decode(tag.match(new RegExp('\\b'+key+'="([^"]*)"'))?.[1]||'');
const issues=[], results=[],links=new Set(),assets=new Set();
for(const file of pages){
 const h=fs.readFileSync(file,'utf8'), tags=[...h.matchAll(/<meta\b[^>]*>/g)].map(x=>x[0]);
 const meta=n=>attr(tags.find(t=>attr(t,'name')===n||attr(t,'property')===n)||'','content');
 const route='/'+path.relative(root,file).replaceAll('\\','/').replace(/\.html$/,'').replace(/^index$/,'');
 if(route.startsWith('/_'))continue;
 const title=decode(h.match(/<title>(.*?)<\/title>/s)?.[1]||'');
 const description=meta('description');
 const canonical=attr([...h.matchAll(/<link\b[^>]*>/g)].map(x=>x[0]).find(t=>attr(t,'rel')==='canonical')||'','href');
 const h1=[...h.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(x=>x[1].replace(/<[^>]+>/g,'').trim());
 for(const [label,value]of Object.entries({title,description,canonical,ogTitle:meta('og:title'),ogImage:meta('og:image')}))if(!value)issues.push(`${route}: missing ${label}`);
 if(h1.length!==1)issues.push(`${route}: ${h1.length} H1s`);
 if(canonical&&new URL(canonical).pathname!==route)issues.push(`${route}: incorrect canonical ${canonical}`);
 if(!meta('robots').includes('noindex'))issues.push(`${route}: review is not noindex`);
 let schemas=0;for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(m[1]);schemas++;}catch{issues.push(`${route}: invalid JSON-LD`);}}
 for(const m of h.matchAll(/<a\b[^>]*>/g)){const href=attr(m[0],'href');if(href.startsWith('/')&&!href.startsWith('//'))links.add(href.split(/[?#]/)[0]);}
 for(const m of h.matchAll(/<img\b[^>]*>/g)){if(!/\balt=/.test(m[0]))issues.push(`${route}: missing image alt`);const src=attr(m[0],'src');if(src.startsWith('/')&&!src.startsWith('/_next'))assets.add(src);}
 results.push({route,title,description,h1:h1[0],canonical,robots:meta('robots'),schemas});
}
if(results.length < 30) issues.push('Incomplete build: expected at least 30 rendered pages');
for(const field of ['title','description']){const seen=new Map();for(const r of results){if(seen.has(r[field]))issues.push(`Duplicate ${field}: ${seen.get(r[field])} and ${r.route}`);seen.set(r[field],r.route);}}
const routes=new Set(results.map(r=>r.route));
for(const l of links)if(!routes.has(l)&&!fs.existsSync('public'+l))issues.push(`Unresolved internal link: ${l}`);
for(const a of assets)if(!fs.existsSync('public'+a))issues.push(`Missing image: ${a}`);
fs.writeFileSync('docs/seo-rendered-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),pages:results.length,internalLinks:links.size,localImages:assets.size,issues,results},null,2));
console.log(JSON.stringify({pages:results.length,internalLinks:links.size,localImages:assets.size,issues},null,2));
if(issues.length)process.exitCode=1;

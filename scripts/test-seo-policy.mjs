import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const code=ts.transpileModule(fs.readFileSync('src/lib/seo.tsx','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020}}).outputText;
const cases=[
 ['default review',{},false],
 ['review URL',{NEXT_PUBLIC_SITE_URL:'https://review.vercel.app',SEO_INDEXING_ENABLED:'true',VERCEL_ENV:'production'},false],
 ['preview with launch variables',{NEXT_PUBLIC_SITE_URL:'https://www.itplimo.com',SEO_INDEXING_ENABLED:'true',VERCEL_ENV:'preview'},false],
 ['domain configured before launch',{NEXT_PUBLIC_SITE_URL:'https://www.itplimo.com',VERCEL_ENV:'production'},false],
 ['final production',{NEXT_PUBLIC_SITE_URL:'https://www.itplimo.com/',SEO_INDEXING_ENABLED:'true',VERCEL_ENV:'production'},true],
];
for(const [name,env,expected]of cases){const exports={};vm.runInNewContext(code,{exports,require,process:{env},URL});assert.equal(exports.searchIndexingEnabled,expected,name);const book=exports.pageMetadata({title:'Booking',description:'Reserve',path:'/book',noindex:true});assert.equal(book.robots.index,false);assert.equal(book.robots.googleBot.index,false);assert.equal(exports.BUSINESS_ID.includes('//#business'),false);const json=exports.JsonLd({data:{text:'</script><script>'}}).props.dangerouslySetInnerHTML.__html;assert.equal(json.includes('<'),false);assert.equal(JSON.parse(json).text,'</script><script>');}
console.log('PASS: five launch/indexing scenarios, booking exclusion, canonical origin and JSON-LD escaping');

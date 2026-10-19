import test from 'node:test';
import assert from 'node:assert/strict';
import {values,partial,terms,location} from '../web/model.js';
test('rectangular multiplication and every accumulated step',()=>{const a=[1,2,3,4,5,6],b=[7,8,9,10,11,12];assert.deepEqual([0,1,2,3].map(k=>partial(a,b,3,2,0,0,k)),[0,7,25,58]);assert.equal(partial(a,b,3,2,0,1,3),64);assert.equal(partial(a,b,3,2,1,0,3),139);assert.equal(partial(a,b,3,2,1,1,3),154)});
test('all supported dimensions use the matching row and column',()=>{for(let m=2;m<=4;m++)for(let n=2;n<=4;n++)for(let p=2;p<=4;p++){const a=values(m,n),b=values(n,p,2);for(let i=0;i<m;i++)for(let j=0;j<p;j++){const ts=terms(a,b,n,p,i,j);assert.equal(ts.length,n);ts.forEach((t,k)=>{assert.equal(t.a,a[i*n+k]);assert.equal(t.b,b[k*p+j])})}}});
test('row-major element and byte offsets',()=>{assert.deepEqual(location(1,2,3,8),{index:5,offset:40,address:4136});assert.equal(location(1,0,3,4).offset,12)});

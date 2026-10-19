// Explanatory arithmetic and address models, never hardware measurements.
export function values(rows,cols,seed=0){return Array.from({length:rows*cols},(_,i)=>(i+seed)%5+1)}
export function terms(a,b,n,p,row,col){return Array.from({length:n},(_,k)=>({a:a[row*n+k],b:b[k*p+col],k}))}
export function partial(a,b,n,p,row,col,steps){return terms(a,b,n,p,row,col).slice(0,steps).reduce((sum,t)=>sum+t.a*t.b,0)}
export function location(row,col,cols,bytes){const index=row*cols+col;return {index,offset:index*bytes,address:0x1000+index*bytes}}

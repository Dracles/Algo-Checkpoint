const dots = (a,b) => {
    if (a.length === b.length){
        let sum=0;
        for(let i=0; i<a.length;i++){
            sum+= b[i]*a[i];
        }
        return sum;
    }
    return null;
}
const ortho = (a,b) => dots(a,b) === 0
console.log(ortho([0,0,0],[8,2,5]));
console.log(ortho([2,1,7],[8,2,5]));
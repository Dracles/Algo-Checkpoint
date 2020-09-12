let distinct = (a,b) => {
    let sum = 0;
    for (let i= 0; i < a.length; i++){
        let found= false;
    
        for(let j=0; j<b.length;j++ ){
            if( a[i]=== b[j]){
                found= true;
            }
        }
        if (!found){
            sum+= a[i];
        }
    }
    for (let i= 0; i < b.length; i++){
        let found= false;
    
        for(let j=0; j<a.length;j++ ){
            if( b[i]=== a[j]){
                found= true;
            }
        }
        if (!found){
            sum+= b[i];
        }
    }
    return sum;
}
console.log (distinct([3,1,7,9],[2,4,1,9,3]));
//
let common = (a,b) => {
    let sum = 0;
    for (let i= 0; i < a.length; i++){
        let found= false;
    
        for(let j=0; j<b.length;j++ ){
            if( a[i]=== b[j]){
                found= true;
                break
            }
        }
        if (found){
            sum+= 2*a[i];
        }
    }
    return sum;
}
console.log(common([13,12,7,9],[2,4,12,9,13]));
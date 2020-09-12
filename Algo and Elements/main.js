const sent = (str)=>{
    let w = 0;
    let c = 0;
    let v = 0;
    for(let i=0; i<str.length; i++){
        ++c;
        if (str[i] === " "|| str[i] === "."){
            ++w;
        }

        if(str[i]==="a"|| str[i]==="o"||str[i]==="u"||str[i]==="e"||str[i]==="y"||str[i]==="i"){
            ++v;
        }
    }
    return {
        charac: c,
        word: w,
        vowel: v,
    }
}
console.log(sent("hello people."))
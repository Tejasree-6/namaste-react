let radius=[1,2,3,4];
const calculateArea= function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const area=function(radius){
    return Math.PI * radius * radius;
}

const calculate=function(radius){
    
}
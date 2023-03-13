alert('js runs');

//ex1
{function count(a,b,c) {
    return (a-b)/c;
}
let d=count(10,2,2);
console.log(d);
}

//ex2
{
   
    function count(a){
    return Math.pow(a,2);
    }
    let a=count(5);
    console.log( a);}

{
    function count(a){
    return Math.pow(a,3);
    }
    let a=count(5);
    console.log( a);
}


//ex3
{
    function min(a,b) {
        if (a<b){
            return a;
        } else {
            return b;
        }
       
    }
    console.log(min(40,30));
   
}
{
    function max(a,b) {
        if (a>b){
            return a;
        } else {
            return b;
        }
       
    }
    console.log(max(100,30));
}


//ex4

{
    function returnArray(array){
        return array;
    }
    console.log(returnArray([1,10,8,25,23,15]));
}
{
    function printArray(array){
        console.log (array[i]);
        i++;
        if ( i<=array.length) 
            printArray (array);
    }
    let i=0;
    printArray([1,10,8,25,23,15]);
}



//ex5
{
    function isEven (a){
       if (a%2===0) {
        console.log(true);
        }else{
            console.log(false);
        }
       }
    isEven(52);
}



//ex6

{
    function getArray(array){
        for (let i=0; i<=array.length; i++){
        if (array[i]%2===0) {
            console.log(array[i]);
         } 
         return array;
    }
 
    }
    getArray([1,10,8,25,23,15]);
}
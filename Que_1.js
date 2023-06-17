//Write a JavaScript program that displays the largest integer among two integers.
function greatestNumber(n1,n2){
    if(n1 > n2){
        return n1 + " is greater";
    }
    else if(n2 > n1){
        return n2 + " is greater";
    }
    else{
        return "given numbers are equal";
    }
}
console.log(greatestNumber(11,16));
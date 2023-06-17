//Write a JavaScript function to find the sign of the product of three numbers. Display an alert box with the specified sign. 

function productSign(n1 = 1, n2 = 1, n3 = 1){
    let num = n1*n2*n3;
    if(num >= 0){
        return "+";
    }
    else{
        return "-";
    }
}
console.log("Sign of product is " + productSign(2,-4));
//Write a JavaScript program to find the Armstrong numbers of 3 digits.
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
//For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371
function isArmstrong(num = 0){
    const d1 = Math.floor(num/100);
    const d2 = Math.floor((num%100)/10);
    const d3 = Math.floor((num%100)%10);
    const cubeSum = d1**3 + d2**3 + d3**3;
    if(num == cubeSum){
        return true;
    }
    else{
        return false;
    }
}
console.log(isArmstrong(371));
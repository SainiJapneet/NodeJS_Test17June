//Write a JavaScript program to sum 3 and 5 multiples under 1000.
function sumMultiples(){
    let sum = 0;
    for(i = 15; i < 1001; i++){
        if(i % 15 == 0){
            sum += i;
        }
    }
    console.log("Sum of multiples of 3 and 5 under 1000 = " + sum);
}
sumMultiples();
//Write a JavaScript function to find the largest of five numbers. Display an alert box to show the results.
function largestNumber(arr){
    let max = arr[0];
    for(i = 1; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Largest number is " + max);
}
largestNumber([-1,-6,0,-4,17]);
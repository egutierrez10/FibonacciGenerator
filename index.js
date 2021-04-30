function fibonacciGenerator(n){
    var arr = [];
    var sum = 0;
    var num = 0;
    for(var i = 0; i < n; i++){
        if(i === 0){
            sum = 0;
        }else if(i === 1){
            sum = 1;
        }else{
            sum = arr[i - 2] + arr[i - 1];
        }
        arr.push(sum);
        num++;
    }
    return arr;
}
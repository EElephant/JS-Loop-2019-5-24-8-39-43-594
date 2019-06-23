function multiplicationTable(){
    for(var r=1;r<=9;r++){  //控制行数
        var chart="";
        for(var c=1;c<=r;c++){   //控制列数
            chart+=(`${c}*${r}=${c*r}\t`)
        }
        console.log(chart);
    }
}
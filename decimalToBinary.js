function binaryToDecimal(string){
    let total = 0;
    let bits = 1;

    for (const key of string.split("").reverse().join("")){
        if(key == 1){
            total += bits;
        }
        bits *=2;
        }
        return total;
    }

    console.log(binaryToDecimal("10000110"));
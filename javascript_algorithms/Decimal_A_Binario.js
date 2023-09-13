function BinarioADecimal(num) {
    let count = num.length;
    let pos;
    let acc = 0;

    for (let i = 0; i < count; i++) {
        pos = count - 1 - i;
        acc = acc + (Math.pow(2, pos) * num[i]);
    }

    return acc;
}

function DecimalABinario(num) {
    // var 1 = num / 2 | var 2 = num % 2 === 0 | 1
    let rest = [];

    do {
        rest.unshift(num % 2);
        num = Math.floor(num / 2);
    } while (num > 0)

    return rest.join('');
}

/*
    DecimalABinario(4) toBe 100
    DecimalABinario(7) toBe 111
*/
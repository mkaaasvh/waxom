function calcFunc (from, to) {
    let result = [];

    for(let i = from; i <= to; i++) {
        if (i != 5) result.push(i)
    }

    return result.join(',');
};

calcFunc(3, 12) // 3, 4, 6, 7, 8, 9, 10, 11, 12

console.log(calcFunc(3, 12))



function calculate (from, to) {
    let result = [];
    while (from <= to) {
        if (from != 5) result.push(from);
        from++;
    }
    return result.join(' ');
}

console.log(calculate(3, 10));

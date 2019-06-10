function fiboCycle(n) {
    const fiboSequence = [0, 1];
    for (let i = 1; i < n; i++) {
        fiboSequence.push(fiboSequence[i] + fiboSequence[i -1]);
    }
	fiboSequence.forEach(num => {process.stdout.write(`${num}, `);});
    return fiboSequence[n];
}

function fiboCycle2(n) {
    let x1 = 0;
    let x2 = 0;
    let sum = 1;
    for (let i = 1; i < n; i++) {
        x1 = x2;
        x2 = sum;
        sum = x1 + x2;
    }
	process.stdout.write(`${sum} = ${x1} + ${x2}`);
    return sum;
}

const arguments = process.argv;
try {
    var values = arguments.filter(
            arg => Number.parseFloat(arg)
        ).map(
            x => Number.parseFloat(x)
        );
    console.time('fiboCycle1');
    console.log(`\n\n${fiboCycle(values[0])}`);
    console.timeEnd('fiboCycle1');
    console.time('fiboCycle2');
    console.log(`\n\n${fiboCycle2(values[0])}`);
    console.timeEnd('fiboCycle2');

    process.exitCode = 0;
} catch (error) {
    console.error(error);
    process.exitCode = 1;
}
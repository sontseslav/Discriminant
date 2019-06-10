function fiboRecursion(n) {
    if (n < 2) return n;
    return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

const arguments = process.argv;
try {
    var values = arguments.filter(
            arg => Number.parseFloat(arg)
        ).map(
            x => Number.parseFloat(x)
        );
    console.time('fiboRecursion');
    console.log(`\n\n${fiboRecursion(values[0])}`);
    console.timeEnd('fiboRecursion');

    process.exitCode = 0;
} catch (error) {
    console.error(error);
    process.exitCode = 1;
}
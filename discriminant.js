/**
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */
function discriminant(a, b, c) {
    const D = b * b - 4 * a * c;
    if (D > 0) {
        output([`${(-b + Math.sqrt(D))/(2*a)}`, `${(-b - Math.sqrt(D))/(2*a)}`]);
    } else if (D === 0) {
        output([`${-b/(2*a)}`]);
    } else {    
        output(['No natural roots']);
    }
    process.exitCode = 0;
}

/**
 * @param {Array<string>} result 
 */
function output(result) {
    if (! result instanceof Array) {
        console.error('Invalid parameter type');
        process.exitCode = 1;
    }
    result.forEach(x => { 
        if (Number.parseFloat(x)) {
            console.log(Number.parseFloat(x).toFixed(4));
        } else {
            console.log(x);
        }
    });
}

const arguments = process.argv;
try {
    var values = arguments.map( x => Number.parseFloat(x));
    discriminant(values[2], values[3], values[4]);
} catch (error) {
    console.exception(error);
    process.exitCode = 1;
}

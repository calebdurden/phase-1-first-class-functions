function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function aFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return (function() {
        
    })
}
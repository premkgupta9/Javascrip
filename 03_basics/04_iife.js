//imediately invoked function expressions (IIFE)

(function chai(){
    //named iife
    console.log('be connected');
})();

( (name) => {
    console.log(`db connected ${name}`)
})("hi")
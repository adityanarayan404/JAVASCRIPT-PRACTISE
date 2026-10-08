//  Immediately Invoked Function Expression (IIFE)

(function chai(){
    //names iife
    console.log(`db connected`);
})();

( (name) => {
    console.log(`db connected 2 ${name}`);
})(`aditya`)
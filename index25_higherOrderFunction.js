const coding  = ["js", "ruby", "java", "pyhton", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (value) => {
//         //console.log(value);
// } )

// function printme(item) {
//     //console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languagename: "javascript",
        languagefile: "ja"
    },
    {
        languagename: "java",
        languagefile: "java"
    },
    {
        languagename: "python",
        languagefile: "py"
    }
    
]

mycoding.forEach((item) => {
    console.log(item.languagename);
})
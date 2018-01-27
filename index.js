if (process.argv.length < 3){
    console.log('usage: node index.js número')
    return
}

if (process.argv[2]%2) {
    console.log("Ímpar");
} else {
    console.log("par");
}
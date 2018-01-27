const CryptoJS = require("crypto-js");

/*
 calcule uma operação de cifra em cima de um argumento recebido dependendo do valor de uma variável de ambiente. 
 Se a variável ALG for igual a MD5, use o algoritmo MD5. Se não houver a variável ALG, 
 use o algoritmo SHA256 visto no exemplo.
 */
if (process.argv.length < 3){
    console.log('usage: node index2.js string')
    return
}
var word = process.argv[2];
if (process.env.ALG && process.env.ALG == "MD5") {
    word = CryptoJS.MD5(word).toString(CryptoJS.enc.Base64);
} else {
    word = CryptoJS.SHA256(word).toString(CryptoJS.enc.Base64);
}
console.log(word);




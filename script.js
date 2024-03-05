const text=document.querySelector(".text");
const mensagem= document.querySelector(".mensagem");


// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncripto() {
    const textoEncriptado = encriptar(text.value);
   mensagem.value = textoEncriptado;
    text.value="";
}

function encriptar (stringEncriptada){

    let matrizCodigo =[["e","enter"], ["i","ines"],["a","ai"], ["o","ober"],["u","ufat"]];
  stringEncriptada=stringEncriptada.toLowerCase();
 
  for (let i = 0;i < matrizCodigo.length; i++){
  if(stringEncriptada.includes (matrizCodigo[i][0])){
    stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
  }
}
return stringEncriptada
}

function btnDescripto() {
  const textoDesencriptado = desencriptar(mensagem.value);
  text.value = textoDesencriptado;
   mensagem.value="";
}

function desencriptar (stringdDesencriptada){

    let matrizCodigo =[["enter","e"], ["ines","i"],["ai","a"], ["ober","o"],["ufat","u"]];
    stringdDesencriptada=stringdDesencriptada.toLowerCase();

  for (let i = 0;i < matrizCodigo.length; i++){
  if(stringdDesencriptada.includes (matrizCodigo[i][0])){
    stringdDesencriptada= stringdDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
  }
}

return stringdDesencriptada
}
function btnCopiar() {
  navigator.clipboard.writeText(mensagem.innerHTML).then();
  const textoCopiado = copiar(mensagem.value);
  prompt("Texto copiado!");
 
}

/*
//Recuperano um elemnto html com querySelector
const titulo1 = document.querySelector("h1")

//Inserindo etilo de background-color no elemento
titulo1.style.backgroundColor = "#ff0000";

//Recuperando todos os elemento html com querySelectorAll
const titulos = document.querySelectorAll("h1")

//Inserindo estilo de background-color em um elemento
titulos[0].style.backgroundColor = "#ff0000";

//Inserindo estilo de background-color em todos os elementos com for OF
for (let titulo of titulos){
    titulos[0].style.backgroundColor = "#ff0000";
}
*/

//Capiturando os inputs e seus respectivos valores
//const inputs = document.getElementsById("frmCalc");
const inputs = document.querySelectorAll("#frmCalc input");


//Atrelando evento ao input do formulário com addEventListenner e adicionando o valor ao campo de resultado
inputs[1].addEventListener("click", function(){
    let temp = inputs[0].value;
    inputs[0].value = ""
    inputs[0].value += temp();
})










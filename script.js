//element of DOM

let inputElement = document.getElementById("value");
let addElement = document.getElementById("addElement");
let divElement_Container = document.getElementById("container");

// creat elements
let pElement = document.createElement("p");
let pContent = ['No element was passed in the input', 'Your element its from 6 at 9!', 'Your element not its from 6 at 9!'];
let array = [];

function receiver(){ //função para receber o parâmetro;
    pElement.innerHTML = '';
    let register = inputElement.value;

    verify(register); //argumento para o parâmetro;
}

//função para fazer a verificação do valor que está entrando no input;
function verify(parameter){ // parâmetro; 
    if(parameter === ''){
        inputElement.style.border = "1px, solid, red";
        inputElement.style.borderRadius = "3px";

        let pText = document.createTextNode(pContent[0]);
        pElement.appendChild(pText);
        divElement_Container.appendChild(pElement);

        pElement.style.color = "red";
    }else{
        if(parameter >= 6 && parameter <= 9){
            inputElement.style.border = "1px, solid,rgb(24, 168, 36)";
            inputElement.style.borderRadius = "3px";

            let pText = document.createTextNode(pContent[1]);
            pElement.appendChild(pText);
            divElement_Container.appendChild(pElement);

            pElement.style.color = "rgb(24, 168, 36)";

            //continua... Tem que passar um array vazio!  
            array[0] = parameter;
            shuffle(parameter);
            console.log("Your number is valid!");
            return console.log(array);     

        }else{
            inputElement.style.border = "1px, solid, #FFC222";
            inputElement.style.borderRadius = "3px";

            let pText = document.createTextNode(pContent[2]);
            pElement.appendChild(pText);
            divElement_Container.appendChild(pElement);

            pElement.style.color = "#FFC222";

            array = [];
            console.log("Cannot used the number!");
            return console.log(array);

        }
    }
}

function shuffle(value){
    alert(value);
    //tenho que embaralhar em uma lista com o tamanho do argumento que foi passado
}


addElement.onclick = receiver;
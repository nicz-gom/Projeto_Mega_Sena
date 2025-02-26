//element of DOM

let inputElement = document.getElementById("value");
let addElement = document.getElementById("addElement");
let divElement_Container = document.getElementById("container");

// creat elements
let pElement = document.createElement("p");
let pContent = ['No element was passed in the input', 'Your element its from 6 at 9!', 'Your element not its from 6 at 9!'];
let array = [];

function verify(){
    pElement.innerHTML = '';
    let register = inputElement.value;

    if(register === ''){
        inputElement.style.border = "1px, solid, red";
        inputElement.style.borderRadius = "3px";

        let pText = document.createTextNode(pContent[0]);
        pElement.appendChild(pText);
        divElement_Container.appendChild(pElement);

        pElement.style.color = "red";
    }else{
        if(register >= 6 && register <= 9){
            inputElement.style.border = "1px, solid,rgb(24, 168, 36)";
            inputElement.style.borderRadius = "3px";

            let pText = document.createTextNode(pContent[1]);
            pElement.appendChild(pText);
            divElement_Container.appendChild(pElement);

            pElement.style.color = "rgb(24, 168, 36)";

            //continua... Tem que passar um array vazio!
            return array[0] = register;

        }else{
            inputElement.style.border = "1px, solid, #FFC222";
            inputElement.style.borderRadius = "3px";

            let pText = document.createTextNode(pContent[2]);
            pElement.appendChild(pText);
            divElement_Container.appendChild(pElement);

            pElement.style.color = "#FFC222";
        }
    }
}

if(verify() === ''){
    console.log(array);
}else{
    console.log(array);
}

addElement.onclick = verify;
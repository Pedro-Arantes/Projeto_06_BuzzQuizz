



//Declaração de Funções---------------------------------------------------------------------------------

 const insertQuizzes = (promise) => {
    const dataArray = promise.data;
    const element = document.querySelector(".allQuizzes .quizzes_boxes")
    //console.log(element.innerHTML);

    for (let i = 0; i < dataArray.length; i++) {
        let quizzImage = dataArray[i].image;
        let quizzTitle = dataArray[i].title;
        let quizzId = dataArray[i].id;
        const divQuizzBox = `<div onclick="getData2(this)"  id="${quizzId}"class="quizz_box">
        <div>
            <img src="${quizzImage}" alt="">
            <p>${quizzTitle}</p>
            <div class="gradient"></div>
        </div>
        </div>`
        element.innerHTML  += divQuizzBox;
        //console.log(element.innerHTML);
    }
    
    //let quizzQuestions = x[0].questions ;
    //let Quizztitle = x[0].title;
    //console.log(quizzImage);
    //console.log(quizzQuestions);
    console.log(dataArray);

};

const getData = () => {

    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
    promessa.then(insertQuizzes)

}
const algo = (element) => console.log(element);

//função esconde a tela 1 
const hideTela1 = () => {

    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector(".yourQuizzes");
    const el1 = element.classList.contains("hide");
    const el2 = elementYourQuiz.classList.contains("hide");

    arrayMenu = document.querySelectorAll(".menu")
    const elemento = arrayMenu[0];
    elemento.classList.remove("hide")
    
    //console.log(elementMenu);
    //className
   //console.log(element.classList.contains("hide"))

   if (el1) {

    elementYourQuiz.classList.add("hide");
    elementAllQuiz.classList.add("hide");
   }else if (el2){

    elementAllQuiz.classList.add("hide");
    element.classList.add("hide");
   }

    
}

//esconder na tela 3 o primeiro menu


const hideMenu1 = () =>{
    const element = arrayMenu[0]
    const element2 = arrayMenu[1]

    element.classList.add("hide");
    element2.classList.remove("hide");

}

const hideMenu2 = () => {
    const element = arrayMenu[1];
    const element2 = arrayMenu[2];

    element.classList.add("hide");
    element2.classList.remove("hide");
}

const hideMenu3 = ()  =>{
    const element = arrayMenu[2];
    const element2 = arrayMenu[3];

    element.classList.add("hide");
    element2.classList.remove("hide");
}

//volta pra tela 1 
const backHome = () =>{
    for (let i = 0; i < arrayMenu.length; i++) {
        const element = arrayMenu[i];
        if (element.classList.contains("hide")) {
            
        }
        element.classList.add("hide");
        
    }
    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector(".yourQuizzes");

    elementYourQuiz.classList.toggle("hide");
    elementAllQuiz.classList.toggle("hide");

}
//--------------------------------------------------------------------------------
const hideTela2 = () => {

    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector(".yourQuizzes");
    const el1 = element.classList.contains("hide");
    const el2 = elementYourQuiz.classList.contains("hide");
    //className
   //console.log(element.classList.contains("hide"))
   const elementPageTwo = document.querySelector(".pageTwo")
   

   if (el1) {

    elementYourQuiz.classList.add("hide");
    elementAllQuiz.classList.add("hide");
    elementPageTwo.classList.remove("hide")
   }else if (el2){

    elementAllQuiz.classList.add("hide");
    element.classList.add("hide");
    elementPageTwo.classList.remove("hide")
   }

    
}

const getData2 = (element) => {

    hideTela2();
    elementId =  element.id;
    //console.log(element.id)
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${elementId}`)
    promessa.then(treatData)
}

const treatData = (promise) => {
    const promessa = promise.data;
    imageQuiz = promessa.image;
    titleQuiz = promessa.title;
    //adicionar o titulo do quiz aqui
    const QuestArray =  promessa.questions;
    levelsArray = promessa.levels;
    questNum = QuestArray.length;

    //chamar funcao para definir os niveis
    levelDefine(levelsArray);
    //pegar elementos do html para as funçoes
    const divQuizTitle = document.querySelector(".titleQuizz");
    const modelo = `<img src="${imageQuiz}" alt="">
    <p>${titleQuiz}</p>
    <div class="gradient2"></div>`
    divQuizTitle.innerHTML = modelo;

    const divAnswer = document.querySelector(".boxQuestions");
   //chamar uma função para percorrer e add no html

   //funcao que adiciona o titulo da pergunta
   //addQuizTitle(QuestArray,divQuizTitle);

   //funcao que adiciona as respostas
   addAnswer(QuestArray,divAnswer);

    //console.log(promessa);
    console.log(titleQuiz);
   // console.log(levelsArray);
}

const addAnswer= (array,element,) =>{
    //const elemento = document.querySelector("");
    for (let i = 0; i < array.length; i++) {
        const titulo = array[i].title;
        let array1=  array[i].answers;
        console.log(array1);
        const arrayAnswer = array1.sort( () =>  Math.random() - 0.5); 
        console.log(arrayAnswer);
        const newClass = `num${i}`
        const modelo = `<div class = "boxQuestion"><div class="titleQuestions">
        <h2>${titulo}</h2>
        </div>
        <div class="boxAnswers  ${newClass}">
                    
        </div>
        </div>`;
        element.innerHTML+= modelo;
        const boxAnswers = document.querySelector(`.num${i}`)
        percorreArray(arrayAnswer,boxAnswers);
        
        
        
    }
}

const percorreArray = (array,element) =>{
    for (let i = 0; i < array.length; i++) {
        const correct = array[i].isCorrectAnswer;
        const img = array[i].image;
        const text = array[i].text;

        const modelo = `<div onclick="clickAnswer(this)"  id="${correct}"class="quizzAnswers">
        <img src="${img}" alt="Imagem respostas">
        <p>${text}</p>
        </div>`

        element.innerHTML+= modelo;
        //console.log(array)
    }
}

const addQuizTitle= (array,element) =>{
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i].title;
        const modelo = `<div>${elemento}<div>`;
        element.innerHTML+= modelo;
        
    }
}

 

//funcao para fazer algo ao clicar nas respostas
const clickAnswer = (element) => {
    const isCorrect = element.id ;
    const pai = element.parentNode;
    const filhos = pai.childNodes
    const p = element.querySelector(`${element.classList[0]} :nth-child(2)`);
    console.log(p);
    const eMarcado = pai.querySelectorAll(".marcado")
    
    if (eMarcado.length === 0) {
        element.classList.add("marcado")
        for (let i = 1; i < filhos.length; i++) {
            const element = filhos[i];
            if (element.classList.contains("marcado")) {
                
            }else{
                element.classList.add("opacity")
                
            }
        }
    }else{
       /*
       //Caso pudesse desmarcar 
       else{
        for (let i = 0; i < eMarcado.length; i++) {
            const elemento = eMarcado[i];
            elemento.classList.remove("marcado")
            elemento.classList.add("opacity")
            if (elemento.id === "true" &&  element.id === "true") {
                rigthAnswers--;
            }else{

            }
            
            
        }
        element.classList.remove("opacity")
        element.classList.add("marcado")
        
    } 
    */
        
    }
    
    
    if (isCorrect === "true") {
        rigthAnswers++;
        if (rigthAnswers>questNum) {
            rigthAnswers = questNum;
        }
    }else{
        rigthAnswers--;
        if (rigthAnswers<0) {
            rigthAnswers = 0;
        }
    }
    console.log(rigthAnswers)
}

//calculo

const calcula = (num1,num2) =>{
    const x = num1/num2;
    const  percent = x*100;
    result =   Math.round(percent) ;
}

//funcao para verificar se as respostas estão marcadas

const allChecked = () => {
    const elementArray = document.querySelectorAll(".marcado")
    //console.log()
    if (elementArray.length === questNum) {
        calcula(rigthAnswers,questNum);
        quizResult();
    }

}

//funcao para definir os niveis 

const levelDefine = (array) =>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i].minValue;
        valueArray.push(element);
    }
    console.log(valueArray);
}

//funcao para exibir o final da tela 2

const quizResult = () => {
    let  x = 0
    for (let i = 0; i < valueArray.length; i++) {
        const element = valueArray[i];
        console.log(result);
        console.log(element);
        
        if (result > element) {
            x++
       }else{
            x--
            if (x <0) {
                x = 0;
            }
            
       }

       if (result === 0) {
        alert(`Você acertou ${result}%!, logo voce é Nivel ${i}`)
        clearInterval(interval);
        break
        } else if(x === valueArray.length) {
            console.log(i+1)
            alert(`Você acertou ${result}%!, logo voce é Nivel ${i+1}`)
            clearInterval(interval);
            break
        }else if (valueArray.length -1 === i ){
            alert(`Você acertou ${result}%!, logo voce é Nivel ${x}`)
        }
        
    }
    
    clearInterval(interval);
    
}
//embaralha arrays
const embaralhador = (array) =>{
        for (let i = array.length - 1; i ; i--) {
        
        const randomIndice = Math.floor(Math.random() * (i + 1));
        const elemento = array[i - 1];
        array[randomIndice] = elemento;
        
        }
        // Retornando array com aleatoriedade
        return array;

        
}
const testeMap = (array) => {
    
    let  novoArray = mapa(array)
    console.log(novoArray);
    return embaralhador(novoArray);
}


 


//Declaração de variáveis Globais-------------------------------------------------------------

let elementId;
let imageQuiz;
let titleQuiz;

let modelo;
let levelsArray;
let questNum;

let maxPercent;
let valueArray = [];
let rigthAnswers = 0;
let result;

let arrayMenu;

//Chamada de Funções------------------------------------------------

getData();
const interval = setInterval(allChecked,1000);
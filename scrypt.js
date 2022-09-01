



//Declaração de Funções

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

const hideTela1 = () => {

    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector(".yourQuizzes");
    const el1 = element.classList.contains("hide");
    const el2 = elementYourQuiz.classList.contains("hide");
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

const getData2 = (element) => {

    hideTela1();
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
    //const divQuizTitle = document.querySelector("");
    //const divAnswer = document.querySelector("");
   //chamar uma função para percorrer e add no html

   //funcao que adiciona o titulo da pergunta
   //addQuizTitle(QuestArray,divQuizTitle);

   //funcao que adiciona as respostas
   //addAnswer(QuestArray,divAnswer);

    console.log(promessa);
    console.log(titleQuiz);
    console.log(levelsArray);
}

const addAnswer= (array,element,) =>{
    //const elemento = document.querySelector("");
    for (let i = 0; i < array.length; i++) {
        const titulo = array[i].title;
        const arrayAnswer = array[i].answers;
        
        percorreArray(arrayAnswer,elemento);
        const modelo = `<div>${titulo}<div>`;
        element.innerHTML+= modelo;
        
    }
}

const percorreArray = (array,element) =>{
    for (let i = 0; i < array.length; i++) {
        const correct = array[i].isCorrectAnswer;
        const img = array[i].image;
        const text = array[i].text;

        const modelo = `<div>Ola mundo ${text}  imagem ${img}  id = "${correct}"<div>`

        element.innerHTML+= modelo;
        
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
    if (isCorrect === "true") {
        rigthAnswers++;
    }else{

    }
    
}

//calculo

const calcula = (num1,num2) =>{
    const x = num1/num2;
    const  percent = x*100;
    result = percent;
}

//funcao para verificar se as respostas estão marcadas

const allChecked = () => {
    const elementArray = document.querySelectorAll("marcado")

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
    for (let i = 0; i < valueArray.length; i++) {
        const element = array[i];
        if (result > x) {
        
        }
    }
    
}
//Declaração de variáveis

let elementId;
let imageQuiz;
let titleQuiz;

let modelo;
let levelsArray;
let questNum;

let maxPercent;
let valueArray = [];
let rigthAnswers;
let result;

//Chamada de Funções 

getData();
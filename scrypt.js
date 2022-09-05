



//Declaração de Funções---------------------------------------------------------------------------------

 const insertQuizzes = (promise) => {
    const dataArray = promise.data;
    const element = document.querySelector(".allQuizzes .quizzes_boxes")
    let contador = 0;
    localStore();
    if (arrayIdLocal.length <= 0) {
        
    }else{
        const vazio = document.querySelector(".yourQuizzesVazio")
        const your = document.querySelector(".yourQuizzes")
        vazio.classList.add("hide");
        your.classList.remove("hide");
    }
    
    const modelo  = `<div class="sectionH3">
    <h3>Todos os Quizzes</h3>
    </div>
    <div class="sectionH3"></div>
    <div class="sectionH3 escondediv"></div>`
    const array = [];
    //console.log(element.innerHTML);
    element.innerHTML = modelo;
    for (let i = 0; i < dataArray.length; i++) {
        let quizzImage = dataArray[i].image;
        let quizzTitle = dataArray[i].title;
        let quizzId = dataArray[i].id;
        let condition = true;
        
        for (let i = 0; i < arrayIdLocal.length; i++) {
            const element = arrayIdLocal[i];
            const num = parseInt(element);
            //console.log(element);
            //console.log(num);
            console.log(quizzId === num)
            if (quizzId == num) {
                const obj = {
                    image: quizzImage,
                    title:    quizzTitle,
                    id:  quizzId
                }
                array.push(obj);
                condition = false;
                contador++;
                console.log(condition);
            }
               
            
        }
        if (condition) {
            const divQuizzBox = `<div onclick="getData2(this)"  id="${quizzId}"class="quizz_box">
            <div>
            <img src="${quizzImage}" alt="">
            <p>${quizzTitle}</p>
            <div class="gradient"></div>
            </div>
            </div>`
            element.innerHTML  += divQuizzBox;
        }
       
        
        
        //console.log(element.innerHTML);
    }

    if (contador === 0) {
        const vazio = document.querySelector(".yourQuizzesVazio")
        const your = document.querySelector(".yourQuizzes")
        vazio.classList.remove("hide");
        your.classList.add("hide");
    }
    if (array.length <1) {
        
    }else{
        insertYourQuiz(array);
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

    arrayMenu1 = document.querySelectorAll(".menu")
    const elemento = arrayMenu1[0];
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


/*const hideMenu1 = () =>{
    const element = arrayMenu1[0]
    const element2 = arrayMenu1[1]

    element.classList.add("hide");
    element2.classList.remove("hide");

}

const hideMenu2 = () => {
    const element = arrayMenu1[1];
    const element2 = arrayMenu1[2];

    element.classList.add("hide");
    element2.classList.remove("hide");
}

const hideMenu3 = ()  =>{
    const element = arrayMenu1[2];
    const element2 = arrayMenu1[3];

    element.classList.add("hide");
    element2.classList.remove("hide");
}

//volta pra tela 1 
const backHome = () =>{
    for (let i = 0; i < arrayMenu1.length; i++) {
        const element = arrayMenu1[i];
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
*/
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
    imageQuiz = "";
    titleQuiz = "";
    imageQuiz = promessa.image;
    titleQuiz = promessa.title;
    //adicionar o titulo do quiz aqui
    QuestArray =  "";
    levelsArray = "";
    QuestArray =  promessa.questions;
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
    divQuizTitle.scrollIntoView();
    //console.log(promessa);
    console.log(titleQuiz);
   // console.log(levelsArray);
   interval = setInterval(allChecked,1000);
}

const addAnswer= (array,element,) =>{
    //const elemento = document.querySelector("");
    element.innerHTML= "";
    for (let i = 0; i < array.length; i++) {
        const titulo = array[i].title;
        const color = array[i].color;
        let array1=  array[i].answers;
        console.log(array1);
        const arrayAnswer = array1.sort( () =>  Math.random() - 0.5); 
        console.log(arrayAnswer);
        const newClass = `num${i}`
        const modelo = `<div  class = "boxQuestion"><div style="background-color:${color}" class="titleQuestions">
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
    const pai2 = pai.parentNode;
    const filhos = pai.childNodes
    
    
    const p = element.querySelector(`p`);
    console.log(p);
    const eMarcado = pai.querySelectorAll(".marcado")
    if (pai2.nextSibling !== null) {
        const sib = pai2.nextSibling;
        const sibling = sib.querySelector(".titleQuestions");
        setTimeout(scrollEle,2000,sibling)
        
        
    }

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
    const eMarcado2 = document.querySelectorAll(".marcado")
    
    if (element.classList.contains("firstClick")) {
        
    }else{
        if (isCorrect === "true") {
            rigthAnswers++;
            p.classList.add("acerto")
            if (rigthAnswers>questNum) {
                rigthAnswers = questNum;
            }
        }else{
            if (rigthAnswers === 1 &&  eMarcado2.length === 2) {
                console.log("to aqui")
            }else if (rigthAnswers > 1){
                
            }
            
            p.classList.add("erro")
            if (rigthAnswers<0) {
                rigthAnswers = 0;
            }
        }
        element.classList.add("firstClick")
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
    valueArray = [];
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
        const divAnswer = document.querySelector(".boxQuestions");
        
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
        
        const modelo = `<div class="container">
        <div class="container2">${result}% de acerto: ${levelsArray[i].title}</div>
        <div class="fotolegenda">
            <div class="container3">
                <img src="${levelsArray[i].image}"/>
            </div>
            <div class="container4">
                <p>${levelsArray[i].text}</p>
            </div>
        </div>
        </div>
        <button onclick="reiniciaQuizz()">Reiniciar Quizz</button>
        <p onclick="backHome2()" class="back">Voltar pra home</p>`
        divAnswer.innerHTML+=modelo;
        const scroll = document.querySelector(".container")
        setTimeout(scrollEle,2000,scroll);
        clearInterval(interval);
        break
        } else if(x === valueArray.length) {
            console.log(i+1)
            
            const modelo = `<div class="container">
            <div class="container2">${result}% de acerto: ${levelsArray[i].title}</div>
            <div class="fotolegenda">
            <div class="container3">
                <img src="${levelsArray[i].image}"/>
            </div>
            <div class="container4">
                <p>${levelsArray[i].text}</p>
            </div>
            </div>
            </div>
            <button onclick="reiniciaQuizz()">Reiniciar Quizz</button>
            <p onclick="backHome2()" class="back">Voltar pra home</p>`
            divAnswer.innerHTML+=modelo;
            const scroll = document.querySelector(".container")
            setTimeout(scrollEle,2000,scroll);
            clearInterval(interval);
            break
        }else if (valueArray.length -1 === i ){
           
            const modelo = `<div class="container">
            <div class="container2">${result}% de acerto: ${levelsArray[x].title}</div>
            <div class="fotolegenda">
            <div class="container3">
                <img src="${levelsArray[x].image}"/>
            </div>
            <div class="container4">
                <p>${levelsArray[x].text}</p>
            </div>
            </div>
            </div>
            <button onclick="reiniciaQuizz()">Reiniciar Quizz</button>
            <p onclick="backHome2()" class="back">Voltar pra home</p>`
            divAnswer.innerHTML+=modelo;
            const scroll = document.querySelector(".container")
            setTimeout(scrollEle,2000,scroll);
            clearInterval(interval);
            break
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


const reiniciaQuizz= () => {
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${elementId}`)
    promessa.then(treatData);
    interval = setInterval(allChecked,1000);
    rigthAnswers = 0;
}
 
const backHome2 = () =>{
    const elementPage2 = document.querySelector(".pageTwo");
    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector(".yourQuizzes");

    elementPage2.classList.toggle("hide");
    elementYourQuiz.classList.toggle("hide");
    elementAllQuiz.classList.toggle("hide");
    elementYourQuiz.scrollIntoView();
    
    getData();
    
    rigthAnswers = 0;
}

const scrollEle = (element) =>{
    element.scrollIntoView();
}
const localStore = () =>{

    const arrayTitulos = JSON.parse(localStorage.getItem(`titulos`)) ;
    console.log(arrayTitulos);
    arrayIdLocal = [];
    if (arrayTitulos === null) {
        
    }else{
        for (let i = 0; i < arrayTitulos.length; i++) {
        
            const id = localStorage.getItem(`${arrayTitulos[i]}`);
            arrayIdLocal.push(id);
            
        }
    }
    console.log(arrayIdLocal);
    
   
    
   
}

const insertYourQuiz  = (array) =>{
    
    const element = document.querySelector(".yourQuizzes")
    const vazio = document.querySelector(".yourQuizzesVazio")
    

    vazio.classList.add("hide")
    element.classList.remove("hide")

    const modelo = `<div class="sectionH3 seus">
    <h3>Seus Quizzes</h3>
    <ion-icon onclick="hideTela1()" name="add-circle"></ion-icon>
    </div>
    <div class="sectionH3"></div>

    <div class="sectionH3 escondediv"></div>`
    element.innerHTML = modelo;

    for (let i = 0; i < array.length; i++) {
        
        let quizzImage = array[i].image;
        let quizzTitle = array[i].title;
        let quizzId = array[i].id;
        const divQuizzBox = `<div onclick="getData2(this)"  id="${quizzId}"class="quizz_box">
            <div>
            <img src="${quizzImage}" alt="">
            <p>${quizzTitle}</p>
            <div class="gradient"></div>
            </div>
            </div>`
        element.innerHTML  += divQuizzBox;
    }
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

let arrayMenu1;
let QuestArray;

let arrayIdLocal = [];
let counter = 0;

//Chamada de Funções------------------------------------------------

getData();
let interval ;
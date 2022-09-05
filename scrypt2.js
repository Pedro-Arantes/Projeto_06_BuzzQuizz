

//Declaração de Funções ----------------------------------------------------

const hideMenu1 = () =>{
    const element = arrayMenu[0]
    const element2 = arrayMenu[1]

    

    const tituloQuizz = document.querySelector("#tela3Titulo")
    tituloValue = tituloQuizz.value;
    tituloQuizz.value = "";
    const urlImage = document.querySelector("#urlImg")
    imgValue = urlImage.value;
    urlImage.value = "";
    const qntPerg = document.querySelector("#qntPerg")
    qntPergValue = qntPerg.value;
    qntPerg.value = "";
    const qntNv = document.querySelector("#qntNv")
    qntNvValue = qntNv.value;
    qntNv.value = "";

    if (qntPergValue < 3) {
        alert("O quizz deve ter 3 perguntas no minimo");
    }else if(qntNvValue<2){
        alert("O quizz deve ter 2 níveis no minimo");
    }else if (tituloValue.length <20 || tituloValue.length > 65){
        alert("O titulo do quizz deve ter caracteres entre 20 e 65");
    }else if (imgValue.search("https://" )=== -1){
        alert("A imagem deve ser passada em url");
    }else{
        
        element.classList.add("hide");
        element2.classList.remove("hide");
        inserePerguntas();
    }

    

}

const hideMenu2 = () => {
    const element = arrayMenu[1];
    const element2 = arrayMenu[2];

    

    
    const boolean = capturaPerguntas();
    if (boolean) {
        element.classList.add("hide");
        element2.classList.remove("hide");
        insereLevels();
    }else{
        alert("tem algo errado no preenchimento")
    }
    
}

const hideMenu3 = ()  =>{
    const element = arrayMenu[2];
    const element2 = arrayMenu[3];

    
    const boolean  = capturaLevels();
    if (boolean) {
        element.classList.add("hide");
        element2.classList.remove("hide");
        postQuizz();
        insereFinal();
    }else{
        alert("tem algo errado no preenchimento");
    }
    
}

const backHome = () =>{
    
    const  elementYourQuiz = document.querySelector(".yourQuizzesVazio");
    const elementAllQuiz = document.querySelector(".allQuizzes");
    const element = document.querySelector("#menu4");

    elementYourQuiz.classList.toggle("hide");
    elementAllQuiz.classList.toggle("hide");
    element.classList.toggle("hide")

    getData();
    
    rigthAnswers = 0;
}

const inserePerguntas = () => {
    
    const menu2 = document.querySelector("#menu2")

    const modelo4 =`<h1 class="titulo-inputs">Crie suas perguntas</h1>`
    
    menu2.innerHTML = modelo4;

    


    for (let i = 0; i < qntPergValue; i++) {
        let hide = ""
        let colocaId = ``
        if (i>0) {
            hide = "hide"
            colocaId = `id = "inputBox"`
        }
        const modelo = `<div ${colocaId} class="caixa-inputs-pergunta ${hide} perg${i+1}">
        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Pergunta ${i+1}</p>
        </div>
        <input id="txt${i+1}" placeholder="Texto da pergunta">
        <input id="cor${i+1}" placeholder="Cor de fundo da pergunta">
        </div>

        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Resposta correta</p>
        </div>
        <input id="correct${i+1}" placeholder="Resposta correta">
        <input id="correctImg${i+1}"placeholder="URL da imagem">
        </div>

        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Respostas incorretas</p>
        </div>
        <input id="erro1Perg${i+1}" placeholder="Resposta incorreta 1">
        <input id="erroImg1Perg${i+1}" placeholder="URL da imagem 1">
        <input id="erro2Perg${i+1}" placeholder="Resposta incorreta 2">
        <input id="erroImg2Perg${i+1}" placeholder="URL da imagem 2">
        <input  id="erro3Perg${i+1}"placeholder="Resposta incorreta 3">
        <input  id="erroImg3Perg${i+1}"placeholder="URL da imagem 3">
        </div>
        </div>`;
        
        if (i === 0) {
            menu2.innerHTML+= modelo;
        }else{
            const modelo2 = `<div class=" caixa-inputs-pergunta  edit">
            <p>Pergunta ${i+1}</p>
            <ion-icon onclick = "abrePergunta(this)"  name="create-outline"></ion-icon>
            ${modelo}
            </div>
            `;
            menu2.innerHTML+= modelo2;
        }

        
        
    }
    const modeloBtn = `<button onclick="hideMenu2 ()">Prosseguir pra criar níveis</button>`
    menu2.innerHTML+= modeloBtn;
}

const insereLevels = ()=>{
    
    
    const menu3 = document.querySelector(".divLevels")
    const modelo1 = `<h1 class="titulo-inputs">Agora, decida os níveis</h1>`
    menu3.innerHTML = modelo1;
    

    
    for (let i = 0; i < qntNvValue; i++) {
        let hide = ""
        let colocaId;

        if (i>0) {
            hide = "hide"
            colocaId = `id = "inputBox"`;
        }

        const modelo = `<div ${colocaId} class="caixa-inputs ${hide} ">
        <div>
            <p class="titulo-dentro-input">Nível ${i+1}</p>
        </div>
        <input id="tituloNv${i+1}" placeholder="Título do nível"></input>
        <input id="acertNv${i+1}" placeholder="% de acerto mínima"></input>
        <input id="urlNv${i+1}" placeholder="URL da imagem do nível"></input>
        <div>
            <textarea id="txtNv${i+1}" placeholder="Descrição do nível"></textarea>
        </div>
        </div>`;        
        const modelo2 = `<div class="caixa-inputs  edit2">
        <p>Nível ${i+1}</p>
        <ion-icon onclick = "abrePergunta(this)"  name="create-outline"></ion-icon>
        ${modelo}
        </div>`;
        if (i === 0) {
            menu3.innerHTML+= modelo;
        }else{
            menu3.innerHTML+= modelo2;
        }

        
        
    }


    const modeloBtn = `<button onclick="hideMenu3 ()">Finalizar Quizz</button>`
    menu3.innerHTML+= modeloBtn;
}

const insereFinal = () => {

    const modelo = `<div onclick = "tela2Criado()" class="imagem-comlegenda">
    <img src="${imgValue}" />
    <p>${tituloValue}</p>
    </div>
    <button onclick = "tela2Criado()">Acessar Quizz</button>
    <p class="back" onclick="backHome()">Voltar para home</p>`
    const modelo1 = `<h1 class="titulo-inputs">Seu Quizz está pronto!</h1>`
    const menu4 = document.querySelector("#menu4")
    menu4.innerHTML = modelo1;
    menu4.innerHTML+= modelo;
}

const capturaPerguntas = ()  =>{
    if (verificaPergunt()) {
        for (let i = 0; i < qntPergValue; i++) {

            const arrayAnswers  = capturaAnswers(i+1);
            //console.log(arrayAnswers);
            const txt = document.querySelector(`#txt${i+1}`).value;
            const color = document.querySelector(`#cor${i+1}`).value;
            const obj = {
                title:  `${txt}`,
                color: `${color}`,
                answers: arrayAnswers
            }
            questArray.push(obj); 
        }
        return true
    }else{
        return false
    }
    
    //console.log( questArray);
    
}

const capturaAnswers = (num) =>{
    const array = [];
    const txt = document.querySelector(`#correct${num}`).value;
    const img = document.querySelector(`#correctImg${num}`).value;

    

    const obj = {text:`${txt}`,
    image:`${img}`,
    isCorrectAnswer: true
    }
    array.push(obj);
    for (let i = 0; i < 3; i++) {
        let contador = 0
        const txt = document.querySelector(`#erro${i+1}Perg${num}`).value;
        const img = document.querySelector(`#erroImg${i+1}Perg${num}`).value;
        if ((txt === "null"  || txt === "vazio")&& contador <2) {
            contador++
        }else if(contador === 2){
            const obj = {text:`${txt}`,
            image:`${img}`,
            isCorrectAnswer: false
            }
            array.push(obj);
            console.log("teste contador")
        }else{
            const obj = {text:`${txt}`,
            image:`${img}`,
            isCorrectAnswer: false
            }
            array.push(obj);
            console.log("teste contador")
        }
        
        
    }
    //console.log(array);
    return array;
}

const capturaLevels = () =>{

    if (verifyLevels()) {
        for (let i = 0; i < qntNvValue; i++) {

        
            //console.log(arrayAnswers);
            const title = document.querySelector(`#tituloNv${i+1}`).value;
            const value = document.querySelector(`#acertNv${i+1}`).value;
            const img = document.querySelector(`#urlNv${i+1}`).value;
            const txt = document.querySelector(`#txtNv${i+1}`).value;
            
            const obj = {
                title:  `${title}`,
                image: `${img}`,
                text:  `${txt}`,
                minValue: value
            }
            levelArray.push(obj); 
        }
        return true
    }else{
        return false
    }
    
    
}

const abrePergunta = (element) =>{
    const pai = element.parentNode;
    const sib = pai.querySelector("div");
    const p = pai.querySelector("p");
    p.classList.toggle("hide")
    //element.classList.toggle("hide");
    sib.classList.toggle("hide");
    pai.classList.toggle("edit");
    
}

const postQuizz = () =>{
    const obj ={
        title: `${tituloValue}`,
	    image:  `${imgValue}` ,
        questions: questArray,
        levels: levelArray
    }
    
    console.log(obj);
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', obj);
    requisicao.then(postado,obj)
};

const postado = (obj,objeto) =>{
    const data = obj.data;
    id = data.id;
    console.log(id);
    const arrayTitulos = JSON.parse(localStorage.getItem(`titulos`)) ;
    //const arrayObjetos = JSON.parse(localStorage.getItem(`objetos`)) ;
    arrayTitulos.push(tituloValue);
    //arrayObjetos.push(objeto)
    localStorage.setItem("titulos", `${JSON.stringify(arrayTitulos)}`);
    //localStorage.setItem("objetos", `${JSON.stringify(arrayObjetos)}`);

    localStorage.setItem(`${tituloValue}`, `${id}`);
    //countGlobal++;
}

const verificaPergunt = () =>{
    let boolean;
    for (let i = 0; i < qntPergValue; i++) {

        const txt = document.querySelector(`#txt${i+1}`).value;
        const color = document.querySelector(`#cor${i+1}`).value;
        const verify  = verifyAnswers(i+1);
        
        if (verify) {
            if (txt.length < 20) {
                //console.log("deu ruim no txt")
                boolean = false;
                break
            } else if (color.length !== 7 || color.search("#") === -1){
                //console.log("deu ruim na color")
                boolean = false;
                break
                
            }else{
                boolean = true;
            }
        } else{
            boolean = false;
        }
        //console.log(arrayAnswers);
        
        //console.log("to no array verify")
        
       
    }
    return boolean;
}

const verifyAnswers = (num) =>{
    let boolean;
    const txt = document.querySelector(`#correct${num}`).value;
    const img = document.querySelector(`#correctImg${num}`).value;
    if (txt.length < 1) {
        console.log("erro no titulo da pergunta");
        boolean = false;
    }else if(img.search("https://" )=== -1){
        console.log("erro na img");
        boolean = false;
    } else{
        for (let i = 0; i < 3; i++) {
            const txt = document.querySelector(`#erro${i+1}Perg${num}`).value;
            const img = document.querySelector(`#erroImg${i+1}Perg${num}`).value;
            if (txt.length < 1) {
                console.log("erro no titulo da pergunta");
                boolean = false;
                break
            }else if(img.search("https://" )=== -1){
                console.log("erro na img");
                boolean = false;
                break
            }else{
                boolean = true;
            }
        }
    }
    return boolean;
}

const verifyLevels = () =>{
    let boolean ;
    let array =[];
    for (let i = 0; i < qntNvValue; i++) {

        
        //console.log(arrayAnswers);
        const title = document.querySelector(`#tituloNv${i+1}`).value;
        const value = document.querySelector(`#acertNv${i+1}`).value;
        const img = document.querySelector(`#urlNv${i+1}`).value;
        const txt = document.querySelector(`#txtNv${i+1}`).value;
        array.push(value);
        
        if (title.length <10) {
            boolean = false;
            break
        }else if(value < 0 && value >100){
            boolean = false;
            break
        }else if (img.search("https://" )=== -1){
            boolean = false ;
            break
        }else if (txt.length <30){
            boolean = false ;
            break
        }
    }
    if (verifyValue(array)) {
        boolean = true
    }else{
       
        boolean = false
    }
    return boolean;
}

const verifyValue = (array) =>{
    let counter = 0;
    let boolean;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (element == 0) {
            counter++
        }
    }
    console.log(counter)
    if (counter === 1) {
        boolean = true
        console.log(counter)
    } else{
        boolean = false
        
    }
    return boolean;
}

const tela2Criado = () =>{
    hideTela3_2();
    
    //console.log(element.id)
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    promessa.then(treatData)
}

const hideTela3_2 = () =>{
    const  menu4 = document.querySelector("#menu4");
    const elementPageTwo = document.querySelector(".pageTwo")

    menu4.classList.add("hide");
    
    elementPageTwo.classList.remove("hide")

};

const treatData2 = (promise) =>{
    const promessa = promise.data;
    imageQuiz2 = promessa.image;
    titleQuiz2 = promessa.title;
    //adicionar o titulo do quiz aqui
    QuestArray2 =  promessa.questions;
    levelsArray2= promessa.levels;
    questNum2 = QuestArray2.length;

    //chamar funcao para definir os niveis
    levelDefine2(levelsArray2);
    //pegar elementos do html para as funçoes
    const divQuizTitle = document.querySelector(".titleQuizz");
    const modelo = `<img src="${imageQuiz2}" alt="">
    <p>${titleQuiz2}</p>
    <div class="gradient2"></div>`

    divQuizTitle.innerHTML = modelo;

    const divAnswer = document.querySelector(".boxQuestions");


   //funcao que adiciona as respostas
   addAnswer2(QuestArray2,divAnswer);
    divQuizTitle.scrollIntoView();
    
   //console.log(titleQuiz);
   
}

const addAnswer2= (array,element,) =>{
    //const elemento = document.querySelector("");
    element.innerHTML= "";
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
        percorreArray2(arrayAnswer,boxAnswers);
        
        
        
    }
}

const percorreArray2 = (array,element) =>{
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

const levelDefine2 = (array) =>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i].minValue;
        valueArray.push(element);
    }
    console.log(valueArray);
}


//Declaração de Variáveis Globais----------------------------------

let arrayMenu = document.querySelectorAll(".menu")

let tituloValue;
let imgValue;
let qntPergValue;
let qntNvValue;
let questArray = [];
let levelArray = [];
let id;
let countGlobal = 0;


let arrayTitulos = [];

//var globais para renderizar a tela2
let imageQuiz2;
let titleQuiz2;
let QuestArray2;
let levelsArray2;
let questNum2;








//Chamada de Função ---------------------------------------------


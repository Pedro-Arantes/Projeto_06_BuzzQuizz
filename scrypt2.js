

//Declaração de Funções ----------------------------------------------------

const hideMenu1 = () =>{
    const element = arrayMenu[0]
    const element2 = arrayMenu[1]

    element.classList.add("hide");
    element2.classList.remove("hide");

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
    

    inserePerguntas();

}

const hideMenu2 = () => {
    const element = arrayMenu[1];
    const element2 = arrayMenu[2];

    element.classList.add("hide");
    element2.classList.remove("hide");

    
    capturaPerguntas();
    insereLevels();
}

const hideMenu3 = ()  =>{
    const element = arrayMenu[2];
    const element2 = arrayMenu[3];

    element.classList.add("hide");
    element2.classList.remove("hide");

    insereFinal();
}

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

    limpatela()

}

const inserePerguntas = () => {
    
    const menu2 = document.querySelector("#menu2")

    const modelo4 =`<h1 class="titulo-inputs">Crie suas perguntas</h1>`
    
    menu2.innerHTML = modelo4;

    

    

    for (let i = 0; i < qntPergValue; i++) {
        let hide = ""

        if (i>0) {
            hide = "hide"
        }
        const modelo = `<div class="caixa-inputs-pergunta ${hide} perg${i+1}">
        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Pergunta 1</p>
        </div>
        <input class="txt${i+1}" placeholder="Texto da pergunta">
        <input class="cor${i+1}" placeholder="Cor de fundo da pergunta">
        </div>

        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Resposta correta</p>
        </div>
        <input placeholder="Resposta correta">
        <input placeholder="URL da imagem">
        </div>

        <div class="pergunta-dividida ">
        <div>
            <p class="titulo-dentro-input">Respostas incorretas</p>
        </div>
        <input placeholder="Resposta incorreta 1">
        <input placeholder="URL da imagem 1">
        <input placeholder="Resposta incorreta 2">
        <input placeholder="URL da imagem 2">
        <input placeholder="Resposta incorreta 3">
        <input placeholder="URL da imagem 3">
        </div>
        </div>`;
        
        if (i === 0) {
            menu2.innerHTML+= modelo;
        }else{
            const modelo2 = `<div class=" caixa-inputs-pergunta  edit">Pergunta ${i+1}
            <ion-icon onclick = "abrePergunta(this)"  name="create-outline"></ion-icon>
            </div>
            ${modelo}`;
            menu2.innerHTML+= modelo2;
        }

        
        
    }
    const modeloBtn = `<button onclick="hideMenu2 ()">Prosseguir pra criar níveis</button>`
    menu2.innerHTML+= modeloBtn;
}

const insereLevels = ()=>{
    const modelo = `<div class="caixa-inputs ">
    <div>
        <p class="titulo-dentro-input">Nível 1</p>
    </div>
    <input placeholder="Título do nível"></input>
    <input placeholder="% de acerto mínima"></input>
    <input placeholder="URL da imagem do nível"></input>
    <div>
        <textarea placeholder="Descrição do nível"></textarea>
    </div>
    </div>`;
    
    const menu3 = document.querySelector("#menu3")
    const modelo1 = `<h1 class="titulo-inputs">Agora, decida os níveis</h1>`
    menu3.innerHTML = modelo1;
    

    
    for (let i = 0; i < qntNvValue; i++) {
        const modelo2 = `<div class="caixa-inputs  edit">Nível ${i+1}
        <ion-icon onclick = "abreNível()"  name="create-outline"></ion-icon>
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

    const modelo = `<div class="imagem-comlegenda">
    <img src="${imgValue}" />
    <p>${tituloValue}</p>
    </div>
    <button>Acessar Quizz</button>
    <p class="back" onclick="backHome()">Voltar para home</p>`
    const modelo1 = `<h1 class="titulo-inputs">Seu Quizz está pronto!</h1>`
    const menu4 = document.querySelector("#menu4")
    menu4.innerHTML = modelo1;
    menu4.innerHTML+= modelo;
}

const capturaPerguntas = ()  =>{

}



//Declaração de Variáveis Globais----------------------------------

let arrayMenu = document.querySelectorAll(".menu")

let tituloValue;
let imgValue;
let qntPergValue;
let qntNvValue;










//Chamada de Função ---------------------------------------------





























































































































































































































































































































































































































































 function enviarQuiz() {

    const tituloQuizz = document.querySelector("#tela3Titulo")
    const tituloValue = tituloQuizz.value;
    const parte1 = document.querySelector('.pd0');
    const title = parte1.children[0];
    const url = parte1.children[1];
    const qtPerg = parte1.children[2];
    const qtNiveis = parte1.children[3];

    const parte2 = document.querySelector('.pd1');
    const perg1 = parte2.children[1];
    const cor = parte2.children[2];

    const parte3 = document.querySelector('.pd2');
    const respCerta = parte3.children[1];
    const urlRespCerta = parte3.children[2];

    const parte4 = document.querySelector('.pd3');
    const respErrada1 = parte4.children[1];
    const urlRespErrada1 = parte4.children[2];
    const respErrada2 = parte4.children[3];
    const urlRespErrada2 = parte4.children[4];
    const respErrada3 = parte4.children[5];
    const urlRespErrada3 = parte4.children[6];

    /* criar pergunta 2 e 3 no html */
    /* criar parametros dos inputs no html */
   
    const parte5 = document.querySelector('.pd4');
    const tituloNivel = parte5.children[1];
    const acertoMinimo = parte5.children[2];
    const urlNivel = parte5.children[3];
    const descrNivel = parte5.children[4];

    /* criar nível 2 e 3 no html */
    
    
            
              
    }


    


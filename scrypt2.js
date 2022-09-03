

//Declaração de Funções ----------------------------------------------------

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

//Declaração de Variáveis Globais----------------------------------

let arrayMenu = document.querySelectorAll(".menu")



//Chamada de Função ---------------------------------------------































































































































































































































































































































































































































































 function enviarQuiz() {
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
    
    const objeto = {
        title: title.value,
        image: url.value,
        questions: [
            {
                title: perg1.value,
                color: cor.value,
                answers: [
                    {
                        text: respCerta.value,
                        image: urlRespCerta.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: respErrada1.value,
                        image: urlRespErrada1.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: pergunta2queaindanaotem.value,
                color: "#123456",
                answers: [
              
    }


    const promessa = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', 
}

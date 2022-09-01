



//Declaração de Funções

 const insertQuizzes = (promise) => {
    const dataArray = promise.data;
    const element = document.querySelector(".allQuizzes .quizzes_boxes")
    console.log(element.innerHTML);

    for (let i = 0; i < dataArray.length; i++) {
        let quizzImage = dataArray[i].image;
        let quizzTitle = dataArray[i].title;
        let quizzId = dataArray[i].id;
        divQuizzBox = `<div onclick="algo()"  id="${quizzId}"class="quizz_box">
        <div>
            <img src="${quizzImage}" alt="">
            <p>${quizzTitle}</p>
            <div class="gradient"></div>
        </div>
        </div>`
        element.innerHTML  += divQuizzBox;
        console.log(element.innerHTML);
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
const algo = () => alert("Algo acontece");

//Declaração de variáveis

let divQuizzBox = `
<div class="quizz_box">
<div>
    <img src="img/axolotehd.jpg" alt="">
    <p>Acerte os personagens corretos dos Simpsons e prove seu amor!</p>
    <div class="gradient"></div>
</div>
</div>
`


//Chamada de Funções 

getData();
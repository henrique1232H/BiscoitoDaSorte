
const messageForFortuneCookie = () => {
    
    return [
        "A vida trará coisas boas se tiver paciência.",
        
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
        
        "Não compense na ira o que lhe falta na razão.",
        
        "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        
        "A maior de todas as torres começa no solo.",
        
        "Não há que ser forte. Há que ser flexível.",
        
        "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
        
        "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
    ]
}


const randomNumber = () => {
    const randomText = messageForFortuneCookie().length - 1;

    return Math.round(Math.random() * (randomText - 0) - 0);
}


const takeQuerySelector = () => {
    const imgClick = document.querySelectorAll("img")[0];
    const button = document.querySelector("button");
    const screen2 = document.querySelector(".screen2");
    const screen1 = document.querySelector(".screen1");
    const main = document.querySelector("main");
    const h2 = document.querySelector("h2")

    return {
        imgClick: imgClick,
        button: button,
        screen1: screen1,
        screen2: screen2,
        main: main,
        h2: h2
    }
}


const takeQuery = takeQuerySelector();


const imgClick = () => {

    const messages = messageForFortuneCookie();


    takeQuery.imgClick.addEventListener("click", () => {
        
        takeQuery.screen1.classList.add("DisplayNone");
        takeQuery.main.classList.add("mainBigger");
        takeQuery.screen2.classList.remove("DisplayNone");
        const number = randomNumber();
        console.log(number)


        for(let i = 0; i <= number; i++) {
            takeQuery.h2.innerHTML = messages[i] 
        }

    })

    addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            takeQuery.screen1.classList.add("DisplayNone");
            takeQuery.main.classList.add("mainBigger");
            takeQuery.screen2.classList.remove("DisplayNone");
            const number = randomNumber();
            console.log(number)


            for(let i = 0; i <= number; i++) {
                takeQuery.h2.innerHTML = messages[i] 
            }
        }
    })
}


const buttonBack = () => {
    takeQuery.button.addEventListener("click", () => {
        takeQuery.screen2.classList.add("DisplayNone");
        takeQuery.screen1.classList.remove("DisplayNone");
        takeQuery.main.classList.remove("mainBigger");
    })

    addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            takeQuery.screen2.classList.add("DisplayNone");
            takeQuery.screen1.classList.remove("DisplayNone");
            takeQuery.main.classList.remove("mainBigger");
        }
    })
}

imgClick();
buttonBack();
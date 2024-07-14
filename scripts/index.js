let numberMather = document.querySelector("#number-mather");
const nameMather = document.querySelector("#mather");
const startDate = document.querySelector("#date-start");
const endDate = document.querySelector("#date-conclusion");
const completedNumber = document.querySelector("#goals-completed");
const dataGraphic = document.querySelector("#data-graphic");
let graphicProgress = document.querySelector("#graphic-progress");

let count = 0;
let anotherCount = 0;
let countProgress = 1;

const startBtn = document.querySelector("#start");
const addBtnCompleted = document.querySelector("#to-add");
const subtractBtnCompleted = document.querySelector("#subtract");

function summary() {

    const goalName = (nameMather.value);
    let numberClasses = Number(numberMather.value);
    const targetStartDate = (startDate.value);
    const targetEndDate = (startDate.value);

    const summaryRegisteredGoals = document.querySelector("#select-goals");

    const newGoalLocation = document.createElement("span");

    const goalSummary = (`Nome da meta: ${goalName} | Total de aulas: ${numberClasses} | Data de início: ${targetStartDate} | Previsão de conslusão: ${targetEndDate}`); 

    newGoalLocation.appendChild(document.createTextNode(goalSummary));

    summaryRegisteredGoals.appendChild(newGoalLocation);

};


function numberClasse() {

    let numberOfClasses = Number(numberMather.value);

    const fragmentClasse = document.createDocumentFragment();


    while(count < numberOfClasses) {

        const imgClose = document.createElement("img");

        imgClose.src = "assets/graduation_close.svg";
        imgClose.alt = "Icone de aula com seleção fechada";

        fragmentClasse.appendChild(imgClose);

        count++;
    }

    document.querySelector(".conclusion").appendChild(fragmentClasse);

};

function updateClasses() {

    let upNumberClasses = Number(numberMather.value);

    const studyGoal = document.querySelector("#study-goal");

    const newStudyGoal = document.createElement("p");
    
    newStudyGoal.appendChild(document.createTextNode(upNumberClasses));

    studyGoal.appendChild(newStudyGoal);

}

//Gráfico
function progress() {

    let addProgress = countProgress++;

    let numberMatherValue = numberMather.value;
    let calcGoalsValue = (addProgress * 100) / numberMatherValue; 
    let graphicProgressCalc = (340 - (340 * calcGoalsValue) / 100);

    if (addProgress <= numberMatherValue ) {
    completedNumber.innerHTML = addProgress;

    graphicProgress.style.strokeDashoffset = graphicProgressCalc;
    }
};

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    numberClasse();

    summary();

    updateClasses();

});

addBtnCompleted.addEventListener("click", () => {

    progress();

});

subtractBtnCompleted.addEventListener("click", () => {
    anotherCount--;
    updateCompletedNumber();
});







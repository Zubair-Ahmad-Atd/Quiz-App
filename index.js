import inquirer from 'inquirer';
// let questions = [{ 
//     Q1:"Capital of pakistan?",
//     choice:{ 
//         1:"karachi",
//         2:"lahore",
//         3:"Islamabad"
//     }
// },{ 
//     Q2:"Who is pm of pakistan",
//     choice:{ 
//         1:"bilawal",
//         2:"imran khan",
//         3:"nawaz sharif"
//     }
// },{ 
//     Q3:"Which language is used to make wedsite interective?",
//     choice:{ 
//         1:"html",
//         2:"css",
//         3: "javascript"
//     }
// }]; 
//  if(questions[0].Q1){
// let ans = await inquirer.prompt({ 
//     type:"list",
//     name: "userAns",
//     message:"select option",
//     choices: questions[0].choice
// })
//  }
let apidata = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiplehttps://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple";
let fetchData = async (dataapi) => {
    let dataFetch = await fetch(dataapi);
    let data = await dataFetch.json();
    return data;
};
let userEntry = async () => {
    let score = 0;
    let ans = await inquirer.prompt({
        type: "input",
        name: "userName",
        message: "Enter your name..."
    });
    for (let i = 0; i < a.results.length; i++) {
        let questions = await inquirer.prompt({
            type: "list",
            name: "userAnswer",
            message: a.results[i].question,
            choices: [...a.results[i].incorrect_answers, a.results[i].correct_answer]
        });
        if (questions.userAnswer === a.results[i].correct_answer) {
            score++;
        }
    }
    console.log(` Dear ${ans.userName} Your score is:${score} out of 5`);
};
let a = await fetchData(apidata);
// console.log(a.results); 
userEntry();

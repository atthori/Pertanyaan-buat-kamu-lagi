const quizData = [
    {
        question: "Tanggal Berapa Pernikahan Kita",
        a: "18 Mei 1997",
        b: "23 November 1998",
        c: "5 Agustus 2019",
        d: "17 Oktober 2020",
        correct: "d",
    },
    {
        question: "Makanan Kesukaan Suami?",
        a: "ayam Goreng",
        b: "Sambel Kentang",
        c: "Ikan Salmon",
        d: "Kepiting",
        correct: "b",
    },
    {
        question: "Umur Suami Saat Ini?",
        a: "24",
        b: "25",
        c: "26",
        d: "27",
        correct: "a",
    },
    {
        question: "hadiah Ulang tahun apa yang di inginkan suami?",
        a: "Innova",
        b: "Fortuner",
        c: "Sepeda",
        d: "Jam DW",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
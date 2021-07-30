//NAVIGATION
let active = 'income'

let income = document.getElementById('income')
let spendings = document.querySelector('#spendings')
let moneybox = document.querySelector('#moneybox')
let toDoList = document.querySelector('#to-do-list')

let mainInput = document.querySelector('#main-input')
let mainFrame = document.querySelector('#main-frame')

function changingContent(clicked_id){
    
    document.querySelector('#' + clicked_id).classList.toggle('active')
    document.querySelector('#' + active).classList.toggle('active')
    active = clicked_id

    mainFrame.src = clicked_id + '.html'
    if(clicked_id == 'moneybox'){
        mainFrame.style.height = '100vh'
    }else if(clicked_id == 'income'){
        mainFrame.style.height = '60vh'
    }else {
        mainFrame.style.height = '40vh'
    }
    
}

//Moneybox Targets
let targetsArray = [{name:'Audi A4',nowHave:15750,mustHave:42000,timeLeft:'487 days'}, 
                    {name:'House. Praga',nowHave:43200,mustHave:265000,timeLeft:'134 days'},
                    {name:'Seat Leon',nowHave:54200,mustHave:26000,timeLeft:'185 days'}]

let moneyboxExample = document.querySelector('#moneyboxes-area').innerHTML
document.querySelector('#moneyboxes-area').innerHTML = ' '


function moneyboxSpawning(){
    document.querySelector('#moneyboxes-area').innerHTML += moneyboxExample
    let frameHeight = document.querySelector('#try').style.height.split('rem')[0]    
    frameHeight -= -10
    document.querySelector('#try').style.height = frameHeight + 'rem'      
}
for(let i = 0; i < targetsArray.length; i++){
    moneyboxSpawning()
}                
let moneyboxArray = document.querySelectorAll('.moneybox-item')
//Moneybox Elements
let ruller = document.querySelectorAll('.ruller')
let showAmount = document.querySelectorAll('#show-amount')
let targetName = document.querySelectorAll('#targetName')

let delButton = document.querySelectorAll('.delete')
//Moneybox Calculating

var widthToShow
let maxWidth = 94.8

function moneyboxCalculating(){
    for(let i = 0; i < targetsArray.length; i++){
        widthToShow = targetsArray[i].nowHave < targetsArray[i].mustHave ? (targetsArray[i].nowHave / targetsArray[i].mustHave) * maxWidth : maxWidth
        ruller[i].style.width = widthToShow + '%'
        moneyboxArray[i].id = 'moneyboxItem' + i
        delButton[i].id = 'moneyboxItem' + i
        showAmount[i].textContent = targetsArray[i].nowHave
        targetName[i].textContent = targetsArray[i].name
        if(targetsArray[i].nowHave >= targetsArray[i].mustHave){
            showAmount[i].classList.add('done')
            showAmount[i].style.marginLeft = 'calc((' + widthToShow + '% - 3rem)/2)'
            ruller[i].style.backgroundColor = 'rgba(7, 206, 50, 0.37)'
        }   else{
            showAmount[i].classList.add('in-process')
            showAmount[i].style.marginLeft = widthToShow + '%'
        }      
    }
}


window.onload = moneyboxCalculating()




////Control Buttons

function deleteTarget(clicked_id){
    moneyboxArray.splice(clicked_id.split('moneyboxItem')[0], 1)
}
// const quote = document.getElementById("quote")

// document.addEventListener('DOMContentLoaded' , function(){
//     let text = [
//         'When I feel tired, I just think about how great I will feel once I finally reach my goal.',
//         'You have to think about it before you can do it.',
//         'The only bad workout is the one that didn"t happen' ,
//         "Don't be afraid of failure",
//         "You should never stay at the same level. ",
//         "You did not wake up today to be mediocre."]
    
//     Math.random(Math.floor)
// })

function openMenu(){
    let ul = document.getElementById('ul')
    ul.classList.toggle('add')
}

const preload = document.getElementById('preload')
function beforeLoad(){
    let $none = "none"
    preload.style.display = $none
}

setTimeout(beforeLoad, 2000)
let btn1 = document.querySelector('.open')
let con = document.querySelector('.container')

btn1.addEventListener('click', function(){
    con.classList.add('show')
})

let close = document.querySelector('.close-btn')

close.addEventListener('click', function(){
    con.classList.remove('show');
})
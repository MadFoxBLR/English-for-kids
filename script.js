
let columns__container = document.querySelector('.columns__container');

const bg = [
    "/assets/img/1color.jpg",
    "/assets/img/2.jpg",
    "/assets/img/3.jpg",
    "/assets/img/4.gif",
    "/assets/img/5.png",
    "/assets/img/6.jpg",
    "/assets/img/7.png",
    "/assets/img/8.jpg"
]
const bg_emotion = [
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg",
    "/assets/img/4.jpg"
]

const ketegory = [
    "Action (set A)",
    "Action (set B)",
    "Action (set C)",
    "Adjective",
    "Animal (set A)",
    "Animal (set B)",
    "Clothes",
    "Emotion"
]
     



for (let i = 0; i <= 7; i++) {
    let div = document.createElement('div');    /*создаем новый эл див*/
    div.className = "item";                     /*с классом итем*/
    div.setAttribute('data', ketegory[i]);      /*добавляем атрибут диву = категории*/                
    columns__container.appendChild(div);        /*добавляем на страницу*/

   
    
    let item = document.querySelectorAll('.item'); /*выбираем все дивы с классом итем*/
    let h1 = document.createElement('h1');         /*создаем h1*/ 
    item[i].appendChild(h1);                         /*в каждом итеме создаем h1*/

    var pic = document.createElement("IMG");
    pic.src = bg[i];
    item[i].appendChild(pic);
    // document.getElementsByClassName('item')[i].style = bg[i]; /*add img*/
    
    h1.innerHTML = ketegory[i];         /*в h1 записываем данные из массива ketegory*/
    
        // Создаём кнопку в диве
    let btn = document.createElement('button');
    btn.className = "btn";
    div.appendChild(btn);
    
   
    div.onclick = function () {
        // div.classList.remove('item');
        // div.classList.toggle('back');
        
       
        let attr = this.getAttribute('data');

        if (attr == "Emotion") {
            Emotion(); 
        } if (attr == "Clothes") {
            Clothes();
        }
        
        
      
    }
    
}

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu'); 
let lock = document.querySelector('.lock'); 
    burger.onclick = function () {
        menu.classList.toggle('activ');
        lock.classList.toggle('lock__active');
       
}


function Emotion() {
  
    document.location.href = "/assets/Pages/Emotion.html";
}
  
function Clothes() {
    
  }


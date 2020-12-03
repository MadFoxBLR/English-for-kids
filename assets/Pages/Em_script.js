
let columns__container = document.querySelector('.columns__container');

const bg = [
    "background-image: url(../img/Emotion/1.jpg)",
    "background-image: url(../img/Emotion/2.png)",
    "background-image: url(../img/Emotion/3.jpg)",
    "background-image: url(../img/Emotion/4.gif)",
    "background-image: url(../img/Emotion/5.gif)",
    "background-image: url(../img/Emotion/6.jpg)",
    "background-image: url(../img/Emotion/7.jpg)",
    "background-image: url(../img/Emotion/8.jpg)"
]


const ketegory = [
    "sad",
    "angry",
    "happy",
    "tired",
    "surprised",
    "scared",
    "smile",
    "laugh"
]
const ketegoryRus = [
    "грустный",
    "сердитый",
    "счастливый",
    "уставший",
    "удивленный",
    "напуганный",
    "улыбаться",
    "смеяться"
]
     



for (let i = 0; i <= 7; i++) {
    let div = document.createElement('div');    /*создаем новый эл див*/
    div.className = "item";                     /*с классом итем*/
    div.setAttribute('data', ketegory[i]);      /*добавляем атрибут диву = категории*/                
    columns__container.appendChild(div);        /*добавляем на страницу*/

   
    
    let item = document.querySelectorAll('.item'); /*выбираем все дивы с классом итем*/
    let h1 = document.createElement('h1');         /*создаем h1*/ 
    item[i].appendChild(h1);                         /*в каждом итеме создаем h1*/

    // var pic = document.createElement("IMG");
    // pic.src = bg[i];
    // item[i].appendChild(pic);
     document.getElementsByClassName('item')[i].style = bg[i]; /*add img*/
    
    h1.innerHTML = ketegory[i];         /*в h1 записываем данные из массива ketegory*/
    
        // Создаём кнопку в диве
    let btn = document.createElement('button');
    btn.className = "btn";
    btn.innerHTML = ketegoryRus[i];;
    div.appendChild(btn);
    
   
    div.onclick = function () {
        // div.classList.remove('item');
        // div.classList.toggle('back');
        
       
        let attr = this.getAttribute('data');

        if (attr == "sad") {
            sad()
        } if (attr == "angry") {
            angry()
        }
        if (attr == "happy") {
            happy()
        }
        if (attr == "tired") {
            tired()
        }
        if (attr == "surprised") {
            surprised()
        }
        if (attr == "scared") {
            scared()
        }
        if (attr == "smile") {
            smile()
        }
        if (attr == "laugh") {
            laugh()
        }
        
      
    }
    
}


function sad() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/sad.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    
}
  
function angry() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/angry.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function happy() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/happy.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function tired() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/tired.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
  function surprised() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/surprised.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function scared() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/scared.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function smile() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/smile.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function laugh() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ' ../sound/laugh.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }

  let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu'); 
let lock = document.querySelector('.lock'); 
    burger.onclick = function () {
        menu.classList.toggle('activ');
        lock.classList.toggle('lock__active');
       
}

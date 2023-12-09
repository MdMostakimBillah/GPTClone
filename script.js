// topic adding variable declaration 
let addBtn_topic = document.getElementById('addBtn_topic');
let historyForm = document.querySelector('.chat-history form');
//sidebar 
let barBtn = document.querySelector('.bar');
let aside = document.querySelector('aside');
let section = document.querySelector('section');
//topic adding function 
let shwoTopicWritingFiled = function(){
    historyForm.classList.toggle('hiddenActive');
}
let sideBarShowHidden = function(){
    aside.classList.toggle('showHidden');
    this.classList.toggle('sidePlace');
    section.classList.toggle('overflow-x');
}
addBtn_topic.addEventListener('click', shwoTopicWritingFiled);
barBtn.addEventListener('click', sideBarShowHidden);
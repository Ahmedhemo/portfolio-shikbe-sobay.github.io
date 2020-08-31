// ==================
    //MENU HOVER
//===================

var menuHover1 = document.querySelectorAll('.navber ul li a')[0];
var menuHover2 = document.querySelectorAll('.navber ul li a')[1];
var menuHover3 = document.querySelectorAll('.navber ul li a')[2];
var menuHover4 = document.querySelectorAll('.navber ul li a')[3];

menuHover2.addEventListener('mouseenter', function(){
    menuHover1.classList.remove('active');
})
menuHover2.addEventListener('mouseout', function(){
    menuHover1.classList.add('active');
})
menuHover3.addEventListener('mouseenter', function(){
    menuHover1.classList.remove('active');
})
menuHover3.addEventListener('mouseout', function(){
    menuHover1.classList.add('active');
})
menuHover4.addEventListener('mouseenter', function(){
    menuHover1.classList.remove('active');
})
menuHover4.addEventListener('mouseout', function(){
    menuHover1.classList.remove('active');
})


// ==================
    //TEAM HOVER
//===================

var imgHover1 = document.querySelectorAll('.team .team-img')[0];
var imgHover2 = document.querySelectorAll('.team .team-img')[1];
var imgHover3 = document.querySelectorAll('.team .team-img')[2];
var imgHover4 = document.querySelectorAll('.team .team-img')[3];
var imgHover5 = document.querySelectorAll('.team .team-img')[4];

imgHover1.addEventListener('mouseenter', function(){
    imgHover3.classList.remove('active');
    this.classList.add('active');
})
imgHover1.addEventListener('mouseout', function(){
    this.classList.remove('active');
    imgHover3.classList.add('active');
})
imgHover2.addEventListener('mouseenter', function(){
    imgHover3.classList.remove('active');
    this.classList.add('active');
})
imgHover2.addEventListener('mouseout', function(){
    this.classList.remove('active');
    imgHover3.classList.add('active');
})
imgHover4.addEventListener('mouseenter', function(){
    imgHover3.classList.remove('active');
    this.classList.add('active');
})
imgHover4.addEventListener('mouseout', function(){
    this.classList.remove('active');
    imgHover3.classList.add('active');
})
imgHover5.addEventListener('mouseenter', function(){
    imgHover3.classList.remove('active');
    this.classList.add('active');
})
imgHover5.addEventListener('mouseout', function(){
    this.classList.remove('active');
    imgHover3.classList.add('active');
})

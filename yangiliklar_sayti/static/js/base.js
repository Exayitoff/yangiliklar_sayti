let inputlar = document.querySelectorAll('input');
let lilar = document.querySelectorAll('li');
let helptxt = document.querySelectorAll('.helptext');
// let id_usernames = document.querySelector("#id_username").classList.add('form-control');
let id_password = document.querySelector("input#id_password")
let mnu = document.querySelector('.navbar-toggler')

let menuBtn = document.querySelector('.navbar-toggler');
menuBtn.addEventListener('click', (e)=>{
  document.querySelector('.collapse.navbar-collapse.justify-content-end').style='display: block'
})















inputlar.forEach((e)=>{
  e.classList.add('form-control');
  // id_password.classList.add('form-control');
})
helptxt.forEach((e)=>{
  e.classList.add('form-text')
})
lilar.forEach((e)=>{
  e.classList.add('form-text');
})


// lilar[0].innerHTML = "Sizning parolingiz boshqa shaxsiy ma'lumotlaringizga juda o'xshash bo'lishi mumkin emas.";
// lilar[1].innerHTML = "Parolingiz kamida 8 ta belgidan iborat boʻlishi kerak.";
// lilar[2].innerHTML = "Sizning parolingiz tez-tez ishlatiladigan parol bo'lishi mumkin emas.";
// lilar[3].innerHTML = "Sizning parolingiz to'liq raqamli bo'lishi mumkin emas.";
// helptxt[0].innerHTML = "Majburiy. 150 yoki undan kam belgi. Faqat harflar, raqamlar va @/./+/-/_.";
// helptxt[2].innerHTML = "Tekshirish uchun avvalgidek parolni kiriting.";

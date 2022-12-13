import { useEffect } from "react";
export default function Nav() {
 useEffect(()=> {
  const link = document.querySelectorAll('a');
  // ---------------------------Arrow-anchor
const anchor = document.querySelector('.anchor-wrapper');
let scrollPos = 0;
// Вариант когда кнопка появляется при прокрутке вверх И виден от самого низа и до верха страницы  минус window.pageYOffset. Также добавил чтобы якорь появлялся в самом низу сам
window.addEventListener('scroll', function () {
  let i = window.pageYOffset;
  let e = window.innerHeight;
  let documentScrollHeight = document.documentElement.scrollHeight;   
  
  if (((document.body.getBoundingClientRect()).top >   scrollPos && i >= e - i ) ||  i+e === documentScrollHeight ) {
    anchor.classList.add('anchor-active');
  } else {
    anchor.classList.remove('anchor-active');
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});
// Делаем плавный скролл  
  function smoothScroll (targetSelector ) {
 const whereTo = document.querySelector(targetSelector); 
    let startPosition = window.pageYOffset;
  let targetPosition = whereTo.offsetTop - 100  ; //   куда переместиться и отступ сверху
  let distance = targetPosition - startPosition;
  let duration = 1000; // Время анимации
  let start = null;  
  window.requestAnimationFrame(step);
  function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  window.scrollTo(0, easing(progress, startPosition, distance, duration));
  if (progress < duration) { 
  window.requestAnimationFrame(step);
  }
  }
  }
  // Можно добавить замедление в начале или конце http://gizma.com/easing/ 
  //
  function easing (t, b, c, d) {
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  }
  //Обработчик 
  link.forEach(item => { 
    item.addEventListener('click', function(e)  {
       let targetPosition = item.getAttribute(`${'href'}`);
       document.querySelector('title').textContent = `АльфаМед – ${item.textContent}`;
  if(item.hasAttribute('data-link')) {
    e.preventDefault(); // сюда только
   smoothScroll(targetPosition );
  }
 //Меняем Title
  if(item.hasAttribute('data-title')) {
    document.querySelector('title').textContent = `АльфаМед – ${item.textContent}`;
  }
  });
   });
 })//
}

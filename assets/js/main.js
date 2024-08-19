// Get the button
let mybutton = document.getElementById("Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// Define a data alvo para o contador regressivo
var countDownDate = new Date("Jan 31, 2024 21:00:00").getTime();

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance > 0) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  } else {
    document.getElementById('countdown').innerHTML = '';
    clearInterval(interval);
    document.getElementById('Btn-phone').style.display = 'block';
  }
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Atualiza o contador a cada segundo
var interval = setInterval(updateCountdown, 1000);

// Chama a função para garantir que o contador é exibido corretamente ao carregar a página
updateCountdown();


$("a[href^='#']").click(function(e) {
  e.preventDefault();
  
  var targetSection = $($(this).attr("href"));
  var position = targetSection.offset().top - ($(window).height() - targetSection.outerHeight()) / 2;

  $("body, html").animate({
    scrollTop: position
  }, 800 /* velocidade da animação em milissegundos */ );
});

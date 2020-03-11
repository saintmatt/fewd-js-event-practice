
var button1 = document.querySelector('button');

var button2 = document.querySelector('.button-success');

var button3 = document.querySelector('.button-warning');

document.addEventListener('click', function(Event) {
  if (event.target === button1) {
    button1.classList.toggle('button-danger');

  }

  if (event.target === button2) {
    button2.innerText = 'You Clicked Me!';

  }

  if (event.target === button3) {
    button2.innerText = 'button two'

  }

});


const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {

  console.log(this.classList.value);
  event.stopPropagation();
  // bubbling clicks ripple all the way to parents
}

button.addEventListener('click', () => {
  console.log('click');
  // usually you would use this to prevent the default behavior of the event
  // for example, at a store checkout
}, { once: true });

divs.forEach(div => div.addEventListener('click', logText, {
  // capture: false,
  // in this case capture means that the event will be captured by the parent
  // and not by the child

  // ***** once: true,
  // this will only fire the event once (unbind itself)

  // ***** passive: true,
  // this will not prevent the default behaviour of the event
}));

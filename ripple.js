const elements = document.querySelectorAll('[data-ripple]');

const addRippleEffect = (event) => {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = `${event.clientX - event.currentTarget.offsetLeft}px`;
  ripple.style.top = `${event.clientY - event.currentTarget.offsetTop}px`;    
  event.currentTarget.append(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
};

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (event) => {
    addRippleEffect(event);
  });
}

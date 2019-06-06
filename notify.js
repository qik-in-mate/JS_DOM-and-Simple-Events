const notifierContainer = document.createElement('div');
notifierContainer.classList.add('notifier-container');
document.body.append(notifierContainer);

const addNotification = () => {
  notifierContainer.insertAdjacentHTML('beforeend', `
    <div class="notifier">
      <button class="notifier-close" type="button">x</button>
      <h2 class="notifier-title">Notice! <span class="notifier-input"> ${inputNotifierData.value} </span></h2>
      <div class="notifier-body">You press this button at ${ (new Date()).toLocaleString()}</div>
      <div class="dedicated-notice">Notice will be deleted in 10 sec</div>
    </div>`
  );
  setTimeout(() => {
    notifierContainer.lastElementChild.classList.add('shown');
  }, 0);

  setInterval(function() {
    if (notifierContainer.childElementCount > 0) {
      notifierContainer.firstChild.remove();
    }
  }, 10000);
  notifierContainer.lastChild.querySelector('.notifier-close').addEventListener('click', (event) => {
    const parentNotifier = event.currentTarget.closest('.notifier');
    parentNotifier.classList.remove('shown');
  });
};

const btn = document.querySelector('[data-notifier]');
const inputNotifierData = document.querySelector('.data__notifier');
btn.addEventListener('click', () => {
  addNotification();
  inputNotifierData.value='';
});

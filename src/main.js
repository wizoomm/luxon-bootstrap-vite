import './main.scss';

import Modal from 'bootstrap/js/dist/modal';
import { DateTime } from 'luxon';

const btn = document.getElementById('show');
const modalEl = document.getElementById('timeModal');
const timeText = document.getElementById('timeText');

const modal = new Modal(modalEl);
let timer = null;

function tick() {
  timeText.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
}

btn.addEventListener('click', () => {
  tick();
  clearInterval(timer);
  timer = setInterval(tick, 1000);
  modal.show();
});

modalEl.addEventListener('hidden.bs.modal', () => {
  clearInterval(timer);
});


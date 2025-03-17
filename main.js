import { segmentedProgressBar } from './SegmentedProgressBar.js';

const setupElements = (a, b, c) => {
    const progress_container = document.createElement('div');
    progress_container.classList.add('progress-container');
    const container = document.querySelector(a);
    container.appendChild(progress_container);
    for (let i = 0; i < c; i++) {
        progress_container.innerHTML += `
      <div class="progress-track">
        <div class="progress-fill" id="${b}"></div>
      </div>
    `;
    }
};
for (let index = 0; index < 5; index++) {
    setupElements('.container', `fill-${index}`, index == 0 ? 1 : index * 2);
    segmentedProgressBar(`#fill-${index}`, 100, Math.floor(Math.random() * 100) + 1);
}
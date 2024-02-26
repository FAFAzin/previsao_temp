import closeModalError from '../modules/closeModalError.js';

export default function cardError(arr) {
  const backgroundModalError = document.createElement('div');
  backgroundModalError.id = 'background-modal-error';

  const dialog = document.createElement('dialog');

  const heading = document.createElement('h2');
  heading.textContent = `${arr.title}`;

  const paragraph = document.createElement('p');
  paragraph.textContent = `${arr.description}`;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'x';

  closeButton.addEventListener('click', closeModalError);

  dialog.appendChild(heading);
  dialog.appendChild(paragraph);
  dialog.appendChild(closeButton);

  backgroundModalError.appendChild(dialog);

  document.body.appendChild(backgroundModalError);
}

import getState from './getState.js';

export default function optionStates() {
  const divState = document.createElement('div');
  const selectState = document.createElement('select');
  const optionDisabled = document.createElement('option');

  optionDisabled.disabled = true;
  optionDisabled.selected = true;
  optionDisabled.innerText = 'Escolha um estado';

  selectState.appendChild(optionDisabled);

  getState().then((data) => {
    data.forEach((option) => {
      const options = document.createElement('option');
      options.innerText = option.nome;
      options.id = option.sigla;

      selectState.appendChild(options);
    });
    selectState.addEventListener('change', function (e) {
      const sigla = e.target.selectedOptions[0].id;

      const event = new CustomEvent('valueState', {
        detail: {
          sigla: sigla,
        },
      });

      document.dispatchEvent(event);
    });
  });

  divState.appendChild(selectState);

  return divState;
}

import getCity from './getCity.js';

export default function optionsCities(arg) {
  const divCity = document.createElement('div');
  const selectCity = document.createElement('select');
  const optionDisabled = document.createElement('option');

  document.querySelector('body').style.cursor = 'wait';

  selectCity.id = 'select-cities';
  optionDisabled.disabled = true;
  optionDisabled.selected = true;
  optionDisabled.innerText = 'Escolha uma cidade';

  selectCity.appendChild(optionDisabled);

  getCity(arg).then((data) => {
    data.forEach((option) => {
      const options = document.createElement('option');
      options.innerText = option.nome;
      options.dataset.county = option.municipio.id;

      selectCity.appendChild(options);
    });
  });
  selectCity.addEventListener('change', function (e) {
    const opcaoSelecionada = e.target.selectedOptions[0];
    const datasetOpcao = opcaoSelecionada.dataset.county;
    const event = new CustomEvent('valueCounty', {
      detail: {
        county: datasetOpcao,
      },
    });

    document.dispatchEvent(event);
  });

  divCity.appendChild(selectCity);

  return divCity;
}

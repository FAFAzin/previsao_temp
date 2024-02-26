import optionsCities from './modules/optionsCities.js';
import optionStates from './modules/optionsStates.js';
import createDisplayInfoWeather from './modules/createDisplayInfoWeather.js';

const root = document.getElementById('root');
const section = document.createElement('section');
const h1 = document.createElement('h1');

h1.id = 'title-select';
h1.innerText = 'Selecione o local desejado';

section.id = 'container-select';

section.appendChild(h1);
section.appendChild(optionStates());

document.addEventListener('valueState', function (e) {
  const lastSelect = document.getElementById('select-cities');
  if (lastSelect !== null) {
    lastSelect.parentNode.removeChild(lastSelect);
  }
  section.appendChild(optionsCities(e.detail.sigla));
});

document.addEventListener('valueCounty', function (e) {
  console.log(createDisplayInfoWeather(e.detail.county));
  root.appendChild(createDisplayInfoWeather(e.detail.county));
});

root.appendChild(section);

import getWeatherOfCounty from './getWeatherOfCounty.js';
import cardInfoWeather from '../components/cardInfoWeather.js';

export default function createDisplayInfoWeather(id) {
  const oldMain = document.querySelector('main');
  if (oldMain) {
    oldMain.parentNode.removeChild(oldMain);
  }

  document.body.classList.add('wait-cursor');
  // Cria um novo main
  const main = document.createElement('main');
  getWeatherOfCounty(id)
    .then((data) => {
      if (!data) {
        console.log(data);
      }
      data.pop();
      data.forEach((item) => {
        if (item.manha && item.manha !== false) {
          main.appendChild(
            cardInfoWeather({
              h1: `${item.day} ${item.dayOfWeek}`,
              h2: item.manha ? 'Manhã' : '',
              img: item.manha.icone,
              resume: item.manha.resume,
              max: item.manha.max,
              min: item.manha.min,
            })
          );

          main.appendChild(
            cardInfoWeather({
              h1: `${item.day} ${item.dayOfWeek}`,
              h2: item.tarde ? 'Tarde' : '',
              img: item.tarde.icone,
              resume: item.tarde.resume,
              max: item.tarde.max,
              min: item.tarde.min,
            })
          );

          main.appendChild(
            cardInfoWeather({
              h1: `${item.day} ${item.dayOfWeek}`,
              h2: item.noite ? 'Noite' : '',
              img: item.noite.icone,
              resume: item.noite.resume,
              max: item.noite.max,
              min: item.noite.min,
            })
          );

          return;
        }

        main.appendChild(
          cardInfoWeather({
            h1: `${item.day} ${item.dayOfWeek}`,
            h2: '',
            img: item.icone,
            resume: item.resume,
            max: item.max,
            min: item.min,
          })
        );
      });
    })
    .finally(() => {
      // Remove a classe de cursor 'wait' após a requisição ser concluída
      document.body.classList.remove('wait-cursor');

      // Adiciona a classe de cursor 'default'
      document.body.classList.add('default-cursor');
    });

  if (document.querySelector('main')) {
    const main = document.querySelector('main');
    main.addEventListener('load', function () {
      document.querySelector('body').style.cursor = 'default';
    });
  }

  return main;
}

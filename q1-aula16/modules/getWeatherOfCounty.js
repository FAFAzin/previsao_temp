import treatdatacounty from '../modules/treatdatacounty.js';

export default function getWeatherOfCounty(arg) {
  const url = `https://apiprevmet3.inmet.gov.br/previsao/${arg}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status, 'Houve um erro ao buscar os dados!'); //mostrar modal de erro
        }

        return res.json();
      })
      .then((data) => {
        resolve(treatdatacounty(data));
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default function cardInfoWeather(obj) {
  // Criando a seção
  const section = document.createElement('section');
  section.classList.add('container_info_weather');

  // Criando o primeiro título h1
  const h1_1 = document.createElement('h1');
  h1_1.textContent = obj.h1;
  section.appendChild(h1_1);

  // Criando o segundo título h1
  const h1_2 = document.createElement('h2');
  h1_2.textContent = obj.h2;

  // Criando o container para a imagem e as informações
  const divContainer = document.createElement('div');
  divContainer.classList.add('c-all');
  divContainer.appendChild(h1_1);
  divContainer.appendChild(h1_2);
  section.appendChild(divContainer);

  // Criando o container para a imagem
  const divImage = document.createElement('div');
  divImage.classList.add('c-image');
  divContainer.appendChild(divImage);

  // Criando a imagem
  const img = document.createElement('img');
  img.src = obj.img;
  divImage.appendChild(img);

  // Criando o container para as informações
  const divInfo = document.createElement('div');
  divInfo.classList.add('c-info');
  divContainer.appendChild(divInfo);

  // Criando o parágrafo para o resumo
  const pResume = document.createElement('p');
  pResume.textContent = obj.resume;
  divInfo.appendChild(pResume);

  // Criando o container para as informações de máxima e mínima
  const divMaxMin = document.createElement('div');
  divMaxMin.classList.add('c-max_min');
  divInfo.appendChild(divMaxMin);

  // Criando o parágrafo para a temperatura máxima
  const pMax = document.createElement('p');
  pMax.textContent = `Temp. máxima: ${obj.max}`;
  divMaxMin.appendChild(pMax);

  // Criando o parágrafo para a temperatura mínima
  const pMin = document.createElement('p');
  pMin.textContent = `Temp. mínima: ${obj.min}`;
  divMaxMin.appendChild(pMin);

  return section;
}

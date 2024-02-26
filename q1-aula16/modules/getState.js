export default function getState() {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  const obj = {
    title: '',
    description: '',
  };
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          switch (res.status) {
            case 400:
              obj = {
                title: 'Erro ao buscar dados',
                description:
                  'Verifique se os dados selecionados estão corretos e tente novamente.',
              };
              break;
            case 440:
              obj = {
                title: 'Dados não encontrado',
                description: 'Os dados que você está procurando não existem.',
              };
              break;
            case 500:
              obj = {
                title: 'Erro interno',
                description:
                  'Houve um erro interno ao buscar os dados, tente novamente mais tarde.',
              };
              break;
            default:
              obj = {
                title: 'Erro inesperado',
                description:
                  'Houve um erro inesperado. Nossa equipe de suporte já está averiguando.',
              };
              break;
          }
          throw obj;
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

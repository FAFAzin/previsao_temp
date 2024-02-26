export default function treatdatacounty(arg) {
  let mainKey;
  const keys = [];
  const formatData = [];

  for (const key in arg) {
    if (arg.hasOwnProperty(key)) {
      mainKey = arg[key];
      for (const innerKey in arg[key]) {
        if (arg[key].hasOwnProperty(innerKey)) {
          keys.push(innerKey);
        }
      }
    }
  }

  keys.forEach((day) => {
    if (
      mainKey[day].manha !== undefined &&
      mainKey[day].tarde !== undefined &&
      mainKey[day].noite !== undefined
    ) {
      formatData.push({
        day: day,
        dayOfWeek: mainKey[day].manha['dia_semana'],
        manha: {
          icone: mainKey[day].manha['icone'],
          resume: mainKey[day].manha['resumo'],
          max: mainKey[day].manha['temp_max'],
          min: mainKey[day].manha['temp_min'],
        },
        tarde: {
          icone: mainKey[day].tarde['icone'],
          resume: mainKey[day].tarde['resumo'],
          max: mainKey[day].tarde['temp_max'],
          min: mainKey[day].tarde['temp_min'],
        },
        noite: {
          icone: mainKey[day].noite['icone'],
          resume: mainKey[day].noite['resumo'],
          max: mainKey[day].noite['temp_max'],
          min: mainKey[day].noite['temp_min'],
        },
      });
      return;
    }
    formatData.push({
      day: day,
      dayOfWeek: mainKey[day]['dia_semana'],
      icone: mainKey[day]['icone'],
      resume: mainKey[day]['resumo'],
      max: mainKey[day]['temp_max'],
      min: mainKey[day]['temp_min'],
    });
  });

  return formatData;
}

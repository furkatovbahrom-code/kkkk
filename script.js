const phone = "+77752709238";
const wa = "https://wa.me/77752709238";
const ig = "https://www.instagram.com/beco_team?igsh=NjVxZzNqbmNjazll";

const text = {
  uz:{
    title:"Yoqilg‘ini tejang, yo‘lda ishonch bilan yuring",
    desc:"B-ECO Fuel Tabs — mashinangiz uchun aqlli va ekologik yechim.",
    f1t:"⛽️ Tejamkorlik",
    f1d:"Yoqilg‘i sarfini kamaytiradi",
    f2t:"🚗 Himoya",
    f2d:"Dvigatelni tozalaydi va asraydi",
    f3t:"🌱 Ekologiya",
    f3d:"Zararli chiqindilarni kamaytiradi",
    bizTitle:"Biznes imkoniyati",
    bizDesc:"B-ECO bilan daromad va liderlikka chiqing"
  },
  kz:{
    title:"Отынды үнемдеңіз, жолда сенімді жүріңіз",
    desc:"B-ECO Fuel Tabs — көлігіңізге арналған ақылды шешім.",
    f1t:"⛽️ Үнем",
    f1d:"Отын шығынын азайтады",
    f2t:"🚗 Қорғау",
    f2d:"Қозғалтқышты тазартады",
    f3t:"🌱 Экология",
    f3d:"Зиянды қалдықтарды азайтады",
    bizTitle:"Бизнес мүмкіндігі",
    bizDesc:"B-ECO-мен табыс пен өсу"
  },
  ru:{
    title:"Экономьте топливо и уверенно двигайтесь",
    desc:"B-ECO Fuel Tabs — умное решение для вашего авто.",
    f1t:"⛽️ Экономия",
    f1d:"Снижает расход топлива",
    f2t:"🚗 Защита",
    f2d:"Очищает двигатель",
    f3t:"🌱 Экология",
    f3d:"Меньше вредных выбросов",
    bizTitle:"Бизнес возможность",
    bizDesc:"Доход и рост вместе с B-ECO"
  }
};

function setLang(l){
  Object.keys(text[l]).forEach(id=>{
    document.getElementById(id).innerText = text[l][id];
  });

  callBtn.href = "tel:" + phone;
  waBtn.href = wa;
  igBtn.href = ig;
}

setLang("uz");

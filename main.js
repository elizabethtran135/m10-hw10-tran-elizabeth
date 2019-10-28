// It is always helpful to use comments in your code!

//212 boiling temp inside
document.getElementByID("boiling-temp") {
  let printBoil = () => document.createTextNode('212')
};

//32 freezing temp
let printFreeze = document.getElementByID("freezing-temp") {
  printFreeze = () => document.createTextNode('32')
};

//any number water temp
document.getElementByID("water-temp") {
  let printWater = () => document.createTextNode('52')
};

//show temperature alert change
setTimeout() => {

  tempAlert.classList.remove('hide');
  tempAlert.classList.add('show');
  if (temperature > 212 ) {
    document.getElementByID('boiling')
    document.createTextNode('The water is hot. I think it is boiling')
  } else if (temperature < 32) {
    document.getElementByID('frozen')
    document.createTextNode('The water is cold. I think it is frozen')
  } else if (temperature >=32 and <=212 ) {
    document.getElementByID('good-temp')
    document.createTextNode('The water is fine. Jump on in.')
  }
}, 3000);

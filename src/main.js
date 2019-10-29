// It is always helpful to use comments in your code!
const displayTextGivenId = (textValue, elementId) => {
  const element = document.getElementById(elementId);
  element.textContent = textValue;
}
//212 boiling temp inside
displayTextGivenId ('212',"boiling-temp");
//document.getElementByID("boiling-temp") {
  //let printBoil = () => document.createTextNode('212')
//};


//32 freezing temp
//let printFreeze = document.getElementByID("freezing-temp") {
  //printFreeze = () => document.createTextNode('32')
//};
displayTextGivenId ('32',"freezing-temp");

//any number water temp
//document.getElementByID("water-temp") {
  //let printWater = () => document.createTextNode('52')
//};
displayTextGivenId ('-2',"water-temp");

//show temperature alert change

setTimeout(() => {
    const currentTemp = document.getElementById('water-temp').textContent;
    if(currentTemp >= 212) {
        document.getElementById('boiling').classList.replace('hide', 'show');
    } else if(currentTemp <= 32) {
        document.getElementById('frozen').classList.replace('hide', 'show');
    } else {
        document.getElementById('good-temp').classList.replace('hide', 'show');
    }
}, 3000);

//setTimeout() => {

  //tempAlert.classList.remove('hide');
//  tempAlert.classList.add('show');
//  if (temperature > 212 ) {
//    document.getElementByID('boiling')
//    document.createTextNode('The water is hot. I think it is boiling')
//  } else if (temperature < 32) {
//    document.getElementByID('frozen')
//    document.createTextNode('The water is cold. I think it is frozen')
//  } else if (temperature >=32 and <=212 ) {
//    document.getElementByID('good-temp')
//    document.createTextNode('The water is fine. Jump on in.')
//  }
//}, 3000);

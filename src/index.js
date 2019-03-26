import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello, Jack';

  return element;
}

document.body.appendChild(component());

const a = "Hello, ",
      b = "Jack!";

console.log( a + b );


  

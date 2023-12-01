
const capturarInput = () => {
  let input = document.querySelector('input');
  let inputValue = input.value.trim();

  if(inputValue !== '') {
    let addItens = document.getElementById('addItens');
    let novoLi = document.createElement('li');
    novoLi.innerText = inputValue;
    addItens.appendChild(novoLi);
    input.value = "";
  }
}

const marcarItem = (event) => {
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('remove');
  }
} 
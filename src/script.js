
const capturarInput = () => {
  let input = document.querySelector('input').value;
  let addItens = document.getElementById('addItens');
  let novoLi = document.createElement('li');
  novoLi.innerText = input;
  addItens.appendChild(novoLi);
}

const marcarItem = (event) => {
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('remove');
  }
}
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleClick();
  }
};

document.addEventListener('keypress', handleKeyPress);

const handleClick = () => {
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

const toggleItemMark = (event) => {
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('remove');
  }
}

const removeElementsByClass = () => {
  let itens = document.querySelectorAll('.remove');
  itens.forEach(item => {
    item.remove();    
  });
}
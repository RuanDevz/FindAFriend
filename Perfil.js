const selecionar = document.querySelectorAll('div#block');
let elementoSelecionado = null;

selecionar.forEach(function(elemento) {
  elemento.addEventListener('click', selecionaritem);
});

function selecionaritem() {
  if (elementoSelecionado) {
    elementoSelecionado.style.background = '';
    const imagemAnterior = elementoSelecionado.querySelector('.imagem-selecionada');
    if (imagemAnterior) {
      imagemAnterior.remove();
    }
    const paragrafoAnterior = elementoSelecionado.querySelector('#nome');
    paragrafoAnterior.style.color = '';
  }

  this.style.background = '#0D3B66';
  elementoSelecionado = this;

  const imagemSelecionada = this.querySelector('.imagem-selecionada');
  if (!imagemSelecionada) {
    const imagem = document.createElement('img');
    imagem.src = 'Logo dos animais/Minicachorrinho.png';
    imagem.style.transform = 'translate(866%, -560%)';
    imagem.classList.add('imagem-selecionada');
    this.appendChild(imagem);
    const paragrafoAtual = this.querySelector('#nome');
    paragrafoAtual.style.color = 'white';
  }
}
 
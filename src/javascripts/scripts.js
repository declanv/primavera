// Add your scripts here
import Rellax from "rellax";
const stanzas = document.querySelectorAll('#poem h1');

for (let i = 1; i < stanzas.length; i += 1) {
  setTimeout(() => {
    stanzas[i - 1].classList.remove('show');
    stanzas[i].classList.add('show');
  }, 3000 * i);
}

const rellax = new Rellax('.rellax');

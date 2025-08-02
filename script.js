const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  padding(value) {
    this.element.style.padding = value + 'px';
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + '%';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  const styles = JSON.parse(localStorage.getItem('buttonStyles')) || {};
  styles[name] = value;
  localStorage.setItem('buttonStyles', JSON.stringify(styles));
}

function setValues() {
  const savedStylesJSON = localStorage.getItem('buttonStyles');
  if (savedStylesJSON) {
    const savedStyles = JSON.parse(savedStylesJSON);
    Object.keys(savedStyles).forEach((property) => {
      handleStyle[property](savedStyles[property]);
      controles[property].value = savedStyles[property];
    });
  }
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML = `<span> ${btn.style.cssText
    .split(';')
    .join(';</span><span>')}`;
}

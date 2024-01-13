const alphaOnlyInput = document.getElementById('alpha-only-input'),
  alphaOnlyPattern = new RegExp('^[a-zA-Z ]+$')

let previousValue = ''

alphaOnlyInput.addEventListener('input', (e) => {
  let currentValue = alphaOnlyInput.value

  if (e.inputType.includes('delete') || alphaOnlyPattern.test(currentValue)) {
    previousValue = currentValue
  }

  alphaOnlyInput.value = previousValue
})
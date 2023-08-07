function showDialog() {
  const dialog = document.getElementById('newsletterDialog')
  const emailInput = document.getElementById('email')
  const emailError = document.getElementById('emailError')
  const closeButton = document.getElementById('closeButton')
  const submitButton = document.getElementById('submitButton')
  let timeoutId

  dialog.style.display = 'block'

  const closeDialog = () => {
    dialog.style.display = 'none'
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(closeDialog, 5000)

  emailInput.addEventListener('input', () => {
    clearTimeout(timeoutId)
    emailError.style.display = 'none'
  })

  submitButton.addEventListener('click', () => {
    if (!emailInput.checkValidity()) {
      emailError.style.display = 'block'
      return
    }

    closeDialog()
  })

  closeButton.addEventListener('click', () => {
    closeDialog()
  })
}

window.onload = showDialog

document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('length').addEventListener('input', updateLengthValue);
document.getElementById('copy').addEventListener('click', copyPassword);

function generatePassword() {
  const length = document.getElementById('length').value;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  const passwordInput = document.getElementById('password');
  passwordInput.value = password;
  passwordInput.style.width = `${length * 11}px`; 
}

function updateLengthValue() {
  const lengthValue = document.getElementById('length').value;
  document.getElementById('length-value').textContent = lengthValue;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}


// execCommand

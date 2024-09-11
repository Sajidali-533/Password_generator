const generate = document.querySelector('#generate');
const btn_gen = document.querySelector('#btn-gen');
const btn_copy = document.querySelector('#btn_copy');
const lengthField = document.querySelector('#length');

const i_upper = document.querySelector('#i_upper');
const i_lower = document.querySelector('#i_lower');
const i_number = document.querySelector('#i_number');
const i_symbol = document.querySelector('#i_symbol');


const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol ='!@#$%&*?';

btn_gen.addEventListener('click', () =>{
    const length = parseInt(lengthField.value);
    const includeUpper = i_upper.checked;
    const includeLower = i_lower.checked;
    const includeNumber = i_number.checked;
    const includeSymbol = i_symbol.checked;

    const password = randomPassword(length, includeUpper, includeLower, includeNumber, includeSymbol);
    generate.textContent = password;
    generate.style.color = "white";
    
})
btn_copy.addEventListener('click', () => {
    // Copy the password to clipboard
    const password = generate.textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
});
const randomPassword = (length, includeUpper, includeLower, includeNumber, includeSymbol) => {
    let charSet = '';
    let password = '';

    if(includeUpper) charSet += upper;
    if(includeLower) charSet += lower;
    if(includeNumber) charSet += number;
    if(includeSymbol) charSet += symbol;
    

    if(charSet === ''){
        return 'Please select at least one character type';
    }
      for(i=0; i<length; i++){
       const index = Math.floor(Math.random() * charSet.length);
       password += charSet[index];
      }
      return password;
}
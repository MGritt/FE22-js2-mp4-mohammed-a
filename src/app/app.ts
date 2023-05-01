const result = document.getElementById('result') as HTMLElement;
const input = Array.from(document.querySelectorAll('li')) as HTMLElement[];
console.log(input);
for(let i = 0; i < 16; i++){
  input[i].addEventListener('click', (e: Event) => {
    const button = e.target as HTMLElement;
    const value = button.value;
    if(value == 11){
      result.innerText += '+';
    } else if(value == 22){
      result.innerText += '-';
    } else if(value == 33){
      result.innerText += '*';
    } else if(value == 44){
      result.innerText += '/';
    } else if(value == 99){
      result.innerText = result.innerText.slice(0, -1);
    } else if (value == 100){
      result.innerText = eval(result.innerText);
    } else {
      result.innerText += value;
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    
  
    let currentInput = ''; 
    let result = ''; 

    function Agg_Display() {
        display.textContent = currentInput || result; 
        
    }
       
    
    function ButtonClick(value) {
        if (value === '=') {
            result = eval(currentInput).toString();
            currentInput = '';
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === 'C') {
            currentInput = '';
            result = ''; 
        } else if (value === '√') {
            CalcolaRadice();
        } else {
            currentInput += value;
        }
  
        Agg_Display();
    }
  
    document.querySelectorAll('.button, .call').forEach(button => {
        button.addEventListener('click', function () {
            ButtonClick(this.textContent);
        });
    });
  });
  
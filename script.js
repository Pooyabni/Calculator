const display = document.getElementById('display');
const buttons = document.querySelectorAll('#buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.textContent;

        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    });
});

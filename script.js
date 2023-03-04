var randomNumber = Math.floor(Math.random() * 50) + 1;  

// Первой переменной - randomNumber - присваивается случайное число от 1 до 100, вычисленное с использованием математического алгоритма.

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGeuss = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses:';
    }
    guesses.textContent += userGeuss + ' ';

    if (userGeuss === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }   else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGeuss < randomNumber) {
            lowOrHi.textContent = 'Last guess was too  low!';
        } else if (userGeuss > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelector('.resultParas p');
    for (var i = 0; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = true;
    guessSubmit.disebled = true;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 50) + 1;
}

// Первая строка объявляет переменную с именем userGuess и устанавливает её значение на то, что сейчас введено в текстовое поле. Мы также пропускаем это значение через встроенный метод Number(), чтобы убедится, что значение точно является числом.

// Затем мы сталкиваемся с нашим первым блоком условного кода. Блок условного кода позволяет выборочно запускать код в зависимости от того, является определённое условие истинным или нет. Он немного похож на функцию, но это не так. Простейшая форма условного блока начинается с ключевого слова if, за ним круглые скобки, за ними ещё фигурные скобки. В круглые скобки мы добавляем проверку. Если проверка возвращает true, запускается код в фигурных скобках. Если нет, этот код пропускается и мы переходим к следующей части кода. В этом случае проверяется равна ли переменная guessCount числу 1 (то есть является ли это первой попыткой игрока или нет)

// guesses.textContent += userGeuss + ' ';  добавляет текущее значение userGuess в конец параграфа guesses, плюс пустое пространство поэтому между каждыми показанными предположениями будет пробел.

// Первая конструкция if(){ } проверяет, совпадает ли предположение пользователя с randomNumber установленному в верхней части нашего JavaScript. Если это так, игрок правильно догадался, и игра выиграна, поэтому мы показываем игроку поздравительное сообщение с приятным зелёным цветом, очищаем содержимое окна информации о минимуме / максимуме и запускаем функцию, называемую setGameOver ()

// Теперь мы добавили ещё одну проверку после предыдущей, используя конструкцию else if () {}. Эта конструкция проверяет, является ли этот ход последним ходом пользователя. Если это так, программа выполняет то же самое, что и в предыдущем блоке, но выведет сообщение с текстом GAME OVER.

// Последний блок, в конце нашего кода (else {}), содержит код, который запускается только в том случае, если ни один из двух других тестов не возвращает true (т. е. Игрок не догадался правильно, но у него ещё остались догадки). В этом случае мы говорим игроку, что он ошибся, затем мы выполняем ещё один условный тест, чтобы проверить, было ли предположение больше или меньше ответа, показывая дополнительное сообщение.
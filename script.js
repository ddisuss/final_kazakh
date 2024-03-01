
document.getElementById('internetAddictionTest').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем значения ответов пользователя
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;

    // Пример обработки ответов и вывод результата
    var result = getResult(q1, q2, q3, q4, q5); // Предположим, что это ваша функция для обработки ответов

    // Отображаем результат
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = 'Sizdiń nátıjeńiz: ' + result;

    // Отображаем соответствующий блок с результатом
    displayResult(result);
});

function getResult(q1, q2, q3, q4, q5) {
    // Логика для определения зависимости от интернета
    if (q1 === "5 saǵattan astam" && q2 === "Saǵatyna bir ret" && (q3 === "Biraz ýaıymdadymyn" || q3 === "Óte ýaıymdadymyn") && q4 === "Jumys kúnderine qaraǵanda kóbirek ýaqyt" && (q5 === "Únemi, árqashan jelide" || q5 === "Óte jıi")) {
        return "Sizdiń ınternetke qol jetkinisińiz asa yńǵaıly.";
    } else if ((q1 === "5 saǵattan astam" || q1 === "3-5 saǵat") && q2 === "Saǵatyna bir ret" && q4 === "Jumys kúnderine qaraǵanda kóbirek ýaqyt") {
        return "Sizdiń ınternetke qol jetkinisińiz joǵary.";
    } else if ((q1 === "3-5 saǵat" || q1 === "1-3 saǵat") && (q2 === "Saǵatyna bir ret" || q2 === "Kúnine birneshe ret") && q4 === "Jumys kúnderine qaraǵanda kóbirek ýaqyt") {
        return "Sizdiń ınternetke qol jetkinisi ortasha.";
    } else {
        return "Sizdiń ınternetke qol jetkinisińiz tómen.";
    }
}


function displayResult(result) {
    // Скрываем все блоки с результатами
    var resultBlocks = document.querySelectorAll('.result-block');
    resultBlocks.forEach(function(block) {
        block.style.display = 'none';
    });

    // Отображаем блок, соответствующий результату
    switch (result) {
        case "Sizdiń ınternetke qol jetkinisińiz asa yńǵaıly.":
            document.getElementById('internetDependent').style.display = 'block';
            break;
        case "Sizdiń ınternetke qol jetkinisińiz joǵary.":
            document.getElementById('internetHigh').style.display = 'block';
            break;
        case "Sizdiń ınternetke qol jetkinisi ortasha.":
            document.getElementById('internetAverage').style.display = 'block';
            break;
        case "Sizdiń ınternetke qol jetkinisińiz tómen.":
            document.getElementById('internetLow').style.display = 'block';
            break;
        default:
            break;
    }
}

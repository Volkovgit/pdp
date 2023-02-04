const studentList = [
    {
      "studNumber": 5989,
      "name": "Holt Rowe",
      "class": 11
    },
    {
      "studNumber": 7903,
      "name": "Garrett Paul",
      "class": 7
    },
    {
      "studNumber": 6429,
      "name": "Opal Nunez",
      "class": 10
    },
    {
      "studNumber": 7232,
      "name": "Kristy Mullins",
      "class": 7
    },
    {
      "studNumber": 5105,
      "name": "Reilly Crawford",
      "class": 6
    },
    {
      "studNumber": 7080,
      "name": "Dionne Lyons",
      "class": 7
    },
    {
      "studNumber": 5625,
      "name": "Romero Skinner",
      "class": 5
    },
    {
      "studNumber": 4872,
      "name": "Lottie Velez",
      "class": 10
    },
    {
      "studNumber": 2691,
      "name": "Emma Beach",
      "class": 6
    },
    {
      "studNumber": 2063,
      "name": "Jeri Soto",
      "class": 7
    },
    {
      "studNumber": 1917,
      "name": "Hansen Morgan",
      "class": 8
    },
    {
      "studNumber": 8712,
      "name": "Greta Dotson",
      "class": 11
    },
    {
      "studNumber": 9322,
      "name": "Lenore Koch",
      "class": 10
    }
]


$(document).ready(function(){
    $('#btnSubmit').on('click',function(){

        if (hasEmptyRequiredInput()) {

            $('#alert').modal('show');
            return false;
        }
        Get_scores()
        $('#result').modal('show');
        return false;
    });
    for(var i = 0; i<studentList.length;i++){
        var studentRow = `<tr id='${i}'>
        <td>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio_student"
              id="flexRadioDefault${i}"
            />
          </div>
        </td>
          <td><label class="d-block form-check-label" for="flexRadioDefault${i}" style="width: 100%;">${studentList[i].name}</label></td>
          <td><label class="d-block form-check-label" for="flexRadioDefault${i}" style="width: 100%;">${studentList[i].studNumber}</label></td>
          <td><label class="d-block form-check-label" for="flexRadioDefault${i}" style="width: 100%;">${studentList[i].class}</label></td>
      </tr>`
        $('#studentList > tbody').append( studentRow );
    }
    
});


function inputsInformation(inputs) {
    var text = '';
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var element = $('input[name="'+input.name+'"]:checked')[0];
        console.log(element);
        if (!element) {
            $('#'+input.divId).addClass('panel-danger');
            text += input.text + '';
        }
        else {
            $('#' + input.divId).removeClass('panel-danger');
        }
    }
    return text;
}

function hasEmptyRequiredInput(){
    var requiredInputs = [
        {
            // id: 'flexRadioDefault',
            text: 'Класс',
            divId: 'panelStudentPicker',
            name:"radio_student"
        }
    ];

    var text = inputsInformation(requiredInputs);
    if(text !== ''){

        return true;
    }
        return false;
}

function Get_scores() {

    var value = fullInTopics() + choiceTopics() + multipleChoiceTopics() + trueOrFalseTopics() + shortAnswerTopics();
    $("#scores").text(value);
    $("#resultScore").text(value + " баллов");
    $("#resultGrade").text("Оценка : "+gradeCalculate(value));
    $('#divScores').addClass('text-danger');
    return value
}

function gradeCalculate(score){
    if(score < 50) return 2
    if(score < 60) return 3
    if(score < 70) return 4
    if(score < 80) return 5
}

function fullInTopics() {
    var fullInSubject1 = new Subject('fullInSubject', ['Единый язык моделирования'], 1, 5);
    var fullInSubject2 = new Subject('fullInSubject', ['Наследование', 'Полиморфизм', 'Инкапсуляция'], 3, 5);

    var value1_1_1 = $('#gap1').val();

    if (value1_1_1 == fullInSubject1.answer[0]) {
        fullInSubject1.scores += fullInSubject1.scorePerSubject;
    }

    var value1_2 = [];
    value1_2.push($('#gap2_1').val());
    value1_2.push($('#gap2_2').val());
    value1_2.push($('gap2_3').val());

    for (var i = 0; i < fullInSubject2.answer.length; i++) {
        for (var j = 0; j < value1_2.length; j++) {
            if (fullInSubject2.answer[i] == value1_2[j]) {
                fullInSubject2.scores += fullInSubject2.scorePerSubject;
                break;
            }
        }
    }
    return fullInSubject1.scores + fullInSubject2.scores;
}

function choiceTopics() {
    var choiceSubject = new Subject('choiceSubject', ['B', 'A'], 2, 10);

    var choiceSubject1 = new ChoiceSubject('radio_ans_1');
    var value1 = choiceSubject1.calculation();
    var choiceSubject2 = new ChoiceSubject('radio_ans_2');
    var value2 = choiceSubject2.calculation();
    var value = [value1, value2];

    for (var i = 0; i < value.length; i++) {
        if (value[i] == choiceSubject.answer[i]) {
            choiceSubject.scores += choiceSubject.scorePerSubject;
        }
    }
    return choiceSubject.scores;
}

function multipleChoiceTopics() {
    var multipleChoiceSubject = new Subject('multipleChoiceSubject',
        [
            ['A', 'B', 'D'],
            ['A', 'B', 'C'],
            ['B','C','D']
        ], 3, 10);

    var multipleChoiceSubject1 = new MultipleChoiceSubject('check_ans_1');
    var value1 = multipleChoiceSubject1.calculation();
    var answer1 = multipleChoiceSubject.answer[0];
    if (answer1.length == value1.length) {
        var diffA = _.difference(value1, answer1);
        if (_.isEmpty(diffA)) {
            multipleChoiceSubject.scores += multipleChoiceSubject.scorePerSubject;
        }
    }

    var multipleChoiceSubject2 = new MultipleChoiceSubject('check_ans_2');
    var value2 = multipleChoiceSubject2.calculation();
    var answer2 = multipleChoiceSubject.answer[1];
    if (answer2.length == value2.length) {
        var diffB = _.difference(value2, answer2);
        if (_.isEmpty(diffB)) {
            multipleChoiceSubject.scores += multipleChoiceSubject.scorePerSubject;
        }
    }

    var multipleChoiceSubject3 = new MultipleChoiceSubject('check_ans_3');
    var value3 = multipleChoiceSubject3.calculation();
    var answer3 = multipleChoiceSubject.answer[2];
    if (answer3.length == value3.length) {
        var diffA = _.difference(value3, answer3);
        if (_.isEmpty(diffA)) {
            multipleChoiceSubject.scores += multipleChoiceSubject.scorePerSubject;
        }
    }

    return multipleChoiceSubject.scores;
}

function trueOrFalseTopics() {
    var trueOrFalseSubject = new Subject('trueOrFalseSubject', ['no', 'yes'], 2, 10);
    var trueOrFalseSubject1 = new ChoiceSubject('ans_1');
    var value1 = trueOrFalseSubject1.calculation();
    var trueOrFalseSubject2 = new ChoiceSubject('ans_2');
    var value2 = trueOrFalseSubject2.calculation();
    var value = [value1, value2];

    for (var i = 0; i < value.length; i++) {
        if (value[i] == trueOrFalseSubject.answer[i]) {
            trueOrFalseSubject.scores += trueOrFalseSubject.scorePerSubject;
        }
    }
    return trueOrFalseSubject.scores;
}

function shortAnswerTopics() {
    var shortAnswerSubject = new Subject('shortAnswerSubject',
        ['Модель — это упрощение и абстракция реального мира.,Модель — это представление изучаемой системы, процесса, вещи или концепции. Может быть физическим объектом; может быть каким-то графическим изображением;Или математическое выражение.'],
        1, 20);
    var value5 = $('#short5').val();

    if (value5 == shortAnswerSubject.answer[0]) {
        shortAnswerSubject.scores = shortAnswerSubject.scorePerSubject;
    }
    return shortAnswerSubject.scores;
}

var testObj = {
    elementBody: document.body,
    elementWrapper: document.createElement("div"),
    elementTitle: document.createElement("h1"),
    elementForm: document.createElement("form"),
    elementButton: document.createElement("button"),
    elementNumberQuestion: 0,

    preloadForm: function () {
        this.elementTitle.innerHTML =  "Тест по программированию";
        this.elementButton.innerHTML = "Проверить мои результаты";

        this.elementWrapper.classList.add('wrapper');
        this.elementForm.classList.add('wrapper--form');
        this.elementTitle.classList.add('wrapper--header');
        this.elementButton.classList.add('wrapper--button');
        this.elementButton.classList.add('btn');
        this.elementButton.classList.add('btn-success');

        this.elementBody.appendChild(this.elementWrapper);
        this.elementWrapper.appendChild(this.elementForm);
        this.elementForm.appendChild(this.elementTitle);
        this.elementForm.appendChild(this.elementButton);
    },

    createQuestion: function () {
        var questionDiv = document.createElement('div');
        var questionTitle = document.createElement('h2');
        var questionCheckbox;
        var questionLabel;

        questionDiv.classList.add('questions');
        questionTitle.classList.add('questions--header');
        questionTitle.innerHTML = ((this.elementNumberQuestion+1) + '. Вопрос №' + (this.elementNumberQuestion+1) );
        questionDiv.appendChild(questionTitle);

        this.elementNumberQuestion++;

        for (var i = 0; i < 3; i++) {
            var questionInput = document.createTextNode('Вариант ответа №' + (i + 1) );
            questionLabel = document.createElement('label');
            questionLabel.classList.add('questions--label');

            questionCheckbox =  document.createElement('input');
            questionCheckbox.type = "checkBox";

            questionDiv.appendChild(questionLabel);
            questionLabel.appendChild(questionCheckbox);
            questionLabel.appendChild(questionInput);
        }

        this.elementForm.insertBefore(questionDiv, this.elementButton);
    }
};

testObj.preloadForm();

for (var i = 0; i <= 2; i++) {
    testObj.createQuestion();
}
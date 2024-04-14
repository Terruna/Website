function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var question = document.getElementById('question-' + id);
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.classList.remove('faq-open');
    } else {
      answer.style.display = 'block';
      question.classList.add('faq-open');
    }
  }
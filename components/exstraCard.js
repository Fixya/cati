import styles from './exstraCard.module.css';

const task = {
  counter: 0,
  questions: [
    "1. Вам понравился сайт?",
    "2. Это отлично! Чем он вас привлёк? :)",
    "2. Жаль, что он оставил такое смутное мнение.\nМожет хотите сказать что-то ещё?",
    "2. Оу... Я постараюсь это исправить.\nХотите что-нибудь посоветовать?",
  "Спасибо за оценку!"],
  answer: [
    [
      {name: "Да.", value: "1", type: 'radio', exstraType: 'hidden'},
      {name: "Что-то среднее.", value: "2", type: 'radio', exstraType: 'hidden'},
      {name: "Нет.", value: "3", type: 'radio', exstraType: 'hidden'}],
    [
      {name: "Это хорошая работа!", value: "4", type: 'radio', exstraType: 'hidden'},
      {name: "Мне нравится, но хотел(а) бы подкорректировать:", value: "4", type: 'radio', exstraType: 'text'},
      {name: "Я просто проверяю, что случится, нажав 'Да'.", value: "4", type: 'radio', exstraType: 'hidden'}],
    [
      {name: "У меня есть предложение:", value: "4", type: 'radio', exstraType: 'text'},
      {name: "Нет.", value: "4", type: 'radio', exstraType: 'hidden'}],
    [
      {name: "Конечно.", value: "4", type: 'radio', exstraType: 'text'},
      {name: "Я подумаю.", value: "4", type: 'radio', exstraType: 'hidden'}],
    [
      {name: "", value: "", type: 'hidden', exstraType: 'hidden'},]
  ]
}

const renderinAnswer = (arr) => {
  const div = document.createElement('div')
  arr.map(it => {
    const p = document.createElement('p')
    const input = document.createElement('input')
    const h = document.createElement('h')
    const exstraInput = document.createElement('input')

    input.type = it.type
    input.value = it.value
    input.classList.add(styles.input)

    h.innerText = it.name
    h.classList.add(styles.text)

    exstraInput.type = it.exstraType
    exstraInput.placeholder="Коммент"
    exstraInput.classList.add(styles.exstraInput)

    input.addEventListener('click', () => {
      task.counter = input.value;
      div.innerText = "";
      div.append(welcome());
    })

    p.append(input)
    p.append(h)
    p.append(exstraInput)
    div.append(p)
  })

  return div
}

const welcome = () => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  p.innerText = task.questions[task.counter]
  p.classList.add(styles.title)

  div.append(p)
  div.append(renderinAnswer(task.answer[task.counter]))

  return div;
}

export const exstraCard = () => {
  const div = document.createElement('div')
  const form = document.createElement('form')

  div.classList.add(styles.container)

  form.name = "test"
  form.method = "post"
  form.action = "input1.php"

  form.append(welcome())

  form.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
    }
  });

  div.append(form)
  return div;
}
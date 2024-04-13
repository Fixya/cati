import styles from './exstraCard.module.css';

let n = 0  //?

const task = {
  questions: [
    "Вам понравился сайт?",
    "Это отлично! Чем он вас привлёк? :)",
    "Жаль, что он оставил такое смутное мнение. Может хотите сказать что-то ещё?",
    "Оу... Я постараюсь это исправить. Хотите что-нибудь посоветовать?"],
  answer: [
    [
      {name: "Да", value: "1"},
      {name: "Что-то среднее", value: "2"},
      {name: "Нет", value: "3"}],
    [
      {name: "Это хорошая работа!", value: "4"},
      {name: "Мне нравится, но хотел(а) бы подкорректировать", value: "4"},
      {name: "Я просто проверяю, что случится, нажав 'Да'.", value: "4"}],
    [
      {name: "У меня есть предложение:", value: "4"},
      {name: "Нет.", value: "4"}],
    [
      {name: "Конечно", value: "4"},
      {name: "Я подумаю.", value: "4"}],
    [
      {name: "Спасибо за ответ!", value: ""}]
  ]
}

const renderinAnswer = (arr) => {
  const div = document.createElement('div')
  arr.map(it => {
    const p = document.createElement('p')
    const input = document.createElement('input')
    const h = document.createElement('h')

    input.addEventListener('click', () => {n = input.value; div.append(welcome())})  //?
    //нужно сделать чтобы страничка стирала всё и заново отрисовывала

    input.type = "radio"
    input.name = "browser"
    input.value = it.value
    h.innerText = it.name

    p.append(input)
    p.append(h)
    div.append(p)
  })

  return div
}

const welcome = () => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  n === 4 ? n=4 : p.innerText = task.questions[n]

  div.append(p)
  div.append(renderinAnswer(task.answer[n]))

  return div;        //?
}

export const exstraCard = () => {
  const div = document.createElement('div')
  const form = document.createElement('form')

  div.classList.add(styles.container)

  form.name = "test"
  form.method = "post"
  form.action = "input1.php"

  form.append(welcome())

  div.append(form)
  return div;
}
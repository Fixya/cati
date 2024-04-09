import styles from './exstraCard.module.css';

let n = 0

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
      "Это хорошая работа!",
      "Мне нравится, но хотел(а) бы подкорректировать",
      "Я просто проверяю, что случится, нажав 'Да'."
    ],
    [
      "У меня есть предложение:",
      "Нет."
    ],
    [
      "Конечно.",
      "Я подумаю."
    ]
  ]
}

const renderinAnswer = (arr) => {
  const div = document.createElement('div')
  arr.map(it => {
    const p = document.createElement('p')
    const input = document.createElement('input')
    const h = document.createElement('h')

    input.type = "radio"
    input.name = "browser"
    input.value = it.value
    h.innerText = it.name

    input.addEventListener('click', () => {n = value})

    p.append(input)
    p.append(h)
    div.append(p)
  })

  return div
}


// function targetItem(event) {
//   let target = event.target;
//   txt.innerHTML = target.value;
// }
//
// let inps = document.querySelectorAll('input'),
//   txt = document.querySelector('.box_text');
//
// inps.forEach((item) => {
//   item.addEventListener('click', targetItem)
// })


const welcome = () => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  p.innerText = task.questions[n]

  div.append(p)
  div.append(renderinAnswer(task.answer[n]))

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

  console.log(form)

  div.append(form)
  return div;
}

// <form name="test" method="post" action="input1.php">
//   <p><b>Каким браузером в основном пользуетесь:</b><Br>
//   <input type="radio" name="browser" value="ie"> Internet Explorer<Br>
//   <input type="radio" name="browser" value="opera"> Opera<Br>
//     <input type="radio" name="browser" value="firefox"> Firefox<Br>
//     </p>
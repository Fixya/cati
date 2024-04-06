import styles from './activityCard.module.css';

const task = {
  questions: [
    "Вам понравился сайт?",
    "Это отлично! Чем он вас привлёк?",
    "Жаль, что он оставил такое смутное мнение. Может хотите сказать что-то ещё?",
    "Оу... Я постараюсь это исправить. Хотите что-нибудь посоветовать?"],
  answer: [
    [
      "Да",
      "Что-то среднее",
      "Нет"
        ],
    [
      "Это хорошая работа!",
      "Мне нравится, но хотел(а) бы подкорректировать",
      "Я просто проверяю, что случится, нажав 'Да'"
    ],
    [],
    []
  ]
}

const arrN = ["Да, чтобы дать понять: насколько она плохая","Есть сильные недочёты"]
const arrE = ["что-то класс","ничего","знаешь что?"]

const daumenyanetidey = (arr) => {

  const div = document.createElement('div')
  const p = document.createElement('p')
  const input = document.createElement('input')
  const h = document.createElement('h')

  input.type = "radio"
  input.name = "browser"
  h.innerText = arrE[1]

  div.append(p)
  div.append(input)
}

const welcome = () => {
  const div = document.createElement('div')

  return div;
}

export const exstraCard = () => {
  const div = document.createElement('div')
  const form = document.createElement('form')

  div.classList.add(styles.container)
  form.classList.add(styles.container)

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
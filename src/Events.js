/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    var btn = document.createElement('button')
    btn.textContent = 'Удали меня'
    btn.onclick = function() {
        btn.remove()
    }

    document.body.appendChild(btn)
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    var list = document.createElement('ul')

    function addMouseOverListener(node) {
        node.onmouseover = function() {
            node.title = node.textContent
        }
    }

    arr.forEach(item => {
        var child = document.createElement('li')
        child.textContent = item

        addMouseOverListener(child)

        list.appendChild(child)
    })

    document.body.appendChild(list)
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    var link = document.createElement('a')
    link.textContent = 'tensor'
    link.href = "https://tensor.ru/"

    var handler = function(e) {
        if (e.target.textContent.length === 6) {
            e.preventDefault()
            e.target.textContent += ` ${link.href}`
        }

    }

    link.addEventListener('click', handler)

    document.body.appendChild(link)
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    var defaultHtml = "<ul><li>Пункт</li></ul><button>Добавить пункт</button>"
    document.body.innerHTML = defaultHtml;

    function addOnClickHandler(node) {
        node.onclick = function() {
            node.textContent += '!'
        }
    }

    var getNewLi = () => {
        var elem = document.createElement('li')
        elem.textContent = 'Пункт'

        addOnClickHandler(elem)

        return elem
    }

    var list = document.getElementsByTagName('ul')[0]
    var btn = document.getElementsByTagName('button')[0]

    Array.prototype.forEach.call(list.children, addOnClickHandler)

    btn.onclick = () => {
        list.appendChild(getNewLi())
    }
}

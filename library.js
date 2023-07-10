let myLibrary = []
const main = document.querySelector('.main')
const background = document.querySelector('.background')
const popupForm = document.getElementById('popup')
const form = document.getElementById('book-form')
const addBtn = document.getElementById('addBtn')
const closeBtn = document.getElementById('closeBtn')
const removeBtn = document.getElementById('removeBtn')
const statusBtn = document.getElementById('statusBtn')

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addCard(book) {
    const newCard = document.createElement('div')
    const cardInfo = document.createElement('div')
    const title = document.createElement('h3')
    const divider = document.createElement('hr')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const status = document.createElement('p')
    const statusBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    title.textContent = book.title
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Pages: ${book.pages}`
    status.textContent = `Status: ${book.read}`
    statusBtn.textContent = 'Change Status'
    removeBtn.textContent = 'Remove Book'
    newCard.classList.add('card')
    statusBtn.setAttribute('id', 'statusBtn')
    removeBtn.setAttribute('id', 'removeBtn')
    cardInfo.append(title)
    cardInfo.append(divider)
    cardInfo.append(author)
    cardInfo.append(pages)
    cardInfo.append(status)
    cardInfo.append(statusBtn)
    cardInfo.append(removeBtn)
    newCard.append(cardInfo)
    main.append(newCard)
}

function addBook(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData);
    const newBook = new Books(
        formProps.title,
        formProps.author,
        formProps.pages,
        formProps.read
    )
    myLibrary.push(newBook)
    addCard(newBook)
    form.reset()
    popupForm.style.display = 'none'
    background.style.display = 'none'
}

addBtn.onclick = function () {
    popupForm.style.display = 'block'
    background.style.display = 'block'
}

closeBtn.onclick = function () {
    popupForm.style.display = 'none'
    background.style.display = 'none'
}

popupForm.addEventListener('submit', addBook)

document.addEventListener("click", function(e){
    const targetRemove = e.target.closest("#removeBtn");
    const targetChange = e.target.closest("#statusBtn"); // Or any other selector.
  
    if(targetRemove){
      targetRemove.parentElement.parentElement.remove()
    } else if (targetChange) {

    }
  });


const hobbit = new Books('The Hobbit', 'J.R.R Tolkien', 295, 'read')
const hobbit2 = new Books('The Hobbit 2', 'J.R.R Tolkien', 295, 'read')
const test = new Books('test', 'test', 69, 'read')


myLibrary.push(hobbit)
myLibrary.push(hobbit2)



for (let book in myLibrary) {
    const newCard = document.createElement('div')
    const cardInfo = document.createElement('div')
    const title = document.createElement('h3')
    const divider = document.createElement('hr')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const status = document.createElement('p')
    const statusBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    title.textContent = myLibrary[book].title
    author.textContent = `Author: ${myLibrary[book].author}`
    pages.textContent = `Pages: ${myLibrary[book].pages}`
    status.textContent = `Status: ${myLibrary[book].read}`
    statusBtn.textContent = 'Change Status'
    removeBtn.textContent = 'Remove Book'
    newCard.classList.add('card')
    statusBtn.setAttribute('id', 'statusBtn')
    removeBtn.setAttribute('id', 'removeBtn')
    cardInfo.append(title)
    cardInfo.append(divider)
    cardInfo.append(author)
    cardInfo.append(pages)
    cardInfo.append(status)
    cardInfo.append(statusBtn)
    cardInfo.append(removeBtn)
    newCard.append(cardInfo)
    main.append(newCard)
}
let myLibrary = []
const main = document.querySelector('.main')

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Books.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}

function addCard(book) {
    const newCard = document.createElement('div')
    const cardInfo = document.createElement('div')
    const title = document.createElement('h3')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const status = document.createElement('p')
    title.textContent = book.title
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Pages: ${book.pages}`
    status.textContent = `Status: ${book.read}`
    newCard.classList.add('card');
    cardInfo.append(title);
    cardInfo.append(author);
    cardInfo.append(pages);
    cardInfo.append(status);
    newCard.append(cardInfo)
    main.append(newCard);
}

const hobbit = new Books('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')

myLibrary.push(hobbit)
addCard(hobbit)
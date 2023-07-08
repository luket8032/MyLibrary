function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Books.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}

const hobbit = new Books('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')

console.log(hobbit.info())
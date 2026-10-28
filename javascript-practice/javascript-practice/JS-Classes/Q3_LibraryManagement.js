// Q3: Library Management System (Classes + Objects)
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }
        this.isIssued = true;
        return `${this.title} has been issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} was not issued.`;
        }
        this.isIssued = false;
        return `${this.title} has been returned successfully.`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("Atomic Habits", "James Clear", "ISBN003", true)
];

function showAvailableBooks() {
    const available = books.filter(book => !book.isIssued);
    console.log("\nAvailable books:");
    if (available.length === 0) console.log("No books are currently available.");
    available.forEach(book => console.log(`${book.title} by ${book.author} (${book.isbn})`));
}

function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn.toLowerCase() === isbn.toLowerCase());
    if (!book) return "No book found with that ISBN.";
    return book.issueBook();
}

showAvailableBooks();
console.log("\n" + issueBookByISBN("ISBN001"));
showAvailableBooks();

// Example return:
// console.log(books.find(book => book.isbn === "ISBN003").returnBook());

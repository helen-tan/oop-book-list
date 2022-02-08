// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor 
function UI() {

}

// UI prototype methods 
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols to tr element
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete"> X </a></td>
    `;
    // Add new row to table
    list.appendChild(row);
    console.log(row);
}

UI.prototype.showAlert = function (message, className) {
    // construct element
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));


    // Insert into DOM
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
    // Disappear after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        if (confirm('Are you sure?')) {
            target.parentElement.parentElement.remove();
        }
    }
}


UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



// Event Listener - Add Book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        // Upon submitting, instantiate a book object
        const book = new Book(title, author, isbn);

        // Instantiate a UI Object
        const ui = new UI();

        // Validate
        if (title === '' || author === '' || isbn === '') {
            // Error elert
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            // Add book to list
            ui.addBookToList(book);

            // Show success message
            ui.showAlert('Book Added!', 'success');

            // Clear fields
            ui.clearFields();
        }

        e.preventDefault();
    });

// Event Listener - Delete Book (Event Delegation)
document.getElementById('book-list').addEventListener('click',  // Grab the parent
    function (e) {
        // instantiate UI Object
        const ui = new UI();
        // Delete Book
        ui.deleteBook(e.target);

        // Show message
        ui.showAlert('Book Removed!', 'success');

        e.preventDefault();
    });

// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor 
function UI(){

}
// UI prototype methods 
UI.prototype.addBookToList = function(book){
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

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // Upon submitting, instantiate a book object
    const book = new Book(title, author, isbn);

    // Instantiate a UI Object
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
});
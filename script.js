window.onload = function(){
let myLibrary=[];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info= function(){
        console.log(title+" by "+author+" "+pages+" pages")
    }
}

function addBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    if (title === "" || author==="" || pages==="") {
        alert("No se puede crear un libro sin los campos rellenos");
        return; //Salir de la función si algún campo está vacío
    }

    let newBook= new Book(title, author, pages);
    let bookContainer=document.getElementById("bookContainer");
    let bookDiv=document.createElement("div");
    bookContainer.appendChild(bookDiv);
    
    bookDiv.textContent=`Title: ${newBook.title}  Author: ${newBook.author}  Pages: ${newBook.pages}`;
    
    bookDiv.classList.add("book");
    

    myLibrary.push(newBook);

    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("pages").value="";

    var deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("delete-button");

    //Agregar evento clic
    deleteButton.addEventListener("click", function(){
        deleteBook(newBook, bookContainer, bookDiv);
    })

    bookDiv.appendChild(deleteButton);

    console.table(myLibrary);
}

function deleteBook(book, bookContainer, bookDiv) {
    let index = myLibrary.indexOf(book);
    if (index>-1) {
        myLibrary.splice(index,1);
        bookContainer.removeChild(bookDiv);
    }
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    addBook();
})
}
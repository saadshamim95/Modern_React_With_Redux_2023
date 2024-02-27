import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        console.log("BookId:", book.id);
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="action">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow;
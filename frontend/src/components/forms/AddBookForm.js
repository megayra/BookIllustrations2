// import React, { useState } from 'react'

// const AddBookForm = props => {
//   const initialFormState = { id: null, name: '', year: '', author: '', genre: '', description: '', illustrations: [] }
//   const [book, setBook] = useState(initialFormState)
  
//   const handleInputChange = event => {
//     const { name, value } = event.target
//     setBook({ ...book, [name]: value });
//   }
  
//   return (
//     <form onSubmit={event => {
//         event.preventDefault()
//         if (!book.name || !book.description) return
//         props.addBook(book)
//         setBook(initialFormState)
//       }}>
          
//       <label>Title</label>
//       <input type="text" name="name" value={book.name} onChange={handleInputChange} />
//       <label>Year</label>
//       <input type="text" name="year" value={book.year} onChange={handleInputChange} />
//       <label>Author</label>
//       <input type="text" name="author" value={book.author} onChange={handleInputChange} />
//       <label>Genre</label>
//       <input type="text" name="genre" value={book.genre} onChange={handleInputChange} />
//       <label>Description</label>
//       <textarea name="description" value={book.description} onChange={handleInputChange} />
//       <button>Add new book</button>
//     </form>
//   )
// }

// export default AddBookForm
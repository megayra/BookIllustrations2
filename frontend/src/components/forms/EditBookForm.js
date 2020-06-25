// import React, { useState, useEffect } from 'react'

// const EditBookForm = props => {
//   const [ book, setBook ] = useState(props.currentBook)

//   useEffect(
//     () => {
//       setBook(props.currentBook)
//     },
//     [ props ]
//   )
//   // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

//   const handleInputChange = event => {
//     const { name, value } = event.target

//     setBook({ ...book, [name]: value })
//   }

//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault()
//         props.updateBook(book.id, book)
//       }}
//     >
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
//       <button>Update book</button>
//       <button className="button muted-button">
//         Cancel
//       </button>
//     </form>
//   )
// }

// export default EditBookForm

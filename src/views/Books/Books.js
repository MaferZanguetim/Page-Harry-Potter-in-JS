import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { ButtonAppBar, BookCard } from '../../components'
import { getBooks } from '../../services'
import './Books.css'

const Books = () =>{
    const [books, setBooks] = useState([{
        
    }])

    const fetchBooks = async() => {
        let data = await getBooks()
        setBooks(data.data.data)
    }

    useEffect(() => {
      fetchBooks()
    }, [])

    return(
        <div>
            <ButtonAppBar/>
            <h1 class='white'>
                Livros da Saga de Harry Potter
            </h1>
            <Box display='flex' gap={2} flexWrap='wrap' justifyContent='center' alignItems='center'>
                {books.map(book => <BookCard author={book.attributes?.author} cover={book.attributes?.cover} summary={book.attributes?.summary} title={book.attributes?.title} /> )}
            </Box>
        </div>
    )
}
export default Books
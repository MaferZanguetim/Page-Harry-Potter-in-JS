import client from "./client";

const getBooks = async() => {
    let data = await client.get('/v1/books')
    return data
}

export default getBooks
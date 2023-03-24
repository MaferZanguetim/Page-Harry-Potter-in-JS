import client from "./client";

const getSpells = async() => {
    let data = await client.get('/v1/spells')
    return data
}

export default getSpells
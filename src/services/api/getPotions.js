import client from "./client";

const getPotions = async() => {
    let data = await client.get('/v1/potions')
    return data
}

export default getPotions
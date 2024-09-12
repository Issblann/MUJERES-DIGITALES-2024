import { useState, useEffect } from 'react';
import { rickAndMortyApi } from '../services/rickAndMortyApi'
import { CardImage } from '../components/CardImage';
import { Layout } from '../components/Layout';

export const Womens = () => {
    const [data, setData] = useState([])

    const results = async () => {
        const data = await rickAndMortyApi()
        setData(data)
    }


    useEffect(() => {
        results()
    }, [])

    const womensFilter = data.filter((character) => (character.gender === 'Female'))

    return (
        <Layout>
            {womensFilter.map((character) => {
                return (
                    <CardImage
                        key={character.id}
                        titleImage={character.name}
                        descriptionImage={character.species}
                        urlImage={character.image}
                    />
                )
            })}
        </Layout>
    )
}
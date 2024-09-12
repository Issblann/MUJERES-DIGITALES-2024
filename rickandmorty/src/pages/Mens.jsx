import { useState, useEffect } from 'react';
import { rickAndMortyApi } from '../services/rickAndMortyApi'
import { CardImage } from '../components/CardImage';
import { Layout } from '../components/Layout';

export const Mens = () => {
    const [data, setData] = useState([])

    const results = async () => {
        const data = await rickAndMortyApi()
        setData(data)
    }


    useEffect(() => {
        results()
    }, [])


    const mensFilter = data.filter((character) => (character.gender === 'Male'))

    return (
        <Layout>
            {mensFilter.map((character) => {
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
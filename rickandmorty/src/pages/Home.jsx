import { useState, useEffect } from 'react';
import { rickAndMortyApi } from '../services/rickAndMortyApi'
import { CardImage } from '../components/CardImage';
import { Layout } from '../components/Layout';

export const Home = () => {
    const [data, setData] = useState([])

    const results = async () => {
        const data = await rickAndMortyApi()
        setData(data)
    }


    useEffect(() => {
        results()
    }, [])




    return (
        <Layout>
            {data.map((character) => {
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
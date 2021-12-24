import React, { useEffect, useState } from 'react'
import { getAnimals } from '../services/AnimalAPIService/AnimalAPIService'
import { AnimalData } from '../interface';

function _formatAnimals(animals: AnimalData[]): string[] {
    return animals?.map((animal: {name: string, species: string, gender: string, age: string}) => {
                return animal.name + " " + animal.species + " " + animal.gender + " " + animal.age
            })
}

export default function Home() {
    const [animals, setAnimals] = useState<AnimalData[]>();
    useEffect(() => {
        getAnimals().then(res => {
            setAnimals(res);
        })
    }, [])
    return (
        <div>
            {_formatAnimals(animals as AnimalData[])}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { getAnimals } from '../services/AnimalAPIService/AnimalAPIService'
import { DocumentData } from 'firebase/firestore/lite';

export default function Home() {
    const [animals, setAnimals] = useState<DocumentData>();
    useEffect(() => {
        getAnimals().then(res => {
            setAnimals(res);
        })
    }, [])
    return (
        <div>
            {animals?.map((animal: {name: string, species: string, gender: string, age: string}) => {
                return animal.name + " " + animal.species + " " + animal.gender + " " + animal.age
            })}
        </div>
    )
}

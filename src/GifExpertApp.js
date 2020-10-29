import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    // aqui el estado inicial sera "Homero" al hacer el primer llamado a la API de Giphy
    const [categories, setCategories] = useState(['homero']);

    return (
        <>
        {/* este es el titulo en la parte superior de la pagina */}
            <h1>Ok Gifs !</h1>
            {/* nota: el componente AddCategory se comunica mediante props, y envia el setCategories, que ingresa el nuevo valor al state */}
            <AddCategory 
                        setCategories={ setCategories } />

            <p>Busca una Imagen GIF y descargala , Es totalmente GRATIS !</p>

            <hr />

            <ol>
                {/* este el metodo .map emitira el componente GifGrid por cada resultado , limite el resultado a 20 ejemplos , asi que seran 20 Cards, es decir 20 GifGrid */}
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}

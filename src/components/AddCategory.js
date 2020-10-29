import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    // nota: handleInputChange lee los valores ingresados del input, los modifica utilizando el setInputValue / ( e.target.value lee el input )
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    // nota: handleSubmit es la constante que se anexa con el formulario atravez del onSubmit, utilizando e.preventDefault,
    // cancelmos el posteo completo de la pagina, evitando el refresh del navegador
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

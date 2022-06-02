import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect( () => {

    }, [formState])

    useEffect( () => {

    }, [email])

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            name: e.target.value,
            email: email
        })
    }

    const handleEmailChange = (e) => {
        setFormState({
            ...formState,
            name: name,
            email: e.target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu correo'
                    autoComplete='off'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>

            {(name === '123') && <Message/>}
        </>
    )
}

export default SimpleForm
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    id: 123,
                    nombre: 'Leandro'
                })}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
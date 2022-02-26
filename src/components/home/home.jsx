import React from 'react'
import Signup from './signup'
import Login from './login'
import "./home.css"

const Home = () => {

    return (
        <>
            <div className="home-container">
            <h1 > Home</h1>
                <div className='home-cover'>
                    <Signup />
                    <br />
                    <Login />
                </div>

            </div>
        </>
    )
}

export default Home
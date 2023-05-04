import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


function Navbar (){

        return(

            <header className='navbar'>
            <div>
            <img src='./img/logococktail.png' alt="Image 1"/>
            <h1>Cocktail Master</h1>
            </div>
                    <ul>
                        <li className='nav-li'> <Link to = "/">Home</Link></li>
                        <li className='nav-li'> <Link to = "/resume"> Resume </Link></li>
                    </ul> 
            </header>
        )



    }

export default Navbar;
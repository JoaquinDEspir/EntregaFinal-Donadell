
import Navbar from './Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <header class = "navegacion">
            
            
        <Navbar/>
        <CartWidget/>
    </header>
    </>
  )
}

export default Header
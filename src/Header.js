
import Navbar from './Navbar'
import CartWidget from './CartWidget'
function Header() {
  return (
    <>
    <header class = "navegacion">
            <h1>Emporio de anna</h1>
        <Navbar/>
        <CartWidget/>
    </header>
    </>
  )
}

export default Header
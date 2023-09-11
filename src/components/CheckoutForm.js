import React from 'react'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }


  return (
    <div>
        <form onSubmit= {handleConfirm}>
        <label className="Label">
            Nombre:
            <input type="text" value={name} onChange={({ target }) => setName(target.value)} style={{ margin: '0 10px' }} />
        </label>
        <label className="Label">
            Telefono:
            <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)} style={{ margin: '0 10px' }} />
        </label>
        <label className="Label">
            Email:
            <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} style={{ margin: '0 15px' }} />
        </label>

            <div>
                <button type= 'submit' className='Button'>Crear orden</button>
            </div>
        </form>
    </div>
  )
}
export default CheckoutForm;


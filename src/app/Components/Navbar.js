import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <ul style={{display:'flex'}}>
            <li style={{marginLeft:'20px',listStyle:'none'}}>
                <Link href='/'>Home</Link>
            </li>
            <li style={{marginLeft:'20px',listStyle:'none'}}>
                <Link href='/about'>About</Link>
            </li>
            <li style={{marginLeft:'20px',listStyle:'none'}}>
                <Link href='/service'>Service</Link>
            </li>
            <li style={{marginLeft:'20px',listStyle:'none'}}>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
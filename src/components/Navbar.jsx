import React from 'react'
import "./Navbar.scss"


export function Navbar() {
  return (
    <nav className="navbar">
       <div>
        <img src='shocknewslogo.png' alt=''></img></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Documentaries</a></li>
        <li><a href="#">Who are we?</a></li>
      </ul>
    </nav>
  )
}

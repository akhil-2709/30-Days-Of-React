// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// To get the root element from the HTML document
import asabenehImage from './images/dp.jpeg'
import techimage from './images/frontend_technologies.png'
// JSX element, header
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {s
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 2, 2020'

// // JSX element, header
// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Instructor: {author.firstName} {author.lastName}
//       </p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// )

// const numOne = 3
// const numTwo = 2

// const result = (
//   <p>
//     {numOne} + {numTwo} = {numOne + numTwo}
//   </p>
// )

// const yearBorn = 1820
// const currentYear = new Date().getFullYear()
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} is {age} years old
//   </p>
// )

// // JSX element, main
// const techs = ['HTML', 'CSS', 'JavaScript']
// const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// const user = (
//   <div>
//     <img src={asabenehImage} alt='asabeneh image' />
//   </div>
// )

// JSX element, main
const image_tech =  (
  <div>
    <img className="fit" src={techimage} alt='technologies image' />
  </div>
)
const level_2_1 = (
  <main>
    <div className='main-wrapper'>
      {image_tech}
    </div>
  </main>
)

const level_2_2 = (
  <div className='container'>
    <h4 align="center">SUBSCRIBE</h4>
    <br />
    <p align="center">Sign up with your email address to receive news and updates</p>
    <input align="center" type="text"></input>
    <input align="center" type="text"></input>
  </div>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {level_2_1}
    {level_2_2}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
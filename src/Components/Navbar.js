
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Css/nav.css'
import {Button} from '../Button'

class Navbar extends Component {
    state = {
      clicked: false
    }

  handlClick = () => {
    this.setState({ clicked : !this.state.clicked})
  }

  render() {
    const menuItems = [
      {
          title: 'Home',
          url: '/',
          cName: 'nav-links'
  
      },
      {
          title: 'Portfolio',
          url: '/portfolio',
          cName: 'nav-links'
  
      },
      {
          title: 'Contact',
          url: '/contact',
          cName: 'nav-links'
  
      },
      {
          title: 'About',
          url: '/about',
          cName: 'nav-links'
  
      },
      {
          title: 'Burgerhere',
          url: '/',
          cName: 'nav-links-mobile'
  
      },
  ]
    return (
      <>
        <nav>
          <div className="navbar-logo">
              <h1>Title here</h1>
          </div>
          
          <div className="menu-Icon" onClick={this.handlClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {menuItems.map((item, index) =>{
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName} >{item.title}</Link>
                </li>

              )
            })}


          </ul>
          <Button>ASASAS</Button>
        </nav>
        </>
      )
  }
  
}

export default Navbar

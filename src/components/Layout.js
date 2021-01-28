import React from 'react'
import NavBar from './Navbar'

export default function Layout(props){
  return(
    <React.Fragment> 
      <NavBar/>
      {props.children}
    </React.Fragment>
    )
}
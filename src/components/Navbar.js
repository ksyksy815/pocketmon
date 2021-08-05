import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainNav = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: var(--dark-blue-color);
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 3rem;
  padding: 0 3rem;

  h1 {
    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
    column-gap: 2rem;

    li {
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        transform: translateY(-2px);
      }
    }
  }
`

export default function Navbar() {
  return (
    <MainNav>
      <h1><Link to='/'>Pocket Wiki</Link></h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/list'>List</Link></li>
      </ul>
    </MainNav>
  )
}

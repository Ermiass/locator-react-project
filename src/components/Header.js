import React from 'react'
import { MdFoodBank } from "react-icons/md";
import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
justify-content:center;
margin-bottom: 2rem;
`

const Header = ({refreshSearch}) => {
  return (

      <HeaderContainer>
      <MdFoodBank size={'5rem'} color={'red'} onClick={refreshSearch}/>
      </HeaderContainer>
  )
}

export default Header
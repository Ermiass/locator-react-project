import React from 'react'
import { ImSpoonKnife  } from 'react-icons/im';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
  width: 500px;
  height:64px;
  margin: 0 auto;
`

const StyledInput = styled.input`
  border: 3px solid black;
  height: 20px;
  width: 450px;
  text-align: center;
  border-radius: 50px;
  padding-left:15px;
  margin-bottom: 5px;
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  margin-right: 450px;
`

const Search = ({newSearch, handleSearch,refreshSearch}) => {
   
  return (
   <StyledContainer>
    <StyledInput
      placeholder="Search by Restaurant, Search by Zip Code"
      value={newSearch}
      onChange={handleSearch} 
    />
    <StyledIcon>
     <label htmlFor="search">
       <ImSpoonKnife />
    </label> 
    </StyledIcon>
   </StyledContainer>
  )
}

export default Search;
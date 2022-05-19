import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import LoadingSpinner from './LoadingSpinner';

const CardContainer = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: stretch;
  max-width: 500px;
  width:80%;
  height:80vh;
  margin: 0 auto;
  margin-top: 3rem;
  overflow-y: scroll;
  & > article {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  & > article img {
    max-width: 100%;
  }
  .text {
    padding: 0 20px 20px;
    color: red;
  }
 
  .text > button {
    background: red;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
    }

    a:link { text-decoration: none; }


    a:visited { text-decoration: none; }


    a:hover { text-decoration: none; }


  a:active { text-decoration: none; } 
  
`

const Card = ({ restaurants, newSearch }) => {
 
  return (

  <CardContainer>
    { restaurants.length === 0 ? <LoadingSpinner /> : 
           restaurants.map( ({
          business_id,
          business_name,
          business_address,
          business_city,
          business_state,
          business_postal_code,
  
        }) => { 
  
  if (newSearch ==='') {    
   return <Link to={`/resturants/${business_id}`} 
              state={ {
                name: business_name,
                address: business_address,
                city: business_city,
                state: business_state,
                zipCode: business_postal_code
              }}
          >
   <article>
    <div class="text">
      <h3> { business_name } </h3>
      <p> { business_address } </p>
      <p> {  business_city }, {  business_state } {  business_postal_code } </p>
      <button>{ business_city } {  business_state }</button>
    </div>
  </article>
  </Link>
  }

  else{

    if(business_postal_code?.includes(newSearch)||
    business_name?.toLowerCase().includes(newSearch.toLowerCase())){ 
      return <Link to={`/resturants/${business_id}`} 
      state={ {
        name: business_name,
        address: business_address,
        city: business_city,
        state: business_state,
        zipCode: business_postal_code
      }}
  >
    <article>
    <div class="text">
      <h3> { business_name } </h3>
      <p> { business_address } </p>
      <p> {  business_city }, {  business_state } {  business_postal_code } </p>
      <button>{ business_city } {  business_state }</button>
    </div>
    </article>
</Link>
    } 
  
  }
  return null

  }) 
}
  </CardContainer>
)}


export default Card;
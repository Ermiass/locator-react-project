import React, { useState, useEffect }  from 'react';
import Maps from './components/Maps';
import Search from './components/Search';
import axios from 'axios';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [newSearch, setNewSearch] = useState('')

  const getRestaurants = async () => {
    const url = 'https://data.sfgov.org/resource/pyih-qa8i.json'
    const restaurant  = await axios(url);
    setRestaurants(restaurant.data);

  };
  
  useEffect(() => {
    getRestaurants();
  }, []);

  const handleSearch = (e)=> {
    setNewSearch(e.target.value);
  };

  const refreshSearch = ()=> {
    setNewSearch('');
  };

 
  return (
    <div>
    <Search
        newSearch={newSearch} 
        handleSearch={handleSearch} 
        refreshSearch={refreshSearch}
        />
     
     <Maps 
      restaurants ={restaurants} 
      newSearch={newSearch}  
      />
    </div>
  );
}

export default App;

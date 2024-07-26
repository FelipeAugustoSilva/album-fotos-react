import Searchbar from './components/Searchbar';
import FotoList from './components/FotoList';
import FotoAmpliada from './components/FotoAmpliada';
import axios from 'axios';

import {useState, useEffect} from 'react';


function App() {

  const [query, setQuery] = useState("")
  const [categoria, setCategoria] = useState("")

  const fetchData = async({query, categoria}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey
      }
    })
    console.log(response)
  }

  useEffect(()=> {
    fetchData(query, categoria)
  }, [])
  return (
    <div className="container">
      <Searchbar />
      <FotoList />
      <FotoAmpliada />      
    </div>
  )
}

export default App
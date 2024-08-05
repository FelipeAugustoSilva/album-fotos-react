import Searchbar from './components/Searchbar';
import FotoList from './components/FotoList';
import FotoAmpliada from './components/FotoAmpliada';
import axios from 'axios';

import {useState, useEffect} from 'react';


function App() {

  const [query, setQuery] = useState("")
  const [categoria, setCategoria] = useState("")
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activaSearch, setActivaSearch] = useState(false);

 console.log(categoria)
  const fetchData = async({query, categoria}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if(query || categoria) {
      let searchQuery = query;

      if(query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: apiKey,
          query: searchQuery,
          count: 12,
        },
      })

      setFotos(response.data.results);

      return;
    }

    

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 12,
      },
    })

    setFotos(response.data);
    console.log(response)
  }

  useEffect(()=> {
    fetchData(query, categoria)
  }, [])

  useEffect(() =>{
    if(activaSearch) {
      fetchData({ query, categoria });
      setActivaSearch(false);
    }
  }, [activaSearch])
  return (
    <div className="container">
      <Searchbar setQuery={setQuery} setCategoria={setCategoria} setActivaSearch={setActivaSearch}/>
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>
      )}      
    </div>
  )
}

export default App

import React from 'react'

const Searchbar = ({setQuery, setCategoria, setActivaSearch}) => {

  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes"
  ]
  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar fotos..." onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={() => setActivaSearch(true)}>Pesquisar</button>
      <select onChage={(e) => {
        setCategoria(e.target.value);
        setActivaSearch(true);
        }}>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  )
}

export default Searchbar
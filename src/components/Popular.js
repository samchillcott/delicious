import React, { useEffect, useState } from 'react'

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, [])

  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`)
    const data = await api.json()
    setPopular(data.recipies);
  }
  return (
    <div>Popular</div>
  )
}

export default Popular
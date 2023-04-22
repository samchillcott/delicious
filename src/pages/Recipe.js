import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=1`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <div>
      { details.title }
    </div>
  )
}

export default Recipe
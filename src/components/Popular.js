import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, [])

  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`)
    const data = await api.json()
    setPopular(data.recipes);
    console.log(data.recipes)
  }
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide>
          { popular.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{ recipe.title }</p>
                  <img src={ recipe.image } alt={ recipe.title } />
                </Card>
              </SplideSlide>
            )
          }) }
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem
  }
`

export default Popular
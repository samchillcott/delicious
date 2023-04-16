import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
// import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <div className="">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div className="">
        <FaHamburger  />
        <h4>American</h4>
      </div>
      <div className="">
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div className="">
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </div>
  )
}

export default Category
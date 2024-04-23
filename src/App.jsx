
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
 

  return (
    <div>
      
      
      <div className='lg:grid mt-20 lg:grid-cols-2 gap-10 lg:ml-48'>
        {
          coffees.map(coffee =><CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
        }
      </div>
      <Link to={'/addCoffee'}><button className="btn btn-outline btn-sm ml-[48%] btn-success">Add New Coffee</button></Link>
      
    </div>
  )
}

export default App

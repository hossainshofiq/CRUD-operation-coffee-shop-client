import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='container mx-auto text-center font-rancho'>

      <h1 className='text-6xl font-semibold text-purple-700 my-8'>All Coffees : {coffees.length} </h1>

      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App

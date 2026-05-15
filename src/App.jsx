
import { Suspense,useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Hero from './Components/HeroSection/Hero'
import Nav from './Components/NavSection/Nav'
import Tools from'./Components/Tools/Tools'

const productsJason = async ()=>{
  const response = await fetch("/Products.json")
  return response.json()
}

function App() {
  const [selected, setSelected] = useState([]);

  const jasonProps = productsJason();
  

  return (
    <>
      <Nav selected={selected}/>
      <Hero/>
      <Tools/>
     <Suspense>
      <Cards jasonProps={jasonProps} selected={selected} setSelected={setSelected} />
     </Suspense>
    </>
  )
}

export default App


import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Hero from './Components/HeroSection/Hero'
import Nav from './Components/NavSection/Nav'
import Tools from './Components/Tools/Tools'
import Step from './Components/StepSection/Step'

const productsJason = async () => {
  const response = await fetch("/Products.json")
  return response.json()
};



function App() {
  const [selected, setSelected] = useState([]);
  const [steps, setSteps] = useState([]);

  const jasonProps = productsJason();

  useEffect(() => {
    fetch("./steps.json")
      .then((response) => response.json())
      .then((data) => {
        setSteps(data.steps);
        console.log(steps)
      })
  }, []);

  return (
    <>
      <Nav selected={selected} />
      <Hero />
      <Tools />
      <Suspense>
        <Cards jasonProps={jasonProps} selected={selected} setSelected={setSelected} />
      </Suspense>
      <Step steps={steps} setSteps={setSteps} />
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductsList from "./pages/ProductsList"


function App() {
  return (
    <div>
      <Routes >

<Route  path="/" element={ <Home />}/>
<Route path="/productslist" element={<ProductsList />}/>
      </Routes>
    </div>
  )
}

export default App
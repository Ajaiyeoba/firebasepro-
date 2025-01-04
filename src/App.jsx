import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductsList from "./pages/ProductsList"
// import EditItem from  './components/EditItem'

function App() {
  return (
    <div>
      <Routes >
        <Route  path="/" element={ <Home />}/>
        <Route path="/productslist" element={<ProductsList />}/>
        { /* <Route  path="/editproduct" element={<EditItem />}/> */}
      </Routes>
    </div>
  )
}

export default App
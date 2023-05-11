import { Routes, Route } from "react-router-dom"
import { Flight } from "./pages/flights/Flight"
import { Home } from "./pages/home/Home"
import { List } from "./pages/list/List"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Flights" element={  <List/> } />
        <Route path="/Flights/:id" element={ <Flight/> } />
      </Routes>
    </div>
  )
}

export default App

import DetailsProduit from './DetailsProduit'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Review from './Review'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DetailsProduit />} />
      <Route path="/Review" element={<Review />} />
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

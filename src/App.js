import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Login,MenuBar,BarGraph,ComponentType,ForgotPassword}from "./Routes"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/MenuBar' element={<MenuBar/>} />
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/BarGraph' element={<BarGraph/>} />
          <Route path='/ComponentType' element={<ComponentType/>} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

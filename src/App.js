import { Routes, Route, Outlet, Link } from "react-router-dom";
import Sidebar from '../src/components/Sidebar'
import NotFound from '../src/components/Sidebar'



const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" exact element={<Sidebar/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
 )
}




export default App;
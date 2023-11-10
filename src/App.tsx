import { Routes, Route } from "react-router-dom";

import {
  IndexPage,
  NotFoundPage,
  LoginPage,
  PersonalCabinetPage,
} from './';



function App() {
  return(
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/personal_cabinet" element={<PersonalCabinetPage/>}/>
    </Routes>
  )
}

export default App;

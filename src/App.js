import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { HomePage } from './Emp_Navigation';
import { Mainpage } from './Emp_Listpages';
export function App()
{
  return (
    <>
    <BrowserRouter>
    <HomePage/>
    <Routes>
      <Route path='list1' exact element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
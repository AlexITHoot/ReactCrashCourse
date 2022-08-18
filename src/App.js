import TodosPage from './pages/TodosPage';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [data,setData] = useState([]);
  useEffect( ()=>{
    const url = ('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    // const url = ('https://jsonplaceholder.typicode.com/users');
    fetch(url)
    .then(res => {
      return  res.json();
    })
    .then((data)=>{
      setData(data);
    })
  },[]);


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/newmeetups" element={<NewMeetupsPage />} /> 
        <Route path="/favorites" element={<FavoritesPage />} />            
        <Route path="/todos" element={<TodosPage data={data}/>} />
      </Routes>
    </Layout>
  );
}

export default App;

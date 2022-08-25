import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import React from 'react'
import MovieHome from './pages/MovieHome';
import InsertForm from './pages/InsertForm';
import UpdateForm from './pages/UpdateForm';
import MovieApi from './pages/MovieApi';
import DetailMovie from './pages/DetailMovie';
import InsertMovie from './admin/pages/InsertMovie';


function App() {
   
  return (
    <div className='App'>
      
        <Routes>
          <Route path="/"  element={<MovieHome/>} />
          <Route path="/movieapi"  element={<MovieApi/>} />
          <Route path="/movie/:id" element={<DetailMovie/>}/>
          <Route path="/insert" element={<InsertForm/>}/>
          <Route path="/insertMovie" element={<InsertMovie/>}/>
          <Route path="/update/:id" element={<UpdateForm/>}/>
        </Routes>
      
    </div>
  );
}

export default App;

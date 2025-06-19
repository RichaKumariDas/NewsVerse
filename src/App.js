// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  
    return (
      <div>
        <Router>        
        <NavBar/>
        <LoadingBar height ={3} color = '#f11946' progress = {progress} />
    
        <Routes>
          {/* <Route exact path="/"  element={<News pageSize={10} country="us" category="sports" />} /> */}
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="us" category="General" />} />
<Route path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="us" category="Business" />} />
<Route path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="us" category="Entertainment" />} />
<Route path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="us" category="General" />} />
<Route path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="us" category="Health" />} />
<Route path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="us" category="Science" />} />
<Route path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="us" category="Sports" />} />
<Route path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="us" category="Technology" />} />

        </Routes>
        </Router>
      </div>
    )
  }



export default App;

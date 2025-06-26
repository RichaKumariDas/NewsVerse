// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, {useState} from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // const apiKey = "pub_aac9f15eb1ac4b50bb13547309dc3ddf";


  const [progress, setProgress] = useState(0);

  
    return (
      <div>
        <Router>        
        <NavBar/>
        <LoadingBar height ={3} color = '#f11946' progress = {progress} />
    
        <Routes>
          {/* <Route exact path="/"  element={<News pageSize={10} country="us" category="sports" />} /> */}
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
<Route path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
<Route path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
<Route path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
<Route path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
<Route path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
<Route path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
<Route path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />

        </Routes>
        </Router>
      </div>
    )
  }



export default App;

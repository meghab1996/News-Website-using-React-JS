import logo from './logo.svg';
import './App.css';

import React, {  useEffect,useState  } from 'react'
import  NavBar  from './components/NavBar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const App = (props)=> {

  const [pageSize, setPageSize] = useState(15)
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API)
  const [progress, setProgress] = useState(0)
  
  
 
    return (
    <div>
      <Router>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      <Routes>
          <Route exact path="/"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="home" pageSize={pageSize} country={"in"} category={"general"} bgColor={"#54B4D3"}/>}/>
          <Route exact path="/general"  element = {<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={"in"} category={"general"} bgColor={"#E0854F"}/>}/>

          <Route exact path="/business" element = {<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country={"in"} category={"business"} bgColor={"#9FA6B2"}/>}/>

          <Route exact path="/entertainment" element = {<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"}/>}/>


          {/* <Route exact path="/general">  element = {<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={"in"} category={"general"}/></Route> */}
          <Route exact path="/health"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country={"in"} category={"health"}/>}/>

          <Route exact path="/science"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country={"in"} category={"technology"}/>}/>
          
        </Routes>
      </Router>
   </div>
    )
  
}
export default App;
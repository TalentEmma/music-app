
import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './login';


// const token = new URLSearchParams(window.location.search).get('access_token')
// const hash = window.location.hash
// const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            
// console.log(token);

function App() {

    
  const CLIENT_ID = "dd61fac0155843e5809773ebbf895380"
  const REDIRECT_URI = "http://localhost:3000/"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])


  useEffect(() => {
      const hash = window.location.hash
      const token = window.localStorage.getItem("token")

      // getToken()


      if (!token && hash) {
         const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          
          // console.log(token);
          
          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)


  }, [])


  return token ? <Dashboard token={token} /> : <Login />

}

export default App;

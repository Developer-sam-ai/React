
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  // ? WE CANT JUST MAKE A GLOBAL FILE AND IMPORT ALL IN IT AND UPDATE WHERE EVER WE WANT 
  // ? problem is all will overide easch other and it will be updated at places you dont want to update
  return (
    <UserContextProvider>
      <h1>hello I am sam </h1>
    </UserContextProvider>
  )
}

export default App

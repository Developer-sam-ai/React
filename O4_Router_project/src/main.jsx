import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Contact, Home, Url } from './components/index.js'
import Github, { githubloader } from './components/Github/Github.jsx'

//  ^  this is the 1st method by which you should route 

//* const router=createBrowserRouter([
//     {
//     path:'/',
//     element:<App/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },{
//       path:'About',
//       element:<About/>
//     },{
//       path:'contact',
//       element:<Contact/>
//     }]
//   }
// * ])

//* 2nd way of router 
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} ></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='About' element={<About/>}/>
      <Route path='/Url/:Urlid' element={<Url/>}/>
      <Route 
      // it is the new feature: if we want to fetch data form api or data base it provides us mechnism to direcly call it from here itself
      // use effect se bhi pehele data fetching faster  and all things are allowed api req fetch call
      loader={githubloader}
        // fetch("https://api.github.com/users/Developer-sam-ai")
        // .then(req=>req.json())
        // .then()
        // we do method calling instead

    

        
      path='Github' 
      element={<Github/>}/>
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)

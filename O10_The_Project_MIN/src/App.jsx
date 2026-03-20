
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Header,Footer,Home,Task,Expense,Songs } from "./Component";
import { Children, useContext } from "react";
import { PlayerContext, PlayerProvider } from "./Component/Songs/PlayerContext";
import Player from "./Component/Songs/Player";

//~ eslint-disable-next-line react-refresh/only-export-components
const Layout=()=>{
  const {currentSong}=useContext(PlayerContext)
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header/>
      <main className="flex-grow">
          <Outlet/>
      </main>
      <Footer/>
      <Player currentSong={currentSong}/>
    </div>
  );
};



const router=createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"Home",
      element:<Home/>
    },{
      path:"Tasks",
      element:<Task/>
    },{
      path:"Songs",
      element:<Songs/>
    },{
      path:"Expense",
      element:<Expense/>
    }
  ]
}
])

function App() {
  return(
    <PlayerProvider>
  <RouterProvider router={router} />
  </PlayerProvider>
      )
}

export default App;

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Header,Footer,Home,Task } from "./Component";
import { Children } from "react";

//~ eslint-disable-next-line react-refresh/only-export-components
const Layout=()=>{
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header/>
      <main className="flex-grow">
          <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};



const router=createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"Home",
      element:<Home/>
    },{
      path:"Tasks",
      element:<Task/>
    }
  ]
}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
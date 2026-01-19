import './App.css'
import {State_Renders,Clock,BucketList,RenderImg,Updating_Objects} from './Components'
function App() {

  return (
    <>
  <Updating_Objects/>
  <BucketList/>
  <hr/>
    <RenderImg/>
    <RenderImg/>
    <Clock/>
    <State_Renders/>
    </>
  )
}

export default App

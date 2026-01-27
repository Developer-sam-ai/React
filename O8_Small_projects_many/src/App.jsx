import './App.css'
import {State_Renders,RenderStateAfter,Change_State_realtime,Clock,BucketList,RenderImg,Updating_Objects} from './Components'
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
    {/* <Change_State_realtime/> */}
    <RenderStateAfter/>
    </>
  )
}

export default App

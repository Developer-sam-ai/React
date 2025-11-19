import Tailwind from "./tailwind";
import "./App.css";

function App(){
    let onbj={
        name:"sam",
        age:21
    };
    return(
        <>
        <Tailwind  type="hello" chennel={onbj} />
        <Tailwind/>
        </>
    )
}

export default App;

import { useLoaderData } from "react-router-dom";

function Github(){

    const data=useLoaderData()
    // const[data,setdata]=useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Developer-sam-ai")
    //     .then(Response =>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    return (
        <div className="text-center m-4 text-red-600 p-4 text-3xl">
            Github following :{data.following}
            <img src={data.avatar_url}
            alt='git picture' width={300}
            />
        </div>
    )
}

export default Github;

export const githubloader=async()=>{
    const response=await fetch('https://api.github.com/users/Developer-sam-ai');
    
    return response.json()
}
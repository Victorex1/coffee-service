import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PageNotFound = () => {
    return ( 
        <div className="my-15 p-10 px-14">
            <i class="fa-solid fa-face-sad-tear text-6xl text-gray-700 mb-4 "></i>
            <h2 className="text-xl text-gray-500">Sorry! page not found</h2>
            <h1 className="font-bold text-4xl my-4 text-gray-400 ">404 
                
            </h1>
            <Link to='/coffee-service/'>Click to Go back to home</Link>
        </div>
     );
}
 
export default PageNotFound;
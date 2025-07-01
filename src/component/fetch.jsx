import { useEffect,useState } from "react";
   
const useFetch = url => {
    const [data,usedata] = useState(null);
   const [load,useload] = useState(true);
   const [error,useerror] = useState(false);


   
   useEffect(() => {
     fetch(url)
     .then(res => {
        return res.json()
     }).then(dat => {
        useload(false)
        usedata(dat)
     }).catch(err => {
        useload(false)
        useerror(err)
        usedata('')


     })
   },[url])
    return { data , load, error};
}
 
export default useFetch;
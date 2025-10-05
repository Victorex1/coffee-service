import { useParams,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./fetch";
import { useState} from "react";

const BlogDetails = () => {
    const {data} = useFetch('https://gist.githubusercontent.com/Victorex1/5078969180986a9312487ea70dd6135d/raw/79d56238faf8e152c837127cbb9a4b4fbfbcfec5/coffee.json');
    
    const [Qnt,setQnt] = useState(1)
    const [gramm,setgramm] = useState("50G")
    const {id} = useParams()
    const history = useHistory()
     window.onload = function() {
    window.scrollTo(0, 0); // x=0, y=0 → scrolls to top-left
  };

    // changing the first gram of coffee
    const chang = e => {
        const five = document.querySelector('.five')
        setgramm(e.target.innerHTML)

         if(five.classList.contains('bg-gray-800')){
            
        five.classList.remove('bg-gray-800')
        five.classList.remove('text-white')
        five.classList.add('border')

        e.target.classList.add('bg-gray-800')
        e.target.classList.add('text-white')
        e.target.classList.remove('border')

        }
     }

      const index= id -1
    // changing the second gram of coffee

    const chang1 = e => {
        const two = document.querySelector('.two')
        setgramm(e.target.innerHTML)

        if(two.classList.contains('bg-gray-800')){
            
        two.classList.remove('bg-gray-800')
        two.classList.remove('text-white')
        two.classList.add('border')

        e.target.classList.add('bg-gray-800')
        e.target.classList.add('text-white')
        e.target.classList.remove('border')
        }
    }

const blogs = [];
   
   if(data){
    for(let i = 0; i < data[index].ingredients.length; i++){
      blogs.push(data[index].ingredients[i]) 
    }
   }

const benefits = [];
   
   if(data){
    for(let i = 0; i < data[index].benefits.length; i++){
      benefits.push(data[index].benefits[i]) 
    }
   }

//    add to cart
   let list = []

  const addCart = (ide,e) => {
  
    list.push(ide) 
    const qnt = document.querySelector('.qnt')
    list.push(Number(qnt.value))

   let stor1 = null 
     if(localStorage.getItem('items') == null){
      stor1 = []
     }else{
      stor1 = JSON.parse(localStorage.getItem('items'))
     }
     let exists = stor1.some(inner => inner[0] == ide)

     if(exists){
      const exist = document.querySelector('.exist')

      exist.innerHTML = 'item already in Cart'
      setTimeout(() => {
        exist.innerHTML = ''
      }, 4000);
     }else{
     stor1.push(list)
     localStorage.setItem('items', JSON.stringify(stor1))
     e.target.innerHTML = 'Added'
     list = []
     setTimeout(() => {
           history.push('/blog-list')
      
     }, 2000);
     }

      

      
     
  }

    return ( 
        <div className='w-screen pt-15 flex flex-wrap items-center justify-center'>
           <div className="  mt-20 my-5 px-4 w-full sm:w-[500px] lg:w-[900px] lg:h-[660px]  lg:flex">
            <div className="sm:my-0  my-3 lg:mx-4 sm:w-full lg:w-1/2 lg:my-0">
             {data &&  <img src={data[index].image} alt="item image" className=" w-full shadow-sm border border-gray-500 rounded-sm" />}
            </div>
            <div className="sm:flex sm:flex-wrap sm:justify-between sm:h-full sm:w-full lg:w-1/2">
             {data && <h1 className="text-4xl font-bold  sm:text-6xl uppercase">{data[index].name}</h1>}
              <div className="flex w-full justify-between mt-6 items-center"> 
                <p className="font-mono font-bold tracking-wide sm:text-2xl">SELECE A SIZE</p>
                <div>
                    <button className="sm:text-2xl cursor-pointer two p-1 rounded bg-gray-800 mx-1 text-white" onClick={e => chang(e)}>50G</button>
                    <button className="sm:text-2xl cursor-pointer five p-1 border rounded " onClick={e => chang1(e)}>100G</button>
                </div>
              </div>
              <div className="flex w-full justify-between my-2 items-center">
                <p className="font-mono font-bold tracking-wide sm:text-2xl">QUALITY</p>
                <input type="text" value={Qnt}  onChange={ e => setQnt(e.target.value)} className=" qnt w-6 sm:w-9 sm:text-2xl border p-1 rounded-sm"/>
              </div>
              <div className="description my-7">
                <h2 className="my-1 font-bold sm:text-2xl">INGRIDENT:</h2>
                {blogs && blogs.map(blog => (
                 <p className=" text-gray-600 text-sm sm:text-[16px]" key={blogs.indexOf(blog)}>
                {blog}
                 </p>
                ))}
                <hr className="mt-3"/>
                <h2 className="font-bold my-1 sm:text-2xl">BENEFIT:</h2>
                  <ol className="text-gray-600 text-sm sm:text-[16px]">
                    {benefits && benefits.map(benefit => (
                     <li key={benefit[index]}>{benefit}</li>
                    ))}
                  </ol>
              </div>
              <div className=" my-5 w-full lg:my-0">
                <div className="w-full items-center flex justify-between">
                 {data && <h2 className="font-sans text-xl font-bold sm:text-4xl">${data[index].amount}<span className="text-gray-500 text-sm mx-2 sm:text-2xl gram">/{gramm}</span></h2>}
                 <div>
                  <button className="rounded-sm bg-black text-white p-3 my-3 active:bg-gray-500 sm:text-2xl w-35 md:w-49" onClick={e => addCart(index,e)}>ADD TO CART</button>
              <p className=" exist text-red-600 my-2"></p>
                 </div>
                </div>
                <ul className="text-gray-500 text-xs my-4 sm:text-[16px]">
                    <li>Orders requested are available on mondays and thursdays.</li>
                    <li>Only the freshest bcoffee arrives to your door step.</li>
                </ul>
              </div>

            </div>
           </div>                       
        </div>
     );
}
 
export default BlogDetails;
import useFetch from './fetch'
import { Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BlogList = () => {
    const {data,load,error} = useFetch('https://gist.githubusercontent.com/Victorex1/5078969180986a9312487ea70dd6135d/raw/79d56238faf8e152c837127cbb9a4b4fbfbcfec5/coffee.json')
  
    const history = useHistory()
    const Login = id => {
    if(localStorage.getItem('fullName') === null){
       history.push('/Log-in')
    }else{
      history.push(`/blog-details/${id}`)
    }

   }

    window.onload = function() {
    window.scrollTo(0, 0); // x=0, y=0 → scrolls to top-left
  };
    const blogs = [];
   
   if(data){
    for(let i = 0; i < 6; i++){
      blogs.push(data[i]) 
    }
   }
  
    return ( 

        <div>
            <section className='mt-10'>
        {load && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
         {error && <p>{error}</p>}
         {data && 
           <div className=''>
            <img src={data[1].image} className='w-full h-60 relative sm:h-80 md:h-90 lg:h-110' alt=''/>
            <div className='absolute top-30 sm:top-40 lg:top-60 text-center mx-8/10 w-full'>
             <h2 className='text-5xl text-white font-bold sm:w-8/10 mx-auto sm-text-7xl font-sans'>Blogs</h2>
            <p className='text-white leading-5 px-5 sm:text-xl my-3 font-bold tracking-wide'>Fantastic view and a nice experience with the best coffee, in your door step</p>
            </div>
            
           </div>}
        </section>

        <section>
            <div className='w-full my-4 content-center sm:grid justify-center'>
                <h1 className='text-center text-2xl font-bold my-3 sm:grid-cols-1'>Your Choise</h1>
                <div className=' roll-container overflow-hidden sm:w-[800px]'>
                <div className='blog_roll cursor-not-allowed w-[1550px]  flex justify-start items-center '>
                   
                  {blogs.map(blog => (
                       <div className='w-50 h-110 flex basis-[250px] bg-[#d7d6d4] m-1 flex-wrap  justify-center border border-gray-500' key={blog.id}>
                      {data && <img src={blog.image} className='w-100 h-3/5' />} 
                      <div className='flex flex-wrap items-center justify-center py-2'>
                        <h2 className='text-2xl font-bold'>{blog.name}</h2>
                        <p className='text-[11px] text-gray-600 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                        </div> 
                    </div>
                  ))}   

                    </div>
                </div>
                </div>
        </section>
        <section className='w-full flex justify-center items-center '>
            <div className='bg-amber-950 my-5 sm:w-[800px] sm:flex sm:h-[400px]'>
                <div className='text-white p-9 text-sm'>
                    <h2 className='text-4xl my-4 sm:text-5xl'>Morning Happy Hours</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt debitis nam atque odio magni perspiciatis maiores ratione voluptatum, eveniet voluptas reiciendis beatae cum veritatis nemo illo in asperiores hic!</p>
                    <button className='cursor-pointer text-amber-950 bg-white my-5 px-6 py-2 rounded-3xl active:bg-amber-200 font-extrabold'>Coffiinfo</button>
                </div>
              {data &&  <img src={data[4].image} alt="coffee image" className='h-[400px] w-full' />}
            </div>
        </section>
        <section className='w-full flex justify-center items-center my-5'>
            {load && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
         {error && <p>{error}</p>}
            <div className='sm:grid sm:grid-cols-3'>
                {data && data.map( dat => (
                 <div className='h-[300px] w-[200px] m-3 rounded-3xl overflow-hidden relative border border-gray-500' key={dat.id}>
                 {data && <img src={dat.image} alt="" className='w-full h-full'/>}
                  <div className='absolute top-5 left-5 z-1 flex items-center justify-around rounded-xl bg-gray-300 p-3 w-30'>
                    <i className="fa-solid fa-thumbs-up text-xl"></i>
                    <p className='text-xl '>40</p>
                  </div>
                  <div className='absolute bottom-0  backdrop-blur-lg py-4 w-full text-center'>
                    <h2 className='text-white text-2xl my-2'>
                        {dat.name}
                    </h2>
                    <Link className='bg-gray-300 p-2 px-3 rounded-md w-30 my-1 self-end text-sm font-bold active:bg-gray-400 cursor-pointer' onClick={() => Login(dat.id)} >
                        BY NOW
                    </Link>
                  </div>
                  </div>
                 ))}
            </div>
        </section>
        </div>
     );
}
 
export default BlogList;
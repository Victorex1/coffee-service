
import { Link } from "react-router-dom";
import useFetch from './fetch'
import tea1 from '../img/latte-art2.jpg'
import tea3 from '../img/latte-art3.jpg'
import tea4 from '../img/latte-art4.jpg'
import tea6 from '../img/latte-art6.jpg'
import tea7 from '../img/latte-art7.jpg'
import tea8 from '../img/latte-art8.jpg'

import Blog from "./blog";

const Home = () => {  

  const {data,load,error} = useFetch('https://gist.githubusercontent.com/Victorex1/5078969180986a9312487ea70dd6135d/raw/79d56238faf8e152c837127cbb9a4b4fbfbcfec5/coffee.json');
window.onload = function() {
    window.scrollTo(0, 0); // x=0, y=0 → scrolls to top-left
  };
  

    return (
        <div className="mt-1 w-screen">
            <section>
        {load && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
         {error && <p>{error}</p>}
         {data && 
         <div>
         <img src={data[12].image} className='w-full h-75 relative sm:h-90 md:h-110 lg:h-140' alt=''/>
           <div className='absolute top-25 sm:top-35 mx-9 sm:left-5 lg:left-7 lg:top-40'>
             <h2 className="font-[Tangerine] text-6xl font-bold text-[#d7d6d4] sm:text-8xl lg:text-9xl">Best Coffee</h2>
            <p className="text-xs my-2 sm:my-4 text-[#d7d6d4] sm:text-[20px] sm:leading-6 md:mb-10 md:w-130 lg:w-200">it is best to start your day with a cup of coffee.Discover the best flavours coffee you will ever have.We provide the best for our customers.</p>
            <Link to='/blog-list' className= " text-white text-[10px] bg-[#736447] active:bg-[#96835e] px-3 py-2 md:px-4 md:py-3 lg:py-3 lg:px-5 rounded-3xl  hover:bg-[#a6936c] sm:text-[15px] md:text-[17px] lg:text-[20px]">Explor Menue</Link>
            </div>
            </div>}
            </section>
            <div className='p-5'>
            <section className="my-4 content-center text-center" >
                <h2 className="font-[Antic] text-xl sm:text-2xl md:text-3xl ">OUR DELIVERY OFFER</h2>
                <div className="flex flex-col max-w-250 sm:mx-auto sm:flex-row justify-around gap-3 items-center my-6">
                    <div className="p-4 flex flex-col justify-around gap-4 rounded-2xl bg-[#d7d6d4] w-40 h-30 md:h-34">
                        <i className="fa-solid fa-wheat-awn text-3xl md:text-4xl text-[#736447]"></i>
                        <p className="text-[#a6936c] text-xs md:text-[17px] font-bold">BEAN VARIETIES</p>
                    </div>
                    <div className="p-4 flex flex-col justify-around gap-4 rounded-2xl bg-[#d7d6d4] w-40 h-30 md:h-34">
                        <i className="fa-solid fa-mug-hot text-3xl md:text-4xl text-[#736447]"></i>
                        <p className="text-[#a6936c] text-xs md:text-[17px] font-bold">TYPE OF COFFEE</p>
                    </div>
                    <div className="p-4 flex flex-col justify-around gap-4 rounded-2xl bg-[#d7d6d4] w-40 h-30 md:h-34">
                       <i className="bi bi-cup-straw text-3xl md:text-4xl text-[#736447]"></i>
                        <p className="text-[#a6936c] text-xs md:text-[17px] font-bold">COFFEE TO GO</p>
                    </div>
                    <div className="p-4 flex flex-col justify-around gap-4 rounded-2xl bg-[#d7d6d4] w-40 h-30 md:h-34">
                      <i className="fa-solid fa-utensils text-3xl md:text-4xl text-[#736447] "></i>
                        <p className="text-[#a6936c] text-xs md:text-[17px] font-bold">COFFEE $ PASTERY</p>
                    </div>
                </div>
            </section>
            <section>
                 {load && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
            {error && <p>{error}</p>}
            {data && <div className='relative h-40 sm:h-70 sm:max-w-170 sm:mx-auto'>
                <img src={data[9].image} className='w-full opacity-90 h-full rounded-2xl' alt=''/>
                <div className='absolute left-6 top-14 sm:top-40'>
                    <p className='text-orange-100 leading-5 sm:text-[26px] sm:leading-8'>Our Coffee bar uses only Ethiopian coffee,All commercially produced coffee Originate form Ethiopia.</p>
                    <Link to='/coffee-service/'  className=' underline underline-offset-1 text-orange-100 text-xs my-3 sm:my-5 sm:text-[20px]'>about us</Link>

                </div>
                </div>}
            </section>
           <section className="w-full mt-10 rounded-2xl text-center content-center">
            <h2 className="font-[Antic] text-2xl sm:text-3xl">Coffee House</h2>
             <div className="mt-3 p-2 text-left flex flex-col sm:flex-row flex-wrap sm:justify-around
                              item-center content-center gap-3 sm:max-w-170 mx-auto"> 
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                    <img src={tea8} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />
                    <div>
                        <h3 className="text-nav md:text-[17px]"> Cappuccion</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">Coffee 50%, milk 50%, 280ml</p>
                        <div className="px-2 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$3.20</div>
                    </div>
                </div>
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                 <img src={tea3} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />

                    <div>
                        <h3 className="text-nav md:text-[17px]"> Flat white</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">100% natural Arabical</p>
                        <div className="px-2 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$4.00</div>
                    </div>
                </div>
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                    <img src={tea4} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />

                    <div>
                        <h3 className="text-nav md:text-[17px]"> Moccaccino</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">Coffee 20%, milk 60%</p>
                        <div className="px-2 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$5.00</div>
                    </div>
                </div>
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                 <img src={tea1} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />

                    <div>
                        <h3 className="text-nav md:text-[17px]">Latte</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">Coffee 30%, milk 50%</p>
                        <div className="px-2 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$4.30</div>
                    </div>
                </div>
               
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                    <img src={tea6} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />
                    <div>
                        <h3 className="text-nav md:text-[17px]"> Double Expricco</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">Coffee 50%, milk 50%, 280ml</p>
                        <div className="px-3 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$4.50</div>
                    </div>
                </div>
                <div className="flex gap-4 bg-[#d7d6d4] rounded-2xl p-3 w-75 ">
                  <img src={tea7} className="p-1 w-20 h-20 border-4 border-[#736447] border-dashed rounded-full" alt="" />

                    <div>
                        <h3 className="text-nav md:text-[17px]"> Americano</h3>
                        <p className="text-xs md:text-[17px] text-[#a38d68] my-2">100% natural arabica</p> 
                        <div className="px-2 py-1 rounded-2xl text-white bg-[#736447] w-20 text-center my-2 text-xs cursor-pointer">$3.20</div>
                    </div>
                </div>
             </div>

           </section>
           <section className='flex flex-col items-center mt-5'>
            <h3 className='text-2xl text-[#736447] sm:text-3xl'>Our Blogs</h3>
            {load && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
            {error && <p>{error}</p>}
           {data && < Blog  data={data}/>}
         <Link to='/blog-list' className=' my-4 underline underline-offset-1 cursor-pointer text-brown-100'>See more</Link>

           </section>
           </div>
        </div>
      );
}
 
export default Home;
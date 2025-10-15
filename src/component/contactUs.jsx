import useFetch from './fetch'
import woman3 from '../img/woman-coffee3.jpg'
import coffeeB from '../img/coffeeB.jpg'

const Contact = () => {
  const {data,load,error} = useFetch('https://gist.githubusercontent.com/Victorex1/5078969180986a9312487ea70dd6135d/raw/79d56238faf8e152c837127cbb9a4b4fbfbcfec5/coffee.json');
    
window.onload = function() {
    window.scrollTo(0, 0); // x=0, y=0 → scrolls to top-left
  };

  console.log(data)
    return ( 
        <div className='mt-13 w-screen bg-gray-200'>
           
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
           <div className=''>
            <img src={data[5].image} className='w-full h-70 relative sm:h-90 md:h-120 lg:h-150' alt=''/>
            <div className='absolute top-30 sm:top-40 lg:top-60 text-center mx-8/10 w-full'>
             <h2 className='text-5xl text-white font-bold sm:w-8/10 mx-auto sm-text-7xl md:text-8xl '>Let's talk</h2>
            <p className='text-white leading-10 px-5 sm:text-3xl my-3'>We will love to know your want, For we serve the best for our customers</p>
            </div>
            
           </div>}
        </section>

        <div className='p-4 px-6  flex justify-center w-screen'>
            <div className='text-center sm:flex justify-between w-full md:w-200'>
                <div className='flex flex-col items-center my-4'>
                    <div className=' rounded-2xl  p-3 bg-[#bd913f] w-15 h-15 flex justify-center items-center text-[#e0d4bd] '>
                       <i className=" text-xl fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                        <h3 className='font-bold'>LOCATION</h3>
                        <p className='text-xs'>8483 Joind ST.BroodLYN</p>
                        <p className='text-xs'>LAGOS</p>
                    </div>
                
                </div>
                <div className='flex flex-col items-center my-4'>
                   <div className=' rounded-2xl  p-3 bg-[#bd913f] w-15 h-15 flex justify-center items-center text-[#e0d4bd]'>
                        <i className=" text-xl fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <h3 className='font-bold'>PHONE</h3>
                        <p className='text-xs'>07014045622</p>
                        <p className='text-xs'>LAGOS</p>
                    </div>
                    
               </div>
               <div className='flex flex-col items-center my-4'>
                    <div className=' rounded-2xl  p-3 bg-[#bd913f] w-15 h-15 flex justify-center items-center text-[#e0d4bd]'>
                           <i className=" text-xl fa-solid fa-envelope"></i>
                    </div>
                    <div>
                        <h3 className='font-bold'>EMAIL</h3>
                        <p className='text-xs'>ekenebasil21@gmail.com</p>
                        <p className='text-xs'>LAGOS</p>
                    </div>
                </div>
            </div>
       
       
        </div>

    <section className='w-full p-4 px-6 flex justify-center flex-col items-center my-8 sm:my-20 md:my-30 mt-15'>
       <div className='relative w-full h-auto sm:flex sm:max-w-3xl justify-around items-center mx-auto'>
         <img src={coffeeB} className='rounded-2xl md:rounded-3xl w-full h-70 sm:h-45 opacity-80' alt="" />
          <div className='md:flex'>
           <img src={woman3} className='rounded-xl absolute -top-20 left-8 w-8/10 sm:w-1/3 mx-auto h-50 sm:h-85' alt="" />
           <div className=' absolute bottom-10 text-white md:text-lg w-p mx-4 sm:w-90 md:w-95 sm:left-65 md:left-75'>
            <p className='w-full sm:w-auto sm:left-20'>We love to here from you for your chioce is always the best,Have a nice coffee to keep your day going.</p>
          </div>
         </div>
       </div>
    </section >

<div className='w-full p-4 px-6 lg:px-auto flex justify-center items-center '>
    <div className='p-4 flex w-full md:w-230 flex-col  items-center gap-3 border border-gray-400 rounded-2xl mx-auto'>
 <section className=' flex justify-center w-9/10  flex-col items-center ' >
            <h3 className='text-2xl text-gray-700 font-bold sm:text-3xl'>We love to konw your choise</h3>
            <form className='flex w-full flex-col my-7 text-left' action="https://formsubmit.co/ekenebasil21@gmail.com" method='POST'>
                
                <div className='grid sm:grid-cols-2 gap-4'>
                    <div className='w-auto'>
                 <label for='name1' className='mt-4 sm:text-lg'> Full Name:</label>
                <input type='text' className='w-full text-xs sm:text-lg bg-transparent border rounded-md p-2 text-gray-600 outline-none my-3 focus:border-2' name='name' id='name1'/>
                </div>
                <div className=''>
                <label for='email2' className='mt-4 sm:text-lg'> Email:</label>
                <input type='email' name='email' className='text-xs sm:text-lg w-full bg-transparent border rounded-md p-2 text-gray-600 outline-none my-2 focus:border-2' id='email2' />
                </div>
               
                <div>
                 <label for='phone' className='mt-4 sm:text-lg'> Phone:</label>
                <input type='number' name='phone' className='text-xs sm:text-lg w-full bg-transparent border rounded-md p-2 text-gray-600 outline-none my-2 focus:border-2' id='phone' />
                </div>
                <input type="hidden" name="_cc" value="another@email.com"/>
                <input type="hidden" name="_next" value="https://victorex1.github.io/thanksPage/html.html"></input>

               
                <div>
                 <label for='selet' className='mt-4 sm:text-lg'>Your choise:</label>
                <select name='Selected' id='selet' className=' text-xs w-full sm:text-lg bg-transparent border rounded-md p-2 text-gray-600 outline-none my-2 focus:border-2'>
                    <option value='Choose your choise'>Select your choise</option>
                    <option value='Cappuccion'>Cappuccion</option>
                    <option value='Moccaccino'>Moccaccino</option>
                    <option value='Flat white'>Flat white</option>
                    <option value='Latte'>Latte</option>
                    <option value='Double Expricco'>Double Expricco</option>
                    <option value='Americano'>Americano</option>
                </select>
                </div>
               
                </div>
               
                <label for='describe' className='mt-4 sm:text-lg'> Discription:</label>
                <textarea placeholder='Description' name='discription' className='text-xs w-full sm:text-lg bg-transparent border-1 rounded-md p-2 text-gray-600 outline-none my-2 min-h-40 focus:border-2' id='descirbe'/>
                <input type="hidden" name="_captcha" value="false"></input>
                
                <button title='submit form' className=' w-full md:w-100 mx-auto my-4 hover:bg-[#787060] cursor-pointer bg-[#736447] text-white py-3 rounded-md sm:py-4 sm:text-xl md:text-2xl'>Submit</button>
            </form>
        </section>
    </div>

   
</div>
<div className='py-4 flex justify-center w-screen overflow-hidden'>
<div className=' items-center w-full md:w-300'>

            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15864.540680313658!2d7.1095942235239!3d6.245912083033176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNnamdi%20Azikiwe%20University!5e0!3m2!1sen!2sng!4v1748526919838!5m2!1sen!2sng" 
          style={{
           width:"100%",
           maxWidth:"500",
            height:"320px",
            border:"0",
            allowfullscreen:"",
            loading:"lazy",
           referrerpolicy:"no-referrer-when-downgrade"}
          }  ></iframe>
          </div> 
</div>
       
         
        
        <section className='w-full sm:w-2xl lg:w-3xl sm:mx-auto text-center p-4 py-5 bg-orange-900 flex flex-col sm:flex-row justify-center items-center relative sm:top-12 sm:rounded-t-2xl'>
            <form className='flex rounded-md overflow-hidden w-9/10 max-w-250' action="https://formsubmit.co/ekenebasil21@gmail.com" method='POST'>
                <input type="email" placeholder='Email...' name='Subscription-email'  className='bg-white w-full p-2 sm:p-3' required/>
                <input type="hidden" name="_captcha" value="false"></input>
                <button title='subscribe' className='cursor-pointer flex justify-center items-center text-white p-2 bg-blue-900 w-[80px]'><i className="fa-regular fa-paper-plane"></i></button>
            </form>
            <p className='my-3 text-white text-sm sm:text-md'> Subscribe to get the latest updata of the latest coffee at the confort of your home</p>
        </section>
        </div>
     );
}
 
export default Contact; 
// import { Link } from 'react-router-dom';
import back from '../img/latte-art2.jpg'

const Cart = () => {


    const scale = e => {
        const cartDetails = document.querySelector('.cart')
     const warn = e.target.parentElement.parentElement.parentElement;
     warn.style.animation = 'scalE 0.2s ease-in forwards'
     cartDetails.classList.remove('opacity-20')
     cartDetails.classList.remove('pointer-events-none')

    }

    const confirm = e => {
        const cartDetails = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        const popup = document.querySelector('.index')

     cartDetails.classList.add('opacity-20')
     cartDetails.classList.add('pointer-events-none')

      popup.style.animation = 'scal 0.2s ease-out forwards'
    }


    const check = e => {
       console.log(e.target.innerHTML)
       e.target.innerHTML = 'Checking...'
       setTimeout(() => {
       e.target.innerHTML = 'Details Confirmed'
        
       }, 3000);


    }

  const pinEntry = e => {

    e.target.addEventListener('input', () => {
     const pin = document.querySelector('.pin')

      if(pin.children[0].value !== '' && pin.children[1].value !== '' && pin.children[2].value !== '' && pin.children[3].value !== ''){
    
        for( let i = 0; i < 4; i++){
           pin.children[i].style.border = '2px solid green'
           console.log(pin.children[i])

         }
      }
    })
  }
 
    return ( 

        <div className=' w-screen p-4 mt-14 flex flex-col justify-center items-center'>
            <div className='cart w-full sm:w-100 md:grid grid-cols-3 gap-5 mt-10 md:w-185'>
                <div className='col-span-2 h-full md:flex flex-col justify-between md:h-150'>
                  <div className=''>
                    <h3 className='text-2xl font-bold'>Shopping Cart</h3>
                    <div className='overflow-x-auto my-2 mt-10 '>
                      <div className='flex justify-between mb-3 '>
                        <p>Products</p>
                        <p>Rating</p>
                        <p>Quantity</p>
                        <p>TotalPrice</p>
                      </div>
                      <hr className='text-gray-400' />
                    </div>
                     <div className=' flex justify-between items-center my-2'>
                        <div className='flex items-start w-[70px]'>
                            <img src={back} className='w-10 h-10 mr-2 rounded-lg' alt="" />
                            <p className='text-sm my-2'>Art2</p>
                        </div>
                        <p className='text-sm w-[50px]'>$200</p>
                        <input type="number"  className='w-[40px] outline-none border w-10 rounded-md p-1 text-sm text-center' />
                        <div className='flex items-center justify-between w-[70px]'>
                       <p className=' text-sm'>$200</p>
                       <i className="fa-solid fa-xmark text-xl text-gray-500"></i>
                        </div>
                        
                     </div>
                  </div>

                  <div className='flex justify-between items-end mt-12 '>
                    <div className='flex items-center'>
                        <i className="fa-solid fa-less-than mr-2 text-gray-400"></i>
                        <div className='font-bold cursor-pointer p-1' onClick={e => confirm(e)}>
                    <p>Continue Shopping</p>
                        </div>

                    </div>
                    <div className=''>
                        <div className='flex gap-5 justify-between'>
                            <p className='font-bold text-gray-400'>Subtotal:</p>
                            <p className='font-bold'>$200</p>
                        </div>
                         <div className='flex gap-5 my-3'>
                            <p className='font-bold text-gray-400'>Shipping:</p>
                            <p className='font-bold'>Free</p>
                        </div>
                         <div className='flex gap-5 justify-between'>
                            <p className='font-bold text-xl'>Total:</p>
                            <p className='font-bold text-xl'>$200</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='p-7 bg-gray-300 my-9 rounded-lg '>
                  <h3 className='text-2xl font-bold'>Payment info</h3>
                  <div className='my-10'>
                    <p className='text-gray-500'>payment method</p>
                    <div className=' my-2 flex gap-4'>
                        <input type="radio" name='card'/>
                        <i className="fa-solid fa-credit-card"></i>
                        <p>Credit Card</p>
                    </div>
                    <div  className='gap-3 my-2 flex'>
                        <input type="radio" name='card'/>
                        <i className="fa-brands fa-paypal"></i>
                        <p>PayPal</p>
                    </div>
                  </div>
                  <div className='my-10'>
                    <p className='text-gray-500'>Name on Card</p>
                   <input type="text" className='w-full border-0 border-b-1 p-2 outline-none'  placeholder='John peter...'/>
                  </div>
                  <div className='my-7'>
                    <p className='text-gray-500'>Card Number</p>
                    <input type="number" className='w-full border-0 border-b-1 p-2 font-bold outline-none tracking-[7px]' placeholder='...   ...   ...   123'/>
                   
                  </div>
                  <div className='w-40'>
                    <div className='flex justify-between'>
                    <p className='text-gray-500'>Expiring Date:</p>
                    <p className='text-gray-500'>CVV</p>
                    </div>
                    <div className='flex gap-3 my-3'>
                        <select  id="">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select  id="">
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            
                        </select>
                        
                        <input type="number" className='w-14 h-9 outline-none border-1 border-gray-400 p-2' />
                    </div>
                  </div>
                  <div className='my-2 mt-9 '>
                  <button onClick={e => check(e)} className=' border-0 outline-none bg-blue-500 hover:bg-blue-400 rounded-md flex justify-center items-center text-white text-lg font-bold py-3 px-5 w-full'>Change Details</button>
                  </div>
                 
                </div>
            </div>
           
  <div  className=' index  absolute top-2/10 w-65 bg-gray-400 p-3 px-5  rounded-lg flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                    <div></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-triangle-fill w-10 h-10 text-yellow-400 ml-6" viewBox="0 0 16 16">
                     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <div className='cursor-pointer' title='cansele' onClick={e => scale(e)}>
                       <i className="fa-solid fa-xmark text-2xl text-gray-500 cursor-pointer" ></i>

                  </div>
                  
                </div>
                
                <h3 className='text-lg font-bold '>Confirm payment</h3>
               
                <div className='w-full'>
                    <div className='flex justify-between my-2'>
                        <p className='text-sm'>ITEMS</p>
                        <p className='text-sm'>Arts</p>
                    </div>
                     <div className='flex justify-between my-2'>
                        <p className='text-sm'>SIZE</p>
                        <p className='text-sm'>12</p>
                    </div>
                     <div className='flex justify-between my-2'>
                        <p className='text-sm'>QUANTITY</p>
                        <p className='text-sm'>1</p>
                    </div>
                     <div className='flex justify-between my-2'>
                        <p className='font-bold '>TOTAL</p>
                        <p className='font-bold'>$200</p>
                    </div>
                </div >
                <div className='pin my-3 flex justify-between items-center w-full gap-2'>
                    <input onClick={e => pinEntry(e)} type="number" className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                    <input  onClick={e => pinEntry(e)} type="number" className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                    <input  onClick={e => pinEntry(e)} type="number" className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                    <input  onClick={e => pinEntry(e)} type="number" className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                </div>
            
            
  </div>
        </div>
     );
}
 
export default Cart;
import {useHistory} from 'react-router-dom'
import { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState,useEffect } from 'react';
import useFetch from './fetch';


const Cart = () => {


  let totalMoney = 0
   const {data} = useFetch('https://gist.githubusercontent.com/Victorex1/5078969180986a9312487ea70dd6135d/raw/79d56238faf8e152c837127cbb9a4b4fbfbcfec5/coffee.json')
  const history = useHistory();
  const value = useRef(null);
  const value1= useRef(null);
  const value2= useRef(null);
  const value3= useRef(null);

  window.addEventListener('load', () => {
    localStorage.removeItem('items')
    window.scrollTo(0, 0);

  }) 
   
useEffect(() => {
  if(localStorage.getItem('items') == null){
    const empty = document.querySelector('.itembox')
    
    if(empty.children.length == 0){
      //  nothing
      let h2 =document.createElement('h2')
    h2.style.color = 'gray'
    h2.style.fontStyle = 'bold'
    h2.style.width = '150px'
    h2.style.margin = '5px auto'
    h2.innerHTML = 'No item added'
    empty.appendChild(h2)
    }
    }
},[])
  const [details,setdetails]= useState()
  let money = 0;


  let itemsLIsts = []
 const localIn = JSON.parse(localStorage.getItem('items'))

 if(data && (localIn != null)){
for(let a = 0; a < localIn.length; a++){
  let itemsLIst = []

  for(let i = 0; i < data.length; i++){
    if(localIn[a][0] == (data[i].id -1)){
      itemsLIst.push(data[i])
      itemsLIst.push(localIn[a][1])
      itemsLIsts.push(itemsLIst)

    }
  }}
  for(let e =0; e < localIn.length;e++){
    money +=( itemsLIsts[e][0].amount *itemsLIsts[e][1]);
  }
     
      totalMoney = money.toFixed(2)
 }

    const close = e => {
        const cartDetails = document.querySelector('.cart')
     const warn = e.target.parentElement.parentElement.parentElement;
     warn.style.animation = 'scalE 0.2s ease-in forwards'
     cartDetails.classList.remove('opacity-20')
     cartDetails.classList.remove('pointer-events-none')

       const pin = document.querySelector('.pin')
       const home = cartDetails.parentElement.parentElement.parentElement;
       home.classList.remove('h-screen')
        home.classList.remove('overflow-hidden')
      pin.children[0].value = ''
      pin.children[1].value = ''
      pin.children[2].value = ''
      pin.children[3].value = ''
    }
   
  const confirm = e => {
       const qty = document.querySelector('.Qty')
       const accButton = document.querySelector('.acc-but')
       const warning = document.querySelector('.warning')
       const itembox = document.querySelector('.itembox')
   
    if(qty.value === ''){
        warning.innerHTML = 'Input the quantity of products purchase'
        warning.classList.add('visible')
        warning.classList.remove('invisible')
    }else if(itembox.children.length < 1){
        warning.innerHTML = 'No product has been selected'
       warning.classList.add('visible')
        warning.classList.remove('invisible')
    }else if(accButton.innerHTML !== 'Details confirmed'){

       warning.innerHTML = 'Confirm your bank details'
       warning.classList.add('visible')
        warning.classList.remove('invisible')
    }else{

        const cartDetails = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        const popup = document.querySelector('.index')

        cartDetails.classList.add('opacity-20')
        cartDetails.parentElement.parentElement.parentElement.classList.add('h-screen')
        cartDetails.parentElement.parentElement.parentElement.classList.add('overflow-hidden')
        cartDetails.classList.add('pointer-events-none')
        popup.style.animation = 'scal 0.2s ease-out forwards';
        value.current.focus()

        const pin = document.querySelector('.pin')
        pin.children[0].addEventListener('input', () => {
        if(pin.children[0].value !== ''){
          value.current.blur()
          setTimeout(() => {
          pin.children[0].type = 'password'
          value1.current.focus()
            
          }, 500);

          pin.children[1].addEventListener('input', () => {
            if(pin.children[1].value !== ''){
             value1.current.blur()
              setTimeout(() => {
          pin.children[1].type = 'password'
          value2.current.focus()
            
          }, 500);

             pin.children[2].addEventListener('input', () => {


         if(pin.children[2].value !== ''){
                value2.current.blur()
                 setTimeout(() => {
          pin.children[2].type = 'password'
          value3.current.focus()
            
          }, 500);

                pin.children[3].addEventListener('input', () => {
                   setTimeout(() => {
          pin.children[3].type = 'password'
            
          }, 500);

                pinEntry()
                  const day = new Date().getDate()
                const month = new Date().getMonth() +1;
                const year = new Date().getFullYear();
                const hour= new Date().getHours();
                const minutes= new Date().getMinutes();


                const date =`${month}/${day}/${year}`;

                if(localStorage.getItem('details') !== null){

                  if(hour > 12){
                    if(minutes < 10){
               const time = `${hour - 12}:0${minutes} PM`;
                details1(date,time,itembox)
                    }else{
                       const time = `${hour}:${minutes} PM`;
                details1(date,time,itembox)
                    }
               

                  }else{
                       if(minutes < 10){
               const time = `${hour}:0${minutes} AM`;
                details1(date,time,itembox)
                    }else{
                       const time = `${hour}:${minutes} AM`;
                details1(date,time,itembox)
                    }
                  }

                
                }else{
                  if(hour > 12){
                const time = `${hour}:${minutes} PM`;
                details2(date,time,itembox)

                  }else{
                       const time = `${hour}:${minutes} AM`;
                       details2(date,time,itembox)
                  }
                }
             
                 })


               }


              })
            } 
           })
        }
    
       })

    }

    setTimeout(() => {
      warning.innerHTML = ''
        warning.classList.remove('visible')
        warning.classList.add('invisible')

    }, 3000);


  }


 const details1 = (date,time,itembox) => {
                 
                const one1 = []
                    const one = [];
                    let arry = {}
                    let invoice  = Math.floor(Math.random() * 10000)

                    const date2 = {  
                   time:time,
                   date : date,
                   invoice:invoice

                    }
                    one1.push(date2)

                   for(let a = 0; a< itembox.children.length ;a++){
                 let random = Math.floor( Math.random() * 100);


                   if(one.length > 0){
                      for(let i= 0; i< one.length ;i++){
                        if(one[i].id === random){
                      random = Math.floor( Math.random() * 100);

                        }
                      }
                   }
                   arry = {
                   id:random,
                   itemName : itembox.children[a].children[0].children[1].innerHTML,
                   Qty : itembox.children[a].children[2].innerHTML,
                   price :itembox.children[a].children[3].children[0].innerHTML,
                    }
                   
                    one.push(arry)

                   }
                   one1.push(one)
                    

                  setdetails(one1)
          }


    const details2 = (date,time,itembox) => {
             
               
                const one = []
                const one1 = []
                let invoice  = Math.floor(Math.random() * 10000)


                const date2 = {  
                   time:time,
                   date : date,
                   invoice:invoice

                    }
                    one1.push(date2)

                   for(let a = 0; a< itembox.children.length ;a++){
                 let random = Math.floor( Math.random() * 100);

                 if(one.length > 0){
                      for(let i= 0; i< one.length ;i++){
                        if(one[i].id === random){
                      random = Math.floor( Math.random() * 100);

                        }
                      }
                   }
                   const arry = {
                   id:random,
                   itemName : itembox.children[a].children[0].children[1].innerHTML,
                   Qty : itembox.children[a].children[2].innerHTML,
                   price :itembox.children[a].children[3].children[0].innerHTML,
                    }
                  
                    one.push(arry)

                   }
                   one1.push(one)
                    
                  setdetails(one1)


          }

  const check = e => {
        const cardName = document.querySelector('.card-name')
        const error = document.querySelector('.error')
        const cardnumber = document.querySelector('.card-number')
        const cvv = document.querySelector('.cvv')

       e.target.innerHTML = 'Checking...'
       if(error.classList.contains('p-2')){
        const error = document.querySelector('.error')
        const count = error.children.length
       error.classList.remove('p-2')
        error.classList.remove('border')
      for(let a  = 0; a < count; a++){

         error.children[0].remove()
      }
        
        
       }
    setTimeout(() => {
     
    if(cardName.value === ''){
      error.classList.add('p-2')
        error.classList.add('border')
        let p = document.createElement('p')

          p.innerHTML = 'card name invalid'
          error.appendChild(p)
          e.target.innerHTML = 'Check details'
    };
    if(cardnumber.value.length !== 16){
      error.classList.add('p-2')
        error.classList.add('border')
        let p = document.createElement('p')

         p.innerHTML = 'card number invalid';

          error.appendChild(p)
          e.target.innerHTML = 'Check details';

    };
    if(cvv.value.length < 3 || cvv.value.length > 3){
      error.classList.add('p-2')
        error.classList.add('border')
        let p = document.createElement('p')

         p.innerHTML = 'cvv invalid';
          error.appendChild(p)
       e.target.innerHTML = 'Check details'

    }
    if( (cvv.value.length=== 3) && cardnumber.value.length === 16 && cardName.value !== ''){
       e.target.innerHTML = 'Details confirmed';
       error.classList.remove('p-2')
        error.classList.remove('border')

    }
    }, 3000);


        }

  const pinEntry = () => {
  
     const pin = document.querySelector('.pin')
    if(pin.children[0].value !== '' && pin.children[1].value !== '' && pin.children[2].value !== '' && pin.children[3].value !== ''){
    
        for( let i = 0; i < 4; i++){
           pin.children[i].style.border = '2px solid green'
          pin.children[i].type = 'password'
         }
         setTimeout(() => {  const cartDetails = document.querySelector('.cart')
       const home = cartDetails.parentElement.parentElement.parentElement;

     pin.style.animation = 'scalE 0.2s ease-in forwards'
     cartDetails.classList.remove('opacity-20')
     cartDetails.classList.remove('pointer-events-none')
        home.classList.remove('h-screen')
        home.classList.remove('overflow-hidden')
           history.push('/history')
          //  setting delete key here
          localStorage.removeItem('items')
         }, 2000);
      }
        }

        const store = (details) => {
     let stor1 = null 
     if(localStorage.getItem('details') == null){
      stor1 = []
     }else{
      stor1 = JSON.parse(localStorage.getItem('details'))
     }
     stor1.push(details)
     localStorage.setItem('details', JSON.stringify(stor1))
       }
  useEffect(()=> {
    if(details !== undefined){
  store(details)
}
    
  },[details])

 

  const removeItem =e => {

    let item = e.target.parentElement.parentElement.parentElement;
   let container = document.querySelector(".itembox").children;
       let index = Array.from(container).indexOf(item);
   (item).remove()

       let stor = JSON.parse(localStorage.getItem('items'))
       stor.splice(index,1)
       localStorage.setItem('items', JSON.stringify(stor))
   
       console.log(index)


  }

    return ( 

        <div className=' w-screen p-6 mt-14 flex flex-col justify-center items-center'>
            <div className='cart w-full sm:w-100  sm:grid-cols-3 gap-5 mt-10 md:w-100'>
                <div className='col-span-2 h-full md:flex flex-col  '>
                  <div className=''>
                    <div className='flex justify-between items-center'>
                    <h3 className='text-2xl font-bold'>Shopping Cart</h3>
                    <Link to='/history' className='font-bold leading-4 cursor-pointer' title='history'>History</Link>
                    </div>
                    <div className='overflow-x-auto my-2 mt-10 '>
                      <div className='flex justify-between mb-3 '>
                        <p>Products</p>
                        <p>Rating</p>
                        <p>Quantity</p>
                        <p>TotalPrice</p>
                      </div>
                      <hr className='text-gray-400' />
                    </div>
                    <div className='itembox'>
                      {/* <h2 className='text-2xl mx-auto w-50 font-bold text-gray-500'>{noItem}</h2> */}
                      {itemsLIsts && itemsLIsts.map(item => (
                     <div className='item flex justify-between items-center my-2'>
                        <div className='flex items-center w-[70px] '>
                            <img src={item[0].image} className='w-9 h-9 mr-2 rounded-lg border border-gray-500' alt="" />
                            <p className='itemname text-sm my-2'>{item[0].name}</p>
                        </div>
                        <p className='text-sm  w-[50px]'>$ {item[0].amount}</p>
                        <p  className=' Qty w-[40px] outline-none rounded-md p-1 text-sm text-center'>{item[1]}</p>
                        <div className='flex items-center justify-between w-[70px]'>
                       <p className='totalprice text-sm'>${item[0].amount * item[1]}</p>
                       <div>
                       <i className="fa-solid cursor-pointer fa-xmark text-xl text-gray-500" onClick={e => removeItem(e)}></i>
                       </div>
                        </div>
                     </div>))}
                     
                    </div>
                  </div>

                  <div className='flex justify-between items-end mt-12 '>
                    <div className='flex items-center cursor-pointer border py-2 px-2 rounded-lg'>
                        <i className="fa-solid fa-less-than mr-2 text-gray-400"></i>
                        <div className='shop font-bold cursor-pointer text-sm' onClick={e => confirm(e)}>
                    <p id='continue' className=''>Continue Shopping</p>
                        </div>


                    </div>
                    <div className=''>
                        <div className='flex gap-5 justify-between'>
                            <p className='font-bold text-gray-400'>Subtotal:</p>
                           {itemsLIsts && <p className='font-bold'>${totalMoney}</p>}
                        </div>
                         <div className='flex gap-5 my-3'>
                            <p className='font-bold text-gray-400'>Shipping:</p>
                            <p className='font-bold'>Free</p>
                        </div>
                         <div className='flex gap-5 justify-between'>
                            <p className='font-bold text-xl'>Total:</p>
                          {itemsLIsts &&  <p className='font-bold text-xl'>${totalMoney}</p>}
                        </div>
                    </div>
                  </div>
                </div>
                    <p className='warning my-2 text-red-600 text-lg invisible font-bold'>input invalid</p>

                <div className=' col-span-2 p-7 bg-gray-300 my-9 rounded-lg '>
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
                   <input type="text" className='card-name w-full border-0 border-b-1 p-2 outline-none'  placeholder='John peter...'/>
                  </div>
                  <div className='my-7'>
                    <p className='text-gray-500'>Card Number</p>
                    <input type="number" className='card-number w-full border-0 border-b-1 p-2 font-bold outline-none tracking-[2px]' placeholder='...   ...   ...   123'/>
                   
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
                            <option value="2030">2031</option>
                            <option value="2030">2032</option>
                            <option value="2030">2033</option>
                            <option value="2030">2034</option>
                            <option value="2030">2035</option>
                            
                        </select>
                        
                        <input type="number" className=' cvv w-14 h-9 outline-none border-1 border-gray-400 p-2' />
                    </div>
                  </div>
                  <div className='error rounded-md bg-amber-50 text-50 text-gray-700'>
                  
                  </div>
                  <div className='my-2 mt-9 '>
                  <button onClick={e => check(e)} className='acc-but border-0 outline-none bg-blue-500 hover:bg-blue-400 rounded-md flex justify-center items-center text-white text-lg font-bold py-3 px-5 w-full'>Change Details</button>
                  </div>
                 
                </div>
            </div>
           
  <div  className=' index  absolute top-2/10 w-65 bg-gray-400 p-3 px-5  rounded-lg flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                    <div></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-triangle-fill w-10 h-10 text-yellow-400 ml-6" viewBox="0 0 16 16">
                     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <div className='cursor-pointer' title='cansele' onClick={e => close(e)}>
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
                    <input type="number" ref={value} className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold outline-white'/>
                    <input  type="number" ref={value1}   className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                    <input  type="number"ref={value2}   className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                    <input  type="number" ref={value3}   className='w-11 bg-gray-300 rounded-lg p-2 h-11 text-center font-bold '/>
                </div>
            
            
  </div>
        </div>
     );
 
    } 
export default Cart;
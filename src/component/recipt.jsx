import coffee from '../img/latte-art3.jpg'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Recipt = () => {
    let a =1;
    const [details ,setdetails] = useState(undefined);
    const [name ,setname] = useState();
    const [address ,setaddress] = useState();
    const [date ,setdate] = useState();
    const [invoice ,setinvoice] = useState();
    const {id} = useParams()

    useEffect(() => {
     setdetails(JSON.parse(localStorage.getItem('details'))[id])
     setname(JSON.parse(localStorage.getItem('fullName')))
     setaddress(JSON.parse(localStorage.getItem('address')))
     setdate(JSON.parse(localStorage.getItem('details'))[id][0].date)
     setinvoice(JSON.parse(localStorage.getItem('details'))[id][0].invoice)

    },[id])
    let som = 0;
    let sum;
    let sume;

    if(details !== undefined){
 for(let i = 0; i < details[1].length; i++){
       som += Number(details[1][i].price.slice(1,5));
    }
     sum = som.toFixed(2)
     sume = (Number(sum) + 0.1).toFixed(2)
     
    }
    return ( 

        <div className="w-screen pb-20 flex justify-center">
            <div className="mt-20  p-2 w-105 relative overflow-hidden">
                <div className='overflow-hidden rounded-full absolute -top-40 -right-40 w-100 '>
                 <img src={coffee} className='w-full h-full' alt="" />
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" fill="currentColor" className="bi bi-cup-hot-fill text-[#7f4221] my-6" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"/>
                 <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
                 </svg></div>
                <div><h2 className="text-[#7f4221] text-4xl font-extrabold my-7">INVOICE</h2></div>

                <div className="text-[#7f4221] flex justify-between items-end my-6">
                    <div><p className="font-light">INVOICE TO:</p>
                      <h4 className="font-extrabold text-2xl">{name}</h4>
                      <p className="font-light">{address}</p>
                    </div>
                   <div className="text-[#7f4221] text-[13px] ">
                     <p >INVOICE NO: <span className="font-light">{invoice}</span> </p>
                     <p>DATE: <span className="font-light">{date}</span></p>
                   </div>
                </div> 


                <div className="my-5">
                    <div className="bg-[#7f4221] text-white py-2 px-2 flex justify-between items-center w-full">
                        <h3 className="w-8 text-[10px] font-bold">SL NO</h3>
                        <h3 className="w-26 text-[10px] font-bold">ITEM EDESCRIPTION</h3>
                        <h3 className="w-10 text-[10px] font-bold">QTY</h3>
                        <h3 className="w-10 text-[10px] font-bold">PRICE</h3>
                    </div>
                  {details &&  <div className='item-box'>
                    {details[1].map( each => (
                       <div key={each.id} className="flex justify-between items-center w-full border-b-1 py-2 px-2">
                        <p className="w-8 text-[10px]">{a++}</p>
                        <p className="w-20 text-[12px]">{each.itemName}</p>
                        <p className="w-8 text-[10px]">{each.Qty}pcs</p>
                        <p className="w-8 text-[10px]">{each.price}</p>
                    </div>
                    ))}
                      
                    </div>} 
                    
                </div>
                <div className='flex justify-between gap-2 items-start my-17' >
                   <div className=''>
                   
                    <div className='text-[12px] flex gap-2 items-center my-1'>
                        <div><i className="fa-solid fa-phone text-[#7f4221]"></i></div>
                        <div>000-0000-000</div>
                    </div>
                    <div className='text-[12px] flex gap-2 items-center my-1'>
                            <div><i className="fa-solid fa-globe text-[#7f4221]"></i></div>

                        <div>
                        www.coffeesite.codex.com
                        </div>
                    </div>
                    <div className='text-[12px] flex gap-2 items-center my-1'>
                       <div><i className="fa-solid fa-envelope text-[#7f4221]"></i></div>
                       <div>
                        stephenvictor701@gmail

                       </div>
                    </div>
                    <div className='text-[12px] flex gap-2 items-center my-1'>
                        <div><i className="fa-solid fa-location-dot text-[#7f4221]"></i>
                        </div>
                        <div>
                            345 park Avenue, NY
                        </div>
                    </div>
                   </div>
                   <div className='w-45'>
                    <div className='w-full border px-3 p-2 flex justify-between items-center'>
                        <p className='text-[10px]'>SUB TOTAL</p>
                        <p className='text-[10px]'>${sum}</p>
                    </div>
                    <div className='w-full border px-3 p-2 flex justify-between items-center'>
                        <p className='text-[10px]'>VAT(10%)</p>
                        <p className='text-[10px]'>${sume}</p>
                    </div>
                    <div className='w-full border px-3  p-1 flex justify-between items-center'>
                        <p className='text-[14px] text-[#7f4221] font-bold'>TOTAL</p>
                        <p className='text-[14px] text-[#7f4221] font-bold'> ${sume}</p>
                    </div>
                   </div>
                </div>
                <div className="flex justify-center w-full mt-10">
                    
                <h3>Thank you for Your purchase</h3>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Recipt;
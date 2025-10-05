import {Link} from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
const History = () => {

  const interval = useRef(null)
  const interval2 = useRef(null)

    const [note,setnote] = useState('');
    const [history,sethistory] = useState(null);
    const [loading,setloading] = useState(true);
    const [recipt,setrecipt] = useState();
    const [note1,setnote1] = useState('');


  const cleara = e => {
    const pop = document.querySelector('.index2')
    const homeHistory = document.querySelector('.history')
    homeHistory.classList.add('opacity-20')
    homeHistory.classList.add('h-screen')
    homeHistory.classList.add('overflow-hidden')
    homeHistory.classList.add('pointer-events-none')
    const data = e.target.parentElement.parentElement;
    const data2 = data.children[0].children[0].innerHTML;
    const data3 = data.children[0].children[2].children[0].innerHTML;
     setnote( `You are about to DELET "${data2}" 
               ${data3}`)
    pop.style.animation = 'scal 0.2s ease-out forwards';
counter2(data,pop,data2,data3)
setrecipt({
  data2:data2,
  data3:data3,
})

  }
   const clearAll = ()=> {
    const pop = document.querySelector('.index2')
    const homeHistory = document.querySelector('.history')
    homeHistory.classList.add('opacity-20')
    homeHistory.classList.add('h-screen')
    homeHistory.classList.add('overflow-hidden')
    homeHistory.classList.add('pointer-events-none')

     setnote('Are you sure you want to clear All history')
    pop.style.animation = 'scal 0.2s ease-out forwards';
Counter(pop)

  }


   const counter2 = (timer,element,data2,data3) => {
     let count = 10
      let time2 = 0

      if(!interval2.current){
  interval2.current = setInterval(() => {

    if(!(count < 0 )){
      time2 = count--

    }else if(count === -1){
      removee2(data2,data3,timer)
    }
element.children[4].innerHTML = `Delet in (${time2}s)`

    }, 1000);

      }
   
  }

  const stop2 = () => {
    clearInterval(interval2.current)
    interval2.current = null
  }
  
  
  const Counter = (e) => {
     let count = 10
     let time2 =0

    if(!interval.current){
  interval.current = setInterval(() => {
      

    if(!(count < 0 )){
       time2 = count--
    }else if(count === -1){
      removee()
         clearInterval(interval.current)
        interval.current = null
      
    }
      
    e.children[4].innerHTML = `Delet in (${time2}s)`
    }, 1000);
    }
       }
   const stope = () => {
        clearInterval(interval.current)
        interval.current = null
      }

  const removee = e => {
    const namee = e.target.parentElement.children[2].children[0].innerHTML;
    console.log(e.target.parentElement.children[2].children[0].innerHTML)
    if(namee === 'Are you sure you want to clear All history'){
      console.log('hello')
removee1()
    }else{
      console.log('hello again')

      removee2(recipt.data2,recipt.data3)
    }
    
  }

  const removee1 = () => {
    const pop = document.querySelector('.index2')

    const homeHistory = document.querySelector('.history')
    homeHistory.classList.remove('opacity-20')
    homeHistory.classList.remove('h-screen')
    homeHistory.classList.remove('pointer-events-none')
    homeHistory.classList.remove('overflow-hidden')

    pop.style.animation = 'scalE 0.2s ease-out forwards';
    localStorage.removeItem('details')
    const item = document.querySelector('.itembox')
      item.remove()

  }
  const removee2 = (data2,data3,timer) => {
    const pop = document.querySelector('.index2')

    const homeHistory = document.querySelector('.history')
    homeHistory.classList.remove('opacity-20')
    homeHistory.classList.remove('h-screen')
    homeHistory.classList.remove('pointer-events-none')
    homeHistory.classList.remove('overflow-hidden')

    
    pop.style.animation = 'scalE 0.2s ease-out forwards';
    const store = JSON.parse(localStorage.getItem('details'))

    console.log(store)
    console.log(data2,data3)

    const data = store.filter(stor => stor[0].data !== data2 && stor[0].time !== data3)
    console.log(data)
    localStorage.setItem('details', JSON.stringify(data))
     timer.remove()
      clearInterval(interval2.current)
      interval2.current = null

  }

  const reverse = (e) => {
 const pop = document.querySelector('.index2')

    const homeHistory = document.querySelector('.history')
    homeHistory.classList.remove('opacity-20')
    homeHistory.classList.remove('h-screen')
    homeHistory.classList.remove('pointer-events-none')
    homeHistory.classList.remove('overflow-hidden')

    pop.style.animation = 'scalE 0.2s ease-out forwards';
  if(e.target.parentElement.children[2].children[0].innerHTML === 'Are you sure you want to clear All history'){
stope()

  }else{
    stop2()
  }
  }


useEffect(() => {
  const arry = JSON.parse(localStorage.getItem('details'))
  if(arry === null){
     setnote1('Nothing here')
setloading(false)

  }else{
sethistory(arry)
setloading(false)
  }

},[])
    

  
    return ( 
        <div className="pt-20 px-5 relative w-screen flex flex-col items-center">
            <div className=' history  w-full sm:w-150'>
            <div className="flex justify-between items-center text-black w-full">
                <h3 className="font-bold text-3xl">History</h3>
               <p className='cursor-pointer' onClick={clearAll}>Clear All</p>
            </div>
            
            {loading && <h3 className=" w-full h-30 flex justify-center items-center">
            <div className='flex gap-2'>
                        <div className='circle1 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle2 rounded-full  bg-[#736447] h-4 w-4'></div>
                        <div className='circle3 rounded-full bg-[#736447] h-4 w-4'></div>
                    </div>
                    </h3>}
                    {note1 && <p className='w-full h-30 flex justify-center items-center text-2xl font-bold text-gray-600'>{note1}</p>}
           {history &&  <div className=' itembox w-full my-4'>
             {history.map( each => (  
                 <div key={each.id}  className=' w-full p-2 bg-gray-300 text-black rounded-lg flex justify-between items-start my-3'>
                <div className=''>
                  <h4 className='text-xl test-gray-300 font-bold'>{each[0].date}</h4>
                  <p className='text-[16px] text-gray-500'>Items: <span>{each[1].length}</span></p>
                  <p className='text-[14px] text-gray-500'>Time: <span>{each[0].time}</span></p>
                  <Link to={`/recipt/${history.indexOf(each)}`} className='text-blue-400 text-[14px] underline'>View More
                  </Link>
                </div>
                    <div className='cursor-pointer p-2  active:bg-gray-400' title='cansele' onClick={e => cleara(e)}>
                       <i className="fa-solid fa-xmark text-2xl text-gray-500 cursor-pointer" ></i>

                  </div>
                </div>))}
            </div>}
          
 
            </div>
             <div  className=' index2 absolute top-2/10 w-65 bg-gray-400 p-3 px-5 mt-10  rounded-lg flex flex-col items-center'>
                <div className='flex justify-center w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-triangle-fill w-10 h-10 text-yellow-400 my-2 " viewBox="0 0 16 16">
                     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </div>
                
                <h3 className='text-2xl font-bold '>WORNNING</h3>
               
                <div className='w-full text-center my-4'>
                   <p className='date2'>{note}</p>
                </div >
                <button onClick={e => reverse(e)} className='rounded-2xl text-white bg-red-600 w-full py-1 cursor-pointer'>Cansel</button>
                <button onClick={e => removee(e)} className='border-2 border-red-600 w-full rounded-2xl my-2 text-red-500 cursor-pointer'>Delete in <span>(0s)</span></button>
             </div>
        </div>
     );
} 
 
export default History;
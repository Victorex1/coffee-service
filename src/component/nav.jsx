import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Nav = () => {
  const history = useHistory()
   window.onload = function() {
    window.scrollTo(0, 0); // x=0, y=0 → scrolls to top-left
  };
 
    const hid = (e) => {

      if(!e.target.parentElement.classList.contains('hidden')){

       
        e.target.parentElement.style.animation = 'scrollE 0.1s ease-in forwards'
        setTimeout(() => {
           e.target.parentElement.classList.add('hidden')
        e.target.parentElement.classList.remove('flex')
        }, 300);
      }
        }


    const show = (e) => {
     
 const input = document.querySelector('input');

     e.target.parentElement.parentElement.children[1].classList.remove('hidden');
     e.target.parentElement.parentElement.children[1].classList.add('flex');
     let nav = e.target.parentElement.parentElement.children[1];

     nav.style.animation = 'scrollD 0.1s ease-out forwards'
     if(!input.classList.contains('hidden')){
    input.classList.add('hidden')

 
     }}

    
     const search = () => {
        const input = document.querySelector('input');
      if(input.classList.contains('hidden')){
         input.classList.remove('hidden')
       input.style.animation = 'scrollP 0.5s ease-out forwards'
      }else if(!input.classList.contains('hidden')){
       input.style.animation = 'scrollC 0.2s ease-out forwards'
       setTimeout(() => {
        input.classList.add('hidden')
        
       }, 200);

      }
    }

    const loghid = (e) => {
     const loginLink = document.querySelector('.logine')
     const namee = document.querySelector('.ans')

      if(loginLink.innerHTML !== 'Sign out'){
       if(!e.target.parentElement.classList.contains('hidden')){

         if(!e.target.parentElement.classList.contains('hidden')){

       
        e.target.parentElement.style.animation = 'scrollE 0.1s ease-in forwards'
        setTimeout(() => {
           e.target.parentElement.classList.add('hidden')
        e.target.parentElement.classList.remove('flex')
        }, 300);
      }
       }
       history.push('/Log-in')

     
      }else{

       namee.innerHTML = '';
      namee.classList.add('hidden')
      loginLink.innerHTML = 'Log in'
 if(!e.target.parentElement.classList.contains('hidden')){

       if(!e.target.parentElement.classList.contains('hidden')){

       
        e.target.parentElement.style.animation = 'scrollE 0.3s ease-in forwards'
        setTimeout(() => {
           e.target.parentElement.classList.add('hidden')
        e.target.parentElement.classList.remove('flex')
        }, 300);
      }
      }
      }
    }

setTimeout(() => {
    if(localStorage.getItem('userName')){
      const namee = document.querySelector('.ans')
      const loginLink = document.querySelector('.logine')

      let set = JSON.parse(localStorage.getItem('userName'))
      namee.classList.add('flex')
      namee.classList.remove('hidden')
      namee.innerHTML = set[0].slice(0,1).toUpperCase();
      loginLink.innerHTML = 'Sign out'
    }
}, 500);


 
    return ( 
        <nav className='fixed top-0 left-0 z-5 w-full flex justify-between align-center text-white bg-[#736447] p-3'>
            <div>
              <h2 className='font-serif text-xl sm:text-2xl my-1'>Bono</h2>
            </div>
            <div className=' one hidden absolute h-screen w-0 md:w-1/2 bg-gray-300 top-0 right-0 text-black overflow-hidden
             flex-col md:items-center text-left p-4 md:p-0 md:flex md:justify-center md:bg-transparent md:relative md:h-auto md:flex-row xl:flex-row md:text-white '>
            <i className=" cros fa-solid fa-x right-0 absolute mx-3 cursor-pointer sm:text-md sm:m-5 md:mb-4 md:opacity-0 md:cursor-none" title='close' onClick={ e => hid(e)}></i>
             
             <Link   className=' pointrt-none flex justify-left items-center border-l-4 md:border-l-0 border-gray-300 hover:border-blue-400 md:hover:border-l-0 p-2 md:p-0 md:pb-1  mt-9 md:mt-0  md:mx-2 lg:mx-6 md:hover:border-b-2 md:hover:border-white md:rounded-none' onClick={ e => hid(e)} to='/' >
              <div className='md:hidden pointer-events-none'>
              <i className="fa-solid fa-house mr-4  hidden"></i>
              </div>
              <p className=' text-2 md:text-lg md:text-white pointer-events-none' >Home</p>
             </Link>

             <Link  className='w-100 lg:w-80 flex justify-left items-center  border-l-4 md:border-l-0 border-gray-300 hover:border-blue-400 md:hover:border-l-0 my-2 p-2  md:pb-1 md:p-0 md:mx-2  md:hover:border-b-2 md:hover:border-white md:rounded-none' onClick={ e => hid(e)}  to='/contact-us'>
              <div className='md:hidden pointer-events-none '>
              <i className=" fa-solid fa-phone mr-4 "></i>
              </div>
              <p className=' text-2 md:text-lg md:text-white pointer-events-none' >Contact Us</p>
             </Link>


             <Link className=' flex justify-left items-center border-l-4 md:border-l-0  border-gray-300  hover:border-blue-400 md:hover:border-l-0 p-2 md:p-0  md:pb-1  md:mx-2 lg:mx-6 md:hover:border-b-2 md:hover:border-white md:rounded-none' onClick={ e => hid(e)} to='/blog-list'  >
             <div className='md:hidden pointer-events-none'>
              <i className="fa-solid fa-blog mr-4 md:hidden"></i>
             </div>
              <p className=' text-2 md:text-lg md:text-white pointer-events-none'  >Blog</p>
             </Link>

              <Link  className='w-100 md:w-auto flex justify-left items-center border-l-4 md:border-l-0  border-gray-300 hover:border-blue-400 md:hover:border-l-0 p-2 md:p-0  md:pb-1  md:mx-2 lg:mx-6 md:hover:border-b-2 md:hover:border-white md:rounded-none' onClick={ e => hid(e)}  to='/cart'>
             <div className='md:hidden pointer-events-none'>
              <i className="fa-solid fa-cart-shopping mr-4  md:hidden"></i>
              
             </div>
              <p className=' text-2 md:text-lg md:text-white pointer-events-none' >Cart</p>

             </Link>
             <div className='w-100 flex justify-left items-center  border-l-4 md:border-l-0  border-gray-300 hover:border-blue-400 md:hover:border-l-0 my-2 p-2 md:p-0 md:pb-1 md:hover:border-b-2 md:hover:border-white md:rounded-none cursor-pointer'  onClick={ e => loghid(e)} >
              <div className='md:hidden pointer-events-none'>
              <i className="fa-solid fa-right-to-bracket mr-4 md:hidden"></i>

              </div>
              <p aria-readonly className='logine text-2 md:text-lg md:text-white curesor-pointer pointer-events-none'  >Log in</p>

             </div>
            </div>
            <div className='flex items-center'>
              <i className="fa-solid fa-magnifying-glass mr-6 sm:text-xl sm:mr-9 cursor-pointer" title='search' onClick={search}></i>
              <i className=" md:opacity-0 md:cursor-none fa-solid fa-bars borg sm:text-xl cursor-pointer" title='menue' onClick={e => show(e)}></i>
              <div className='ans hidden w-10 h-10 rounded-full p-2 justify-center items-center text-lg bg-gray-800 text-white ml-3'></div>
            </div>
           <input type="text" placeholder='Search...' className='seartch overflow-hidden absolute w-98 sm:w-155 md:w-187 lg:w-250 content-center text-gray-500  p-3 rounded-lg border-1 bg-white mt-10 h-13 hidden' />

        </nav>
     );

    }
 
export default Nav;
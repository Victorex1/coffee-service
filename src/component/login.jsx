import {Link}  from 'react-router-dom'
import {useHistory} from 'react-router-dom'
// import liginPage from "../img/login-bg1.jpg" 
 
const Login = () => {

    window.onload = function() {
  window.scrollTo(0, 0);
};
 const history = useHistory();

const eyee = () => {

   const eye = document.querySelector('#eye');
   const password = document.querySelector('.pass-in');


   if(eye.classList[0] === 'fa-solid' || eye.classList[1] === 'fa-solid'){
     password.type ='text';
     eye.classList.remove('fa-solid');
     eye.classList.remove('fa-eye');
     eye.classList.add('fa-regular');
     eye.classList.add('fa-eye-slash');

   }else if(eye.classList[1] === 'fa-regular'){
      
     eye.classList.remove('fa-regular');
     eye.classList.remove('fa-eye-slash');
     eye.classList.add('fa-solid');
     eye.classList.add('fa-eye');
     password.type ='password'
   }

};


 const eyee2 = () => {

   const eye = document.querySelector('#eye1');
   const confirm = document.querySelector('.con-in');


   if(eye.classList[0] === 'fa-solid' || eye.classList[1] === 'fa-solid'){
     confirm.type ='text';
     eye.classList.remove('fa-solid');
     eye.classList.remove('fa-eye');
     eye.classList.add('fa-regular');
     eye.classList.add('fa-eye-slash');

   }else if(eye.classList[1] === 'fa-regular'){
      
     eye.classList.remove('fa-regular');
     eye.classList.remove('fa-eye-slash');
     eye.classList.add('fa-solid');
     eye.classList.add('fa-eye');
     confirm.type ='password'
   }

 };

    // for validating inputs and submition
const submit = e => {
    e.preventDefault()

    if(localStorage.getItem('userName') !== null){
       localStorage.clear()
    }
 
    const addressInput  = document.querySelector('.address-in')
    const addressP  = document.querySelector('.address-p')

     const fullNameinput= document.querySelector('.name-in')
     const fullNameP = document.querySelector('.name-p')

    const userInput= document.querySelector('.user-in')
    const userP= document.querySelector('.user-p')
    const emailIn= document.querySelector('.peer')

    const passwordIN= document.querySelector('.pass-in')
    const passwordP= document.querySelector('.pass-p')

    
    const confirmPassIN= document.querySelector('.con-in')
    const confirmPassP= document.querySelector('.con-p')
   if(userInput.value.length < 5){
      userP.style.visibility = 'visible';
      userP.innerHTML = "value should't be less than 5 Charater";
      setTimeout(() => {
      userP.style.visibility = "hidden";
         
      }, 4000);
     passwordP.style.visibility = 'hidden';
      addressP.style.visibility= 'hidden';
      fullNameP.style.visibility= 'hidden';
    confirmPassP.style.visibility = 'hidden'

   }else if(fullNameinput.value.length < 8){
      userP.style.visibility = 'hidden';
    confirmPassP.style.visibility = 'hidden'
      addressP.style.visibility= 'hidden';
     passwordP.style.visibility = 'hidden';
      fullNameP.style.visibility= 'visible';
      setTimeout(() => {
      fullNameP.style.visibility= 'hidden';
         
      }, 4000);
   }else if(addressInput.value.length < 8){
userP.style.visibility = 'hidden';
    confirmPassP.style.visibility = 'hidden'
     passwordP.style.visibility = 'hidden';
      fullNameP.style.visibility= 'hidden';
      addressP.style.visibility= 'visible';
      setTimeout(() => {
      addressP.style.visibility= 'hidden';
         
      }, 4000);
   }else if(passwordIN.value.length < 6){
      fullNameP.style.visibility= 'hidden';
      userP.style.visibility = 'hidden';
      addressP.style.visibility= 'hidden';
    confirmPassP.style.visibility = 'hidden';
     passwordP.style.visibility = 'visible';
      setTimeout(() => {
         passwordP.style.visibility = 'hidden'
      }, 4000);
      
   }else if(passwordIN.value !== confirmPassIN.value){

      userP.style.visibility = 'hidden';
      addressP.style.visibility= 'hidden';
    confirmPassP.style.visibility = 'visible';
      fullNameP.style.visibility= 'hidden';
     passwordP.style.visibility = 'hidden';
     setTimeout(() => {
         confirmPassP.style.visibility = 'hidden'
      }, 4000);
   }else{
    userP.style.visibility = 'hidden';
    confirmPassP.style.visibility = 'hidden'
      fullNameP.style.visibility= 'hidden';
      addressP.style.visibility= 'hidden';
     passwordP.style.visibility = 'hidden';

      storage(fullNameinput.value,userInput.value,emailIn.value,passwordIN.value,addressInput.value)
   userInput.value = '';
   passwordIN.value = '';
   fullNameinput.value = '';
   confirmPassIN.value = '';
   emailIn.value = '' ;
   addressInput.value = '';
  SignIN()

   }

  
};
    
// for regisgtering link
 const register = () => {
    const confirmPassDiv= document.querySelector('.con-password');
    const emailDiv= document.querySelector('.email');
    const addressDiv= document.querySelector('.address');
    const createLink= document.querySelector('.create');
    const logLink= document.querySelector('.loge');
    const userDiv= document.querySelector('.use-name');
    const passwordDiv= document.querySelector('.pass-div');
    const fullNameDiv = document.querySelector('.full-name');
    const titlee= document.querySelector('.title');
    const submitBut= document.querySelector('.sub');
    const loginBut= document.querySelector('.log');
    const forget= document.querySelector('.forget');
       const userInput= document.querySelector('.user-in')
       const passwordIN= document.querySelector('.pass-in')

         loginBut.classList.add('hidden');

         titlee.innerHTML = 'SIGN UP';
         confirmPassDiv.style.animation = 'scroll 0.3s ease-out forwards';
         emailDiv.style.animation = 'scroll 0.3s ease-out forwards';
         addressDiv.style.animation = 'scroll 0.3s ease-out forwards';
         fullNameDiv.style.animation = 'scroll 0.3s ease-out forwards';
         loginBut.classList.add('hidden');
         userInput.value = ''
         passwordIN.value = ''
          if(passwordDiv.style.animation === '0.4s ease-in 0s 1 normal forwards running scrollB'){
          passwordDiv.style.animation = 'scroll 0.3s ease-out forwards'
    };
    if(userDiv.style.animation === '0.3s ease-in 0s 1 normal forwards running scrollB'){
      userDiv.style.animation = 'scroll 0.3s ease-out forwards'
    }

         if(submitBut.classList.contains('hidden')){
         submitBut.classList.remove('hidden');

         }
         createLink.classList.add('hidden');
         forget.classList.add('hidden');
         if(logLink.classList.contains('hidden')){
         logLink.classList.remove('hidden')

         }


 };

    // for sign in link
const SignIN = () => {
 const confirmPassDiv= document.querySelector('.con-password');
    const emailDiv= document.querySelector('.email');
    const createLink= document.querySelector('.create');
    const addressDiv= document.querySelector('.address');
    const logLink= document.querySelector('.loge');
    const fullNameDiv = document.querySelector('.full-name');
    const titlee= document.querySelector('.title');
    const submitBut= document.querySelector('.sub');
    const loginBut= document.querySelector('.log');
    const forget= document.querySelector('.forget');
         loginBut.classList.add('hidden');

         titlee.innerHTML = 'LOG IN';
         confirmPassDiv.style.animation = 'scrollB 0.3s ease-in forwards';
         emailDiv.style.animation = 'scrollB 0.3s ease-in forwards';
         addressDiv.style.animation = 'scrollB 0.3s ease-in forwards';
         submitBut.classList.add('hidden');
         fullNameDiv.style.animation = ' scrollB 0.3s ease-in forwards';
         if(loginBut.classList.contains('hidden')){
         loginBut.classList.remove('hidden');

         }
         logLink.classList.add('hidden')
         
         if(createLink.classList.contains('hidden')){
            createLink.classList.remove('hidden');
         forget.classList.remove('hidden');
            

         }

};

  


//    storing into local storage
const storage = (todo,todo1,todo2,todo3,todo4) => {

    let set;
  if(localStorage.getItem('fullName') == null){
     set = []
  }else{
     set = JSON.parse(localStorage.getItem('fullName'))
  }
  set.push(todo)
  localStorage.setItem('fullName', JSON.stringify(set))


   let set1;
  if(localStorage.getItem('userName') == null){
     set1 = []
  }else{
     set1 = JSON.parse(localStorage.getItem('userName'))
  }
  set1.push(todo1)
  localStorage.setItem('userName', JSON.stringify(set1))


   let set2;
  if(localStorage.getItem('email') == null){
     set2 = []
  }else{
     set2 = JSON.parse(localStorage.getItem('email'))
  }
  set2.push(todo2)
  localStorage.setItem('email', JSON.stringify(set2))



   let set3;
  if(localStorage.getItem('password') == null){
     set3 = []
  }else{
     set3 = JSON.parse(localStorage.getItem('password'))
  }
  set3.push(todo3)
  localStorage.setItem('password', JSON.stringify(set3))

   let set4;
  if(localStorage.getItem('address') == null){
     set4 = []
  }else{
     set3 = JSON.parse(localStorage.getItem('address'))
  }
  set4.push(todo4)
  localStorage.setItem('address', JSON.stringify(set4))
};

  // for for login in
const LogIn = e => {
     e.preventDefault()

       const userInput= document.querySelector('.user-in')
       const passwordIN= document.querySelector('.pass-in')
       const email= document.querySelector('.peer')
       const logBut= document.querySelector('.log')
    const passwordDiv= document.querySelector('.pass-div');
    const emailDiv= document.querySelector('.email');
       const textContent = document.querySelector('.tcontent')

   
      let set1 = JSON.parse(localStorage.getItem('userName'));
      let set2 = JSON.parse(localStorage.getItem('password'));
      let set3 = JSON.parse(localStorage.getItem('email'));

 if(localStorage.getItem('userName') === null || localStorage.getItem('userName') === ''){
       textContent.style.visibility = 'visible';
       textContent.innerHTML = 'Account not created';
         setTimeout(() => {
         textContent.style.visibility = 'hidden'
            
         }, 2000);
 }else{
     if(set3[0] === email.value){
         emailDiv.style.animation = 'scrollB 0.3s ease-out forwards';
         email.value= '';
        passwordDiv.style.animation='scroll 0.4s ease-in forwards'
        logBut.innerHTML = 'change'
     }else if(logBut.innerHTML === 'change'){
      const forget = document.querySelector('.forget')
       localStorage.removeItem('password')
       let set3;
         if(localStorage.getItem('password') == null){
         set3 = []
        }else{
         set3 = JSON.parse(localStorage.getItem('password'))
        }
        set3.push(passwordIN.value)
       localStorage.setItem('password', JSON.stringify(set3))
       textContent.style.visibility = 'visible';
       textContent.innerHTML = 'Password reset successfully';
       textContent.style.color = 'green';

         setTimeout(() => {
         textContent.style.visibility = 'hidden';
    const userDiv= document.querySelector('.use-name');
     userDiv.style.animation = 'scroll 0.3s ease-out forwards'
         passwordIN.value = ''
         logBut.innerHTML = 'Login'
         forget.classList.remove('hidden')
            SignIN()
         }, 2000);
    }else{

      if((set2[0] !== passwordIN.value && set1[0] !== userInput.value) || ((set2[0] !== passwordIN.value || set1[0] !== userInput.value))  ){
         textContent.style.visibility = 'visible';
         textContent.style.color = 'red';
         textContent.innerHTML = 'Incorrect details'
         setTimeout(() => {
         textContent.style.visibility = 'hidden'
            
         }, 2000);
      }else{
       textContent.style.visibility = 'visible';
       textContent.innerHTML = 'correct details';
       textContent.style.color = 'green';
         setTimeout(() => {
         textContent.style.visibility = 'hidden'
            history.push('/')
         }, 2000);
   };
    }

     
   
 }
}

  const forget = e => {
    const titlee= document.querySelector('.title');
    const passwordDiv= document.querySelector('.pass-div');
    const userDiv= document.querySelector('.use-name');
    const emailDiv= document.querySelector('.email');
    const loginBut= document.querySelector('.log');
   const userInput= document.querySelector('.user-in')
   const passwordIN= document.querySelector('.pass-in')

         userInput.value = ''
         passwordIN.value = ''  

         emailDiv.style.animation = 'scroll 0.3s ease-out forwards';
         titlee.innerHTML = 'Password Recovery';
        passwordDiv.style.animation='scrollB 0.4s ease-in forwards'
        passwordDiv.style.overflow='hidden'
        userDiv.style.animation = 'scrollB 0.3s ease-in forwards'
        userDiv.style.overflow = 'hidden'
        loginBut.innerHTML = 'confirm';
        e.target.classList.add('hidden')
  }



    return ( 
        <div className='w-screen bg-gray-800 text-white flex justify-center py-15'>
            <div className=' mt-15 w-full p-4 flex flex-col justify-center items-center sm:w-100'>
                <h3 className='title text-2xl '>LOGIN</h3>
                    <form action="" className='w-full px-8'>
                      <div className='use-name flex flex-col my-3 w-full'>
                        <label htmlFor="user-name" className=''>User Name</label>
                        <input type="text" id='user-name' name='user-name' className='user-in outline-0 peer/user-name w-full border-b p-2'/>
                        <p className=" user-p invisible text-pink-600">value should't be less than 5 Character and should contain an underscore.</p>

                      </div>
                      <div className=' full-name flex  flex-col my-5'>
                        <label htmlFor="Full-name" >Full Name</label>
                        <input type="text" id='full-name' name='Full-name'className='name-in outline-0 peer/full-name border-b p-2' />
                        <p className=" name-p invisible text-pink-600">Input value should't be less than 8 Character.</p>

                     </div>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_cc" value="another@email.com"/>

                     <div className=' email flex  flex-col my-5'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='Email' className=' peer border-b p-2 outline-0'/>
                        <p className="invisible peer-invalid:visible peer-invalid:text-pink-600">Please provide a valid email address.</p>
                     </div>
                      <div className='address flex  flex-col my-5'>
                        <label htmlFor="address">Address</label>
                        <input type="address" id='address' name='Emaile' className='address-in peer/address border-b p-2 outline-0'/>
                        <p className="address-p invisible text-pink-600">Please provide a valid address.</p>
                     </div>
                     <div className='pass-div flex  flex-col my-5'>
                        <label htmlFor="Passworde">Password</label>
                      <div className='flex justify-between items-center border-b'>
                        <input type="password" id='Password ' name='Password' className='pass-in outline-0 peer/Password  p-2'/>
                        <div className=' p-1   cursor-pointer' onClick={eyee}>
                         <i className="fa-solid fa-eye cursor-none" id='eye'></i>
                        </div>
                      </div>
                        <p className="pass-p invisible text-pink-600">Password should't be less than 6.</p>

                     </div>
                     <div className='con-password flex flex-col my-5'>
                        <label htmlFor="confirm-password">confirm password</label>
                        <div className='flex justify-between items-center border-b'>
                          <input type="password" id='confirm-password' name='confirm-password' className='con-in outline-0 peer/confirm-password p-2' />
                         <div className=' p-1   cursor-pointer' onClick={eyee2}>
                         <i className="fa-solid fa-eye cursor-none" id='eye1'></i>
                        </div>
                        </div>
                     
                        <p className="con-p invisible text-pink-600">password does not match.</p>

                     </div>
                      <div className='con-password flex flex-col my-5'>
                        <label htmlFor="confirm-password">confirm password</label>
                        <div className='flex justify-between items-center border-b'>
                          <input type="password" id='confirm-password' name='confirm-password' className='con-in outline-0 peer/confirm-password p-2' />
                         <div className=' p-1   cursor-pointer' onClick={eyee2}>
                         <i className="fa-solid fa-eye cursor-none" id='eye1'></i>
                        </div>
                        </div>
                     
                        <p className="con-p invisible text-pink-600">password does not match.</p>

                     </div>
                     <div className='flex justify-between my-9'>
                     <div>
                     <button className=' sub hidden px-4 py-2 bg-pink-800 rounded-lg hover:bg-pink-500' onClick={e => submit(e)}>Submit</button>
                     <button className=' log px-4 py-2 bg-pink-800 rounded-lg hover:bg-pink-500' onClick={e => LogIn(e)}>Login</button>

                     </div>
                     <Link to='#' className='forget text-blue-700 underline' onClick={e => forget(e)}>Forgot Password</Link>
                     </div>
                     <p className='tcontent text-pink-500  my-4 invisible'>Corrent details does not exeist</p>
                    </form>
                    <p className='create'>Don't have an Account <Link to='#' className=' text-blue-700 create' onClick={register}>Create Account</Link></p>
                    <p className='loge hidden'>Already have an Account <Link to='#' className=' text-blue-700 create' onClick={SignIN}>Sign-in</Link></p>
                    
            </div>
            
        </div>
     );
}
 
export default Login;
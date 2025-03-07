import React, {useState, useContext} from 'react'
import { MdClose } from "react-icons/md";
import google_icon from '../assets/images/google-icon.svg';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ProductsContext } from '../context/ProductsContext';



const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
      name:"",
      email:"",
      password:""
  })
  const {useDocumentTitle} = useContext(ProductsContext);
  useDocumentTitle("Login | Register");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
}

  return (
    <div className='login fixed top-0 w-full bg-white border-t min-h-[100vh] flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <form className=' bg-white shadow-lg w-full sm:max-w-[30vw] mx-4 px-6 py-6 rounded-[15px]'>
        <div className='flex items-center justify-center mb-6'>
            <h2 className='text-xl font-medium'>{currentState}</h2>
        </div>
        <div className='flex flex-col gap-3'>
            {currentState==="Login"? <></>:<input type='text' placeholder='Your name' required name='name' className='border rounded-[15px] px-2 py-[6px] w-full outline-none bg-gray-50' onChange={onChangeHandler} value={data.name}/>}
            <input type='email' placeholder='Your email' required name='email' onChange={onChangeHandler}  value={data.email} className='border rounded-[15px]  px-2 py-[6px] w-full outline-none bg-gray-50'/>
            <div className='relative'>
              <input type={showPassword ? 'text' : 'password'} placeholder='password' required name='password' onChange={onChangeHandler} value={data.password} className='border rounded-[15px]  px-2 py-[6px] w-full outline-none bg-gray-50'/>
              <span className='cursor-pointer mt-[2.5px] text-slate-700 absolute top-0 translate-y-[50%] right-[10px] ' onClick={togglePasswordVisibility}>
                {showPassword?
                  <IoIosEyeOff/>:
                  <IoIosEye/>
                }
              </span>
            </div>
            
        </div>
        <button type='submit' className='bg-slate-900 hover:bg-slate-800 text-gray-200 mt-3 w-full py-[6px] mb-3 rounded-[15px]'>{currentState==="Sign Up" ?"Create Account":"Login"}</button>

        {currentState === 'Sign Up' ?
          <div className='flex items-start gap-2 mb-3 text-slate-700'>
            <input type='checkbox' required className='outline-none mt-[4px] cursor-pointern bg-gray-50'/>
            <p className='text-sm'>By continuing, I agree to the Terms of use and privacy poilcy</p>
          </div>
          :
          ''
        }
        
        {currentState==="Login" ?
          <div className='mt-2 mb-4 flex flex-col gap-4'>
            <p className='flex items-center justify-center gap-3'>
              <hr className='h-[2px] w-full'/>
              <span>or</span>
              <hr className='h-[2px] w-full'/>
            </p>

            <div className='flex items-center justify-center gap-3 border cursor-pointer w-full py-[6px] mb-3 rounded-[15px] hover:bg-slate-100 shadow-sm'>
              <img src={google_icon} className='w-5' />
              <p>Google</p>
            </div>
          </div>:
          ''
        }

        {currentState==="Login"?
            <p className='text-center text-slate-700'>Don't have an account? <span onClick={()=>setCurrentState('Sign Up')} className='text-slate-900 cursor-pointer hover:underline'>Register </span></p>
            :<p className='text-center text-slate-700'>Already have an account? <span onClick={()=>setCurrentState('Login')}className='text-slate-900 cursor-pointer hover:underline'>Login </span></p>
        }
     
      </form>
    </div>
  )
}

export default Login
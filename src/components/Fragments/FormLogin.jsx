import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const FormLogin = () => {
    return (
        <form action="/">
          <div className="mb-8">
          <InputForm
          id="email"
          type="email"
          name="email"
          placeholder="Email / Username*"
          />
          </div>
          <div className="mb-1">
          <InputForm
          id="password"
          type="password"
          name="password"
          placeholder="Password*" />
          </div>
          <div className="mb-6 text-end">
          <a href="#" className="text-sm text-slate-600 underline">Forgot Password</a>
          </div>
          <Button classname="bg-primary w-full font-bold text-white font-inter">LOGIN</Button>
          <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-400 font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="mb-2 grid grid-cols-2 gap-4">
            <Button classname="bg-white text-black border border-gray-300">
              <div className="align-items-center flex justify-center">
                <AiOutlineGoogle className="w-7 h-7 text-gray-800 dark:text-black" />
                <span className="ml-1 mt-0.5">Google</span>
              </div>
            </Button>
            <Button classname="bg-white text-black border border-gray-300">
              <div className="align-items-center flex justify-center">
                <FaFacebook className = "w-6 h-6  text-gray-800 dark:text-black"/>
                <span className="ml-1">Facebook</span>
              </div>
            </Button>
          </div>
          {/* <div className="mt-8 mb-8">
            <p>Login now and you will be able to:</p>
            <ul className="list-disc list-inside">
              <li>Receive our promo code</li>
              <li>Shop Faster</li>
              <li>Save your favorite items</li>
              <li>View your order history</li>
              <li>Check your orders and returns</li>
            </ul>
          </div>
          <div className="flex-grow h-px bg-gray-300 mb-2"></div>
          <div className="text-sm font-light">
            <p>Customer Service : 0812345678</p>
            <p>Instagram : madebycan</p>
          </div> */}
        </form>
    )
}

export default FormLogin;
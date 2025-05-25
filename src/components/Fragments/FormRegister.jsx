import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import Label from "../Elements/Input/Label"

const FormRegister = () => {
    return (
        <form action="/login">
          <div className="mb-8">
          <InputForm
        //   id="username"
          type="text"
          name="username"
          placeholder="Username*"
          />
          </div>
          <div className="mb-8">
          <InputForm
        //   id="email"
          type="email"
          name="email"
          placeholder="Email Address*"
          />
          </div>
          <div className="mb-8">
          <InputForm
        //   id="password"
          type="password"
          name="password"
          placeholder="Password*" />
          </div>
          <div className="mb-2">
          <InputForm
        //   id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password*" />
          </div>
          <div className="mb-8">
          <p href="#" className="text-sm text-slate-600">Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.</p>
          </div>
          <div className="mb-8">
            <Label htmlFor="terms" className="flex items-center" type="checkbox">
              <input type="checkbox" id="terms" name="terms" />
              <span className="text-sm ml-2 text-slate-600">I agree to the <a href="#" className="text-primary font-semibold">Terms and Conditions</a> and <a href="#" className="text-primary font-semibold">Privacy Policy</a></span>
            </Label>
          </div>
          <Button classname="bg-primary w-full font-bold text-white font-inter mb-2">SIGN UP</Button>
          {/* <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-400 font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-4">
            <Button classname="bg-white text-black border border-gray-300">
              <div className="align-items-center flex justify-center">
                <svg className="w-7 h-7 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
                </svg>
                <span className="ml-1 mt-0.5">Google</span>
              </div>
            </Button>
            <Button classname="bg-white text-black border border-gray-300">
              <div className="align-items-center flex justify-center">
                <svg className="w-7 h-7  text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="mt-0.5">Facebook</span>
              </div>
            </Button>
          </div> */}
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

export default FormRegister;
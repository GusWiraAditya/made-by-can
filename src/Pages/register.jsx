import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="SIGN UP">
        <FormRegister />
        <p className="text-center text-sm text-slate-600">Have an Account?
            <Link to="/login" className="text-primary font-bold">
            Login
            </Link>
        </p>
    </AuthLayouts>
  );
}

export default RegisterPage;

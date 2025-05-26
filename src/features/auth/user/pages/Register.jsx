import AuthLayouts from "../layouts/UserAuthLayout";
import FormRegister from "../../../user/components/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="SIGN UP" type="register">
        <FormRegister />
    </AuthLayouts>
  );
}

export default RegisterPage;

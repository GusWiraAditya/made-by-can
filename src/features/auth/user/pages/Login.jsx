import AuthLayouts from "../layouts/UserAuthLayout";
import FormLogin from "../../../user/components/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Log in" type="login">
        <FormLogin />
    </AuthLayouts>
  );
}

export default LoginPage;

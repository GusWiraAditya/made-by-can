import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="LOGIN">
        <FormLogin />
    </AuthLayouts>
  );
}

export default LoginPage;

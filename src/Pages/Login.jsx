import AuthLayout from "../Components/Layout/AuthLayout";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
             <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;
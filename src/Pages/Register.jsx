import AuthLayout from "../Components/Layout/AuthLayout"
import FormRegister from "../Components/Fragment/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
             <FormRegister/>
        </AuthLayout>
    );
};

export default RegisterPage;
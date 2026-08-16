import { cn } from "clsx-for-tailwind";
import LoginForm from "../components/features/auth/LoginForm";

const Login = () => {
  return (
    <main className={cn("py-10 px-5")}>
      <LoginForm />
    </main>
  );
};

export default Login;

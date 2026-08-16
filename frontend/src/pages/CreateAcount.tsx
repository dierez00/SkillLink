import { cn } from "clsx-for-tailwind";
import Register from "../components/features/auth/Register";

// import CreateAcountForm from "../components/layouts/CreateAcountForm";

const CreateAcount = () => {
  return (
    <main className={cn("py-10 px-8")}>
      <Register />
    </main>
  );
};

export default CreateAcount;

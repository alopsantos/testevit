import { useFormState } from "@/hooks/use-form-state";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { signInWithEmailAndPassword } from "./loginActions";
import { Spinner } from "@phosphor-icons/react/dist/ssr";

export default function LoginForm() {
  const navigate = useNavigate();
  const [{ errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      navigate("/dashboard");
    }
  );
  if (errors) {
    console.log(errors);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border rounded-lg p-2"
            placeholder="eu@exemplo.com"
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <Button className="w-full mt-6 flex gap-4 " type="submit">
            <Spinner
              data-pendente={isPending}
              size={32}
              className="hidden data-[pendente=true]:flex data-[pendente=true]:animate-spin"
            />
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}

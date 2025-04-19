import LoginForm from "@/components/login/loginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card";
import { Link } from "react-router";

export default function Login() {
  return (
    <main className="w-full h-screen">
      <section className="w-full flex justify-center items-center ">
        <div className="flex flex-col gap-4">
          <Card className="max-w-sm w-full rounded-2xl mt-40">
            <CardHeader className="text-center">
              <h2 className="text-xl font-bol">Boas Vindas</h2>
              <CardDescription>
                Faça seu login com email e senha.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Não posui cadastro?
            <Link className="text-gray-800 hover:underline" to={"/register"}>
              &nbsp; Registre-se
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

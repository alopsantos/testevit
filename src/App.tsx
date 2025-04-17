import { Link } from "react-router";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "./components/ui/card";
import { LoginForm } from "./components/Login/form";

function App() {
  return (
    <main className="w-full h-screen">
      <section className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-4 items-center">
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
          <div className="w-full items-center">
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Não posui cadastro?
              <Link className="text-gray-800 hover:underline" to={"/register"}>
                Registre-se
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

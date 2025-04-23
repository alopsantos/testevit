import { z } from "zod";
import { HTTPError } from "ky";
import { signInWithPassword } from "@/http/sign-in-with-password";
import { saveToken } from "@/hooks/auth-store";

const signInSchema = z.object({
  email: z.string().email({ message: "Informe um email válido!" }),
  password: z.string()
});
export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, message: null, errors };
  }
  const { email, password } = result.data;

  try {
    const token = await signInWithPassword({
      email,
      password
    });
    saveToken(token);
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();
      return { success: false, message, errors: null };
    }
    console.error(err);
    return {
      success: false,
      message: "Aconteceu um erro, volte a tentar em alguns minutos",
      errors: null
    };
  }
  return { success: true, message: null, errors: null };
}

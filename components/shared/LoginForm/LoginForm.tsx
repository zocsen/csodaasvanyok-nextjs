import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";
import "./login-form.scss";

export default async function LoginForm() {
  const session = await getSession();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    await login(formData);
    redirect("/");
  };

  return (
    <section className="login-section">
      <form className="login-form" action={handleSubmit}>
        <h1>Bejelentkezés</h1>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Jelszó</label>
        <input name="password" type="password" placeholder="Jelszó" />
        <br />
        <button className="login-btn" type="submit">
          Bejelentkezés
        </button>
        {session && !session.authorized && (
          <p className="auth-failed">Helytelen email vagy jelszó!</p>
        )}
        <a href="/auth/recover">Elfelejtetted a jelszavad?</a>
      </form>
    </section>
  );
}

import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";

export default async function LoginForm() {
  const session = await getSession();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    await login(formData);
    redirect("/");
  };

  return (
    <section className="auth-section">
      <form className="auth-form" action={handleSubmit}>
        <h1 className="auth-h1">Bejelentkezés</h1>
        <label className="auth-label" htmlFor="email">
          Email cím
        </label>
        <input
          className="auth-input"
          name="email"
          type="email"
          placeholder="Email cím"
        />
        <label className="auth-label" htmlFor="password">
          Jelszó
        </label>
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Jelszó"
        />

        <button className="auth-btn" type="submit">
          Bejelentkezés
        </button>
        {session && !session.authorized && (
          <p className="auth-failed">Helytelen email vagy jelszó!</p>
        )}
        <a className="auth-underline" href="/auth/recover">
          Elfelejtetted a jelszavad?
        </a>
      </form>
    </section>
  );
}

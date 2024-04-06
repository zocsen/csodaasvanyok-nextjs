import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";

export default async function RegisterForm() {
  const session = await getSession();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    await login(formData);
    redirect("/");
  };

  return (
    <section className="auth-section center-section">
      <form className="auth-form" action={handleSubmit}>
        <h1 className="auth-h1">Regisztráció</h1>
        <label className="auth-label" htmlFor="email">
          Email
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
        <label className="auth-label" htmlFor="password">
          Jelszó ismét
        </label>
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Jelszó"
        />
        <button className="auth-btn" type="submit">
          Regisztráció
        </button>

        <a className="auth-underline" href="/auth/login">
          Vissza a bejelentkezéshez.
        </a>
      </form>
    </section>
  );
}

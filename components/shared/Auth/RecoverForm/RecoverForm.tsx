import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";

export default async function RecoverForm() {
  // const handleSubmit = async (formData: FormData) => {
  //   "use server";
  //   await login(formData);
  //   redirect("/");
  // };

  return (
    <section className="auth-section center-section">
      <form className="auth-form" /* action={handleSubmit}*/>
        <h1 className="auth-h1">Elfelejtett jelszó</h1>
        <p className="recover-p">
          Add meg a fiókodhoz tartozó e-mail címet, hogy megkaphasd a jelszó
          visszaállításához szükséges linket.
        </p>
        <label className="auth-label" htmlFor="email">
          Email cím
        </label>
        <input
          className="auth-input"
          name="email"
          type="email"
          placeholder="Email cím"
        />
        <button className="auth-btn" type="submit">
          Visszaállítás
        </button>

        <a className="auth-underline" href="/auth/login">
          Vissza a bejelentkezéshez
        </a>
      </form>
    </section>
  );
}

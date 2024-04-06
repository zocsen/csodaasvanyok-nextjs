export default function ToRegistrationForm() {
  return (
    <section className="auth-section">
      <form className="auth-form">
        <h1>Nincs még felhasználód?</h1>
        <a className="auth-btn" href="/auth/register">
          Regisztráció
        </a>
      </form>
    </section>
  );
}

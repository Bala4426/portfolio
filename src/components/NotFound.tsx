export function NotFound() {
  return (
    <main className="wrap notfound">
      <p className="kicker">404</p>
      <h1 className="hero__title">This page doesn’t exist.</h1>
      <p>
        <a className="link-arrow" href={import.meta.env.BASE_URL}>
          Back to the portfolio
        </a>
      </p>
    </main>
  );
}

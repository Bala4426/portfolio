import { profile } from '../data/profile';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="kicker">
          {profile.role} · {profile.location}
        </p>
        <h1 className="hero__title" id="hero-title">
          Fifteen years of publishing files taught me where they break. Now I write the code that catches it.
        </h1>
        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a className="link-arrow" href="#work">
            Read the work
          </a>
          <a className="link-plain" href={profile.resumeFile} download={profile.resumeDownloadName}>
            Download résumé (PDF)
          </a>
          <a className="link-plain" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <dl className="facts">
          {profile.facts.map((f) => (
            <div key={f.label} className="facts__item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

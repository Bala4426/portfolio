import { profile } from '../data/profile';

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <header className="section__head">
          <p className="section__num">04</p>
          <h2 id="contact-title">Contact</h2>
        </header>

        <p className="contact__lead">
          Hiring for Python backend or automation work in Madurai, or remote? Email is the quickest way to reach me.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className="contact__links">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.resumeFile} download={profile.resumeDownloadName}>
              Résumé (PDF)
            </a>
          </li>
          {profile.showPhone && (
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

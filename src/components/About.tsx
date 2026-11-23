import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';

export function About() {
  const [first, ...rest] = profile.about;

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <header className="section__head">
          <p className="section__num">02</p>
          <h2 id="about-title">About</h2>
        </header>

        <div className="about">
          <div className="about__text">
            <p className="dropcap">{first}</p>
            {rest.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <blockquote className="pullquote">
              <p>{profile.pullQuote}</p>
            </blockquote>
          </div>

          <aside className="about__skills" aria-label="Skills">
            {skillGroups.map((g) => (
              <div key={g.title} className="skillset">
                <h3 className="label">{g.title}</h3>
                <p>{g.items.join(', ')}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

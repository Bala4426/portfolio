import { education, experience } from '../data/experience';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <header className="section__head">
          <p className="section__num">03</p>
          <h2 id="exp-title">Experience</h2>
        </header>

        <ol className="timeline">
          {experience.map((r) => (
            <li key={r.title + r.period} className="role">
              <p className="role__period">{r.period}</p>
              <div>
                <h3 className="role__title">
                  {r.title} <span className="role__org">· {r.company}, {r.place}</span>
                </h3>
                <ul className="role__points">
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className="role">
            <p className="role__period">{education.period}</p>
            <div>
              <h3 className="role__title">
                {education.qualification} <span className="role__org">· {education.institution}</span>
              </h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

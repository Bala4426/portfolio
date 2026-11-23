import { projects } from '../data/projects';

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section__head">
          <p className="section__num">01</p>
          <h2 id="work-title">Selected work</h2>
        </header>

        <ol className="work">
          {projects.map((p, i) => (
            <li key={p.id} className={`case${i === 0 ? ' case--lead' : ''}`} id={p.id}>
              <div className="case__side">
                <p className="case__index">{String(i + 1).padStart(2, '0')}</p>
                <p className="case__kind">{p.kind}</p>
              </div>

              <div className="case__body">
                <h3 className="case__title">{p.title}</h3>
                <p className="case__summary">{p.summary}</p>

                {p.image && (
                  <figure className="case__figure">
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      width={p.image.width}
                      height={p.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{p.image.caption}</figcaption>
                  </figure>
                )}

                <div className="case__cols">
                  <div>
                    <h4 className="label">The problem</h4>
                    <p>{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="label">What I built</h4>
                    <ul className="case__list">
                      {p.built.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {p.result && (
                  <p className="case__result">
                    <span className="label">Result</span> {p.result}
                  </p>
                )}

                <p className="case__stack">{p.stack.join(' · ')}</p>
                {p.link && (
                  <a className="link-arrow" href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

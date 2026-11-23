import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>Built with React and Vite. Set in Newsreader and IBM Plex.</p>
      </div>
    </footer>
  );
}

import { FaGithubAlt } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';

type TileLinksProps = {
  deployUrl: string,
  repoUrl: string,
};

function TileLinks({ deployUrl, repoUrl }: TileLinksProps) {
  const classes = `p-1 rounded-md border border-zinc-800
  dark:border-white md:border-transparent
  hover:opacity-7
  md:hover:border-zinc-800 md:hover:dark:border-white flex gap-2`;
  return (
    <div
      className="absolute left-0 right-0 top-0
      flex justify-between text-2xl mx-1 md:mx-10 mt-1"
    >
      <a
        target="_blank"
        href={ deployUrl }
        aria-label="View deploy"
        rel="noreferrer"
        className={ classes }
      >
        <FaRocket />
        <span className="text-sm">Ver Deploy</span>
      </a>
      <a
        target="_blank"
        href={ repoUrl }
        aria-label="View repository"
        rel="noreferrer"
        className={ classes }
      >
        <span className="text-sm">Ver Repo</span>
        <FaGithubAlt />
      </a>
    </div>
  );
}

export default TileLinks;

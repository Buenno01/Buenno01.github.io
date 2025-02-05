type TileTechListProps = {
  techList: string[],
};

function TileTechList({ techList }: TileTechListProps) {
  return (
    <ul className="absolute bottom-7 flex gap-3 self-center">
      {
        techList.map((tech, i) => (
          <li
            className="rounded-lg border px-2 text-xs border-zinc-800 dark:border-white"
            key={ i }
          >
            {tech}

          </li>
        ))
      }
    </ul>
  );
}

export default TileTechList;

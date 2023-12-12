import { ProjectType } from '../../@types/type';

type SectionProjectTileProps = {
  project: ProjectType,
};

function SectionProjectTile({ project }: SectionProjectTileProps) {
  return (
    <div
      className="flex flex-col flex-grow hover:flex-grow-2
      overflow-hidden items-center relative hover:scale-150
      cursor-pointer hover:z-20 hover:shadow-2xl"
    >
      <div
        className="z-10
        h-28 w-full flex flex-col justify-center
        text-center opacity-0
        duration-700 transition-all

        hover:scale-150 hover:opacity-100
        hover:bg-gradient-to-r
        hover:from-white hover:via-transparent hover:to-white
        hover:dark:from-zinc-800 hover:dark:via-transparent hover:dark:to-zinc-800

        active:scale-150 active:opacity-100
        active:bg-gradient-to-r
        active:from-white active:via-transparent active:to-white
        active:dark:from-zinc-800 active:dark:via-transparent active:dark:to-zinc-800"
      >
        <h3 className="text-xl font-medium uppercase">
          {project.name}
        </h3>

      </div>

      <img
        className="z-0 absolute"
        src={ project.imgUrl }
        alt={ `${project.name} main page` }
      />
      <div />

    </div>
  );
}

export default SectionProjectTile;

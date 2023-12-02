type ProjectCardProps = {
  imageUrl: string,
};

function ProjectCard({ imageUrl }: ProjectCardProps) {
  return (
    <li
      style={ {
        backgroundImage: `url('${imageUrl}')`,
      } }
      className="flex-grow hover:flex-grow-2 hover:text-opacity-100
      bg-no-repeat duration-700 bg-center list-none bg-fixed bg-full"
    >
      <div
        className="flex flex-col justify-center opacity-0 text-white
        bg-opacity-40 hover:opacity-100
        items-center min-w-full min-h-full bg-black"
      >
        <h3 className="text-2xl">
          Nome do projeto
        </h3>
        <p>
          Leve descrição
        </p>
      </div>
    </li>
  );
}

export default ProjectCard;

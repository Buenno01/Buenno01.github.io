import { SkillType } from '../../@types/type';

type SectionSkillsGridProps = {
  skills: SkillType[],
  headline: string,
};

function SectionSkillsGrid({ headline, skills }: SectionSkillsGridProps) {
  return (
    <div
      className="sm:w-1/2 self-end data-reverse:self-start mt-2"
    >
      <h3 className="text-xl">
        {headline}
      </h3>
      <hr />
      <ul className="grid grid-cols-4 gap-4 my-4 lg:grid-cols-6">
        {skills.map((skill, i) => (
          <li key={ i } className="flex flex-col items-center h-16 relative">
            <span
              className="absolute bottom-5 text-4xl hover:bottom-6
              hover:text-zinc-900 hover:dark:text-zinc-300
              duration-200 transition-all"
            >
              <skill.Icon />
            </span>
            <p className="absolute bottom-0 text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SectionSkillsGrid;

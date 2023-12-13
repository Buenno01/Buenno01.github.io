import { useState } from 'react';
import { ProjectType } from '../../@types/type.ts';
import SectionProjectTile from './SectionProjectTile.tsx';

type SectionTileBoxProps = {
  projects: ProjectType[],
};

function SectionTileBox({ projects }: SectionTileBoxProps) {
  const [isOnId, setIsOnId] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col h-96 sm:w-1/2 mr-auto data-reverse:ml-auto">
      {projects.map((project, i) => (
        <SectionProjectTile
          isOnId={ isOnId }
          setIsOnId={ setIsOnId }
          id={ `${i}` }
          project={ project }
          key={ i }
        />
      ))}
    </div>
  );
}

export default SectionTileBox;

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '../../@types/type';
import { Tile } from './Tile';

type SectionProjectTileProps = {
  project: ProjectType,
  id: string,
  isOnId: string | undefined,
  setIsOnId: Dispatch<SetStateAction<string | undefined>>
};

function SectionProjectTile({ project, id, isOnId, setIsOnId }: SectionProjectTileProps) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (id === isOnId) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }, [isOnId, id]);

  function handleTouch() {
    if (id !== isOnId) {
      setIsOnId(id);
    } else {
      setIsOnId(undefined);
    }
  }

  return (
    <motion.div
      id={ id }
      className="flex flex-col flex-grow
      overflow-hidden items-center relative"
      onMouseEnter={ () => { setIsOnId(id); } }
      onMouseLeave={ () => { setIsOnId(undefined); } }
      onTouchEnd={ () => { handleTouch(); } }
      animate={ {
        flexGrow: isOn ? 2 : 1,
      } }
    >
      <motion.img
        className="absolute left-0 right-0 top-0"
        src={ project.imgUrl }
        animate={ {
          opacity: isOn ? 0.2 : 1,
        } }
      />
      <motion.div
        className={ `${isOn ? 'flex' : 'hidden'} z-20 
        h-full w-full flex-col justify-center
        text-center absolute` }
        animate={ {
          opacity: isOn ? 1 : 0,
        } }
      >
        <Tile.Links { ... project } />
        <h3 className="text-2xl font-medium uppercase">
          {project.name}
        </h3>
        <Tile.TechList techList={ project.techList } />
      </motion.div>
    </motion.div>
  );
}

export default SectionProjectTile;

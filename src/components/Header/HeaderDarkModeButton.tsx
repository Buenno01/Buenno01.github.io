import { ReactNode, useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

type HeaderDarkModeButtonProps = {
  DarkIcon: ReactNode,
  LightIcon: ReactNode,
};

function HeaderDarkModeButton({ DarkIcon, LightIcon } :HeaderDarkModeButtonProps) {
  const { isDarkMode, toggle } = useDarkMode(false);

  useEffect(() => {
    const rootElementClassList = document.documentElement.classList;

    if (isDarkMode) {
      rootElementClassList.add('dark');
    } else {
      rootElementClassList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <label
      className="rounded flex items-center justify-center
    hover:bg-zinc-300 dark:hover:bg-zinc-900 text-sm p-1"
    >
      <span
        className="text-2xl"
      >
        {
        isDarkMode ? DarkIcon : LightIcon
      }
      </span>
      <input
        className="hidden"
        type="checkbox"
        onChange={ () => { toggle(); } }
        aria-label="Toggle dark-mode"
        checked={ isDarkMode }
      />
    </label>
  );
}

export default HeaderDarkModeButton;

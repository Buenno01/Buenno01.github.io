import { ElementType } from 'react';

type HeaderBurguerButtonProps = {
  handleMenuVisibility: () => void,
  menuIsVisible: boolean,
  VisibleIcon: ElementType,
  NotVisibleIcon: ElementType,
};

const visibleMenuStyle = `
dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:active:bg-zinc-600
bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-50
`;

function HeaderBurguerButton({ handleMenuVisibility, NotVisibleIcon,
  VisibleIcon, menuIsVisible }: HeaderBurguerButtonProps) {
  return (
    <button
      onClick={ handleMenuVisibility }
      aria-label="show menu"
      className={ `text-4xl rounded
      hover:bg-zinc-200 active:bg-zinc-100
      dark:hover:bg-zinc-900 dark:active:bg-zinc-800 
      md:hidden
      ${menuIsVisible
        && visibleMenuStyle} ` }
    >
      {
        menuIsVisible
          ? <VisibleIcon />
          : <NotVisibleIcon />
      }
    </button>
  );
}

export default HeaderBurguerButton;

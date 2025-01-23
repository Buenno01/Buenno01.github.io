import { ComponentProps, JSX } from "react";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbPlugConnectedX } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

type SvgProps = ComponentProps<"svg">;

type IconProps = {
  iconKey: Icons | string;
} & SvgProps;

type IconMapper = {
  'react-js': JSX.Element;
  'tailwindcss': JSX.Element;
  'next-js': JSX.Element;
  'typescript': JSX.Element;
}

type Icons = keyof IconMapper;

function Icon({ iconKey, ...rest }: IconProps) {
  const mapper = {
    'react-js': <FaReact  { ...rest } />,
    'tailwindcss': <RiTailwindCssFill  { ...rest } />,
    'next-js': <SiNextdotjs  { ...rest } />,
    'typescript': <BiLogoTypescript  { ...rest } />,
  }

  return mapper[iconKey as Icons] || <TbPlugConnectedX  { ...rest } />;
}

export default Icon;
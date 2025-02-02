import { ComponentProps, JSX } from "react";
import { FaReact } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbPlugConnectedX } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";

type SvgProps = ComponentProps<"svg">;

type IconProps = {
  iconKey: Icons | string;
} & SvgProps;

type IconMapper = {
  'react-js': JSX.Element;
  'tailwindcss': JSX.Element;
  'next-js': JSX.Element;
  'typescript': JSX.Element;
  'liquid': JSX.Element;
  'mysql': JSX.Element;
  'nodejs': JSX.Element;
  'github': JSX.Element;
  'globe': JSX.Element;
  'document': JSX.Element;
  'frontend': JSX.Element;
  'tutorial': JSX.Element;
  'react': JSX.Element;
  'linkedin': JSX.Element;
}

type Icons = keyof IconMapper;

function Icon({ iconKey, ...rest }: IconProps) {
  const mapper = {
    'react-js': <FaReact  { ...rest } />,
    'react': <FaReact  { ...rest } />,
    'tailwindcss': <RiTailwindCssFill  { ...rest } />,
    'next-js': <SiNextdotjs  { ...rest } />,
    'typescript': <BiLogoTypescript  { ...rest } />,
    'liquid': <FaShopify  { ...rest } />,
    'mysql': <GrMysql  { ...rest } />,
    'nodejs': <FaNodeJs  { ...rest } />,
    'github': <FaGithub  { ...rest } />,
    'globe': <FaGlobeAmericas  { ...rest } />,
    'document': <IoDocumentText  { ...rest } />,
    'frontend': <IoCodeSlash  { ...rest } />,
    'tutorial': <PiStudentFill  { ...rest } />,
    'linkedin': <GrLinkedin  { ...rest } />,
  }

  return mapper[iconKey as Icons] || <TbPlugConnectedX  { ...rest } />;
}

export default Icon;
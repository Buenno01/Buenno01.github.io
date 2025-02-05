import { ComponentProps, JSX } from "react";
import {
  FaReact,
  FaGitAlt
} from "react-icons/fa6";
import {
  FaNodeJs,
  FaGlobeAmericas,
  FaGithub,
  FaShopify,
  FaHtml5,
  FaCss3Alt,
  FaDocker
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCypress,
  SiRedux,
  SiTestinglibrary,
  SiMocha,
  SiJest
} from "react-icons/si";
import {
  GrMysql,
  GrLinkedin
} from "react-icons/gr";
import {
  IoDocumentText,
  IoCodeSlash
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbPlugConnectedX } from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";

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
  'redux': JSX.Element;
  'react-testing-library': JSX.Element;
  'html': JSX.Element;
  'css': JSX.Element;
  'javascript': JSX.Element;
  'docker': JSX.Element;
  'mocha': JSX.Element;
  'jest': JSX.Element;
  'cypress': JSX.Element;
  'git': JSX.Element;
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
    'redux': <SiRedux  { ...rest } />,
    'react-testing-library': <SiTestinglibrary  { ...rest } />,
    'html': <FaHtml5  { ...rest } />,
    'css': <FaCss3Alt  { ...rest } />,
    'javascript': <BiLogoJavascript  { ...rest } />,
    'docker': <FaDocker  { ...rest } />,
    'mocha': <SiMocha  { ...rest } />,
    'jest': <SiJest  { ...rest } />,
    'cypress': <SiCypress  { ...rest } />,
    'git': <FaGitAlt  { ...rest } />,
  }

  return mapper[iconKey as Icons] || <TbPlugConnectedX  { ...rest } />;
}

export default Icon;
import Link from "next/link";

const NavLink = ({ name, path }) => {
  return <Link href={path}>{name}</Link>;
};

export default NavLink;

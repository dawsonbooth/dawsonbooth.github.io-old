import * as React from "react";

import { NavLink, NavLinkProps as ThemeUILinkProps } from "theme-ui";
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type NavLinkProps = ThemeUILinkProps &
  Optional<GatsbyLinkProps<object>, "to">;

export default (props: NavLinkProps) => {
  if (props.hasOwnProperty("to"))
    return <NavLink as={GatsbyLink} p={1} {...props} />;
  return (
    <NavLink
      p={1}
      sx={{
        cursor: "pointer",
      }}
      {...props}
    />
  );
};

export const IconNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink p={1} {...props} sx={{ width: 32, height: 32, ...props.sx }} />
);

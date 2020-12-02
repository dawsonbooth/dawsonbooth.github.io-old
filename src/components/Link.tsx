import * as React from "react";

import GatsbyLink, { GatsbyLinkProps } from "gatsby-link";

import {
  Link as ThemeUILink,
  LinkProps as ThemeUILinkProps,
  NavLink as ThemeUINavLink,
  NavLinkProps as ThemeUINavLinkProps,
} from "theme-ui";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type LinkProps = ThemeUILinkProps &
  Optional<GatsbyLinkProps<object>, "to">;

export const Link: React.FC<LinkProps> = (props) => {
  if (props.hasOwnProperty("to"))
    return <ThemeUILink as={GatsbyLink} {...props} />;
  const target =
    props.hasOwnProperty("href") && props.href.startsWith("http")
      ? "_blank"
      : "_self";
  return <ThemeUILink target={target} {...props} />;
};

export type NavLinkProps = ThemeUINavLinkProps &
  Optional<GatsbyLinkProps<object>, "to">;

export const NavLink: React.FC<NavLinkProps> = (props) => {
  if (props.hasOwnProperty("to"))
    return <ThemeUINavLink as={GatsbyLink} p={1} {...props} />;
  const target =
    props.hasOwnProperty("href") && props.href.startsWith("http")
      ? "_blank"
      : "_self";
  return (
    <ThemeUINavLink
      p={1}
      sx={{
        cursor: "pointer",
      }}
      target={target}
      {...props}
    />
  );
};

export const IconNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink p={1} {...props} sx={{ width: 32, height: 32, ...props.sx }} />
);

export default Link;

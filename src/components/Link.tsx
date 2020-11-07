import * as React from "react";

import { Link, LinkProps as ThemeUILinkProps } from "theme-ui";
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type LinkProps = ThemeUILinkProps &
  Optional<GatsbyLinkProps<object>, "to">;

export default (props: LinkProps) => {
  if (props.hasOwnProperty("to")) return <Link as={GatsbyLink} {...props} />;
  return <Link {...props} />;
};

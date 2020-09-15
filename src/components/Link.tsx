import * as React from "react";

import { Link, LinkProps as RebassLinkProps } from "rebass";
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
type LinkProps = RebassLinkProps & Optional<GatsbyLinkProps<object>, "to">;

export default (props: LinkProps) => {
  if (props.hasOwnProperty("to")) return <Link as={GatsbyLink} {...props} />;
  return <Link {...props} />;
};

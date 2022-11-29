// @ts-nocheck
const { React } = window;

interface ALinkProps {
  href: string;
  isExternal: boolean;
  [key: string]: any;
}

export const ALink = ({ href, isExternal, ...restProps }: ALinkProps) => (
  <a
    href={href}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    target={isExternal ? '_blank' : undefined}
    {...restProps}
  />
);

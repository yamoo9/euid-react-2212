import classNames from "classnames";
import { NavLink, LinkProps } from "react-router-dom";

export function AppLink({ className, ...restProps }: LinkProps): JSX.Element {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          "text-pink-500 hover:text-pink-900",
          isActive
            ? "text-sky-500 hover:text-sky-500 hover:cursor-not-allowed font-semibold"
            : "",
          className
        )
      }
      {...restProps}
    />
  );
}

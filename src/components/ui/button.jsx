import React from "react";

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  asChild = false,
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const baseClass = joinClasses(
    "inline-flex items-center justify-center transition",
    variant === "outline" ? "" : "",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: joinClasses(children.props.className, baseClass),
    });
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
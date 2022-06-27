function Link({
  className = "",
  href = "#",
  target = "_blank",
  rel = "noopener noreferrer",
  children,
}) {
  return (
    <a className={`link ${className}`} href={href} target={target} rel={rel}>
      {children} {/* text content or inner html of the link */}
    </a>
  );
}

export default Link;

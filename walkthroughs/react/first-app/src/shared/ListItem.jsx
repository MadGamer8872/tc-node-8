const ListItem = ({ children, id = "", onClick, className = "" }) => {
  return (
    <li id={id} onClick={onClick} className={`list-group-item ${className}`}>
      {children}
    </li>
  );
};

export default ListItem;

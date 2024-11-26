function CardUsers(props) {
  return (
    <a className="btn btn-primary" href={props.link}>
      <i className={props.icon}></i>
      {props.nombre}
    </a>
  );
}

export default CardUsers;

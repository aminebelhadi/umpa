import { Link } from "react-router-dom";

const VoirPlusLink = ({ to = "/", text = "Voir plus", icon, className = "", }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-2 ${className}`}
    >
      <h2 className={`voirPlusLink`}>{text}</h2>
      {icon && <img src={icon} width={24} alt="" />}
    </Link>
  );
};

export default VoirPlusLink;

import { Link } from "react-router-dom";

function SmallTitle({ title, bgColor, styled, to, color, pad }) {
  const styles = {
    homeHeaderTitle: {
      fontSize: "1.4rem",
      fontWeight: 500,
      letterSpacing: "0.06em",
      lineHeight: 1,
      padding: pad || "0.3rem 1.3rem",
      backgroundColor: bgColor,
      borderRadius: "3px",
      textTransform: "uppercase",
      color: color || "#fff",
      marginLeft: styled,
    },
  };

  return (
    <div>
      <Link to={to}>
        <span style={styles.homeHeaderTitle}>{title}</span>
      </Link>
    </div>
  );
}

export default SmallTitle;

import { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, type, weight }) => {
  const [alert, setAlert] = useState(false);

  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  function handleClick() {
    navigator.clipboard.writeText(hex).then(() => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    });
  }

  return (
    <article
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: hex }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

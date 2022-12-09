import rgbToHex from "./utils";

const SingleColor = ({ rgb, type, weight }) => {
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  return (
    <article
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: hex }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;

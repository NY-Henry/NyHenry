import cartoonLogo from "../assets/cartoon222.png";
const ImageComponent = () => {
  return (
    <img
      src={cartoonLogo}
      alt={"image"}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ImageComponent;

import profileImage from "../assets/profile.jpg";
const ImageComponent = () => {
  return (
    <img
      src={profileImage}
      alt={"image"}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ImageComponent;

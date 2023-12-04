const HeaderImage = ({ imgSource, altText, onClose }) => {
  return (
    <img
      src={imgSource}
      alt={altText}
      className="rounded-lg border hover:cursor-pointer"
      onClick={onClose}
    />
  );
};

export default HeaderImage;

const HeaderImage = ({ imgSource, altText, onClose }) => {
  return (
    <img
      src={imgSource}
      alt={altText}
      className="inline-block w-1/2 sm:w-1/3 md:w-1/4 h-auto mx-auto rounded-lg border m-6 hover:cursor-pointer"
      onClick={onClose}
    />
  );
};

export default HeaderImage;

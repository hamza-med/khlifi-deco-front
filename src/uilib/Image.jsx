const Image = ({ src, alt, className }) => {
  return (
    <div className="blur-load" >
      <img src={src} alt={alt} loading="lazy" className={className} />
    </div>
  );
};

export default Image;

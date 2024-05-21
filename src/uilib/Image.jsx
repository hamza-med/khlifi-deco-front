const Image = ({ src, alt, className ,key}) => {
  return (
    <div className="blur-load" key={key}>
      <img src={src} alt={alt} loading="lazy" className={className} />
    </div>
  );
};

export default Image;

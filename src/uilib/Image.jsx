import { forwardRef } from "react";

const Image = forwardRef(({ src, alt, className, onClick }, ref) => {
  return (
    <div className={`${className} img-container`}>
      <img
        onClick={onClick}
        src={src}
        alt={alt}
        className="responsive-image"
        ref={ref}
      />
    </div>
  );
});

export default Image;

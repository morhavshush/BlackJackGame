import React from "react";

const Image: React.FC<{
  image: string;
  alt: string;
  id?: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
}> = ({
  image,
  className,
  alt,
  disabled=false,
}) => {
  return (
      <div>
        <img className={className} src={image} alt={alt} />
      </div>
  );
};

export default Image;
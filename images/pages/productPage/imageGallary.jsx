import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryForInspacco = ({ images }) => {
  return (
    <>
      <ImageGallery items={images} showNav={false} showPlayButton={false} />
    </>
  );
};

export default ImageGalleryForInspacco;

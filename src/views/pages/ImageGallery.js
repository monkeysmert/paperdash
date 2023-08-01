import React, { useState, useEffect } from "react";
import { useFullscreen, useToggle } from "react-use";
import FullScreenImage from "./FullScreenImage";
import { useRef } from "react";

const ImageGallery = () => {
  const fsRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  const [currentFc, setCurrentFc] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const handleDelete = (index) => {
    setSelectedImage((prevImages) => {
      const updateImages = [...prevImages];
      updateImages.splice(index, 1);
      return updateImages;
    });
  };

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files);

    setSelectedImage((prevImages) => [...prevImages, ...newImages]);

    e.target.value = null;
  };

  return (
    <div className="w-100 ">
      <h1 className="text-center">Image Gallery</h1>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "4px",
        }}
        className="d-flex flex-column justify-content-start align-items-center px-4"
      >
        <div className="d-flex w-75 d-flex justify-content-center align-items-baseline mb-4">
          <label
            style={{
              color: "white",
            }}
            className="w-50 btn btn-info"
            htmlFor="fileInput"
          >
            Choose Images
          </label>
          <input
            id="fileInput"
            type="file"
            multiple
            style={{ display: "none" }}
            name="myImage"
            onChange={handleImageUpload}
          />

          <button
            className="w-50 btn btn-danger ml-4"
            onClick={() => setSelectedImage([])}
          >
            All Remove
          </button>
        </div>

        <div className="d-flex w-100 justify-content-start align-items-center flex-wrap">
          {selectedImage &&
            selectedImage.map((image, index) => {
              return (
                <div className="mr-4 mb-4 d-flex flex-column">
                  <img
                    style={{
                      width: "250px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    alt="not found"
                    src={URL.createObjectURL(image)}
                  />

                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger m-0 mb-2"
                  >
                    <i class="nc-icon nc-simple-remove"></i>Delete
                  </button>

                  <button
                    onClick={() => toggle(setCurrentFc(image))}
                    className="btn btn-success m-0"
                  >
                    full screen
                  </button>
                </div>
              );
            })}

          {selectedImage.length === 0 ? (
            <>
              <h3 className="text-center w-100">
                You do not have selected photos.
              </h3>
            </>
          ) : (
            <></>
          )}
        </div>

        <div ref={fsRef}>
          {isFullscreen && <FullScreenImage toggle={toggle} currentFc={currentFc} />}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

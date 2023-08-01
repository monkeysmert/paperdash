import React, { useState } from "react";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState([]);

  const handleDelete = (index) => {
    setSelectedVideo((prevVideos) => {
      const updateVideos = [...prevVideos];
      updateVideos.splice(index, 1);
      return updateVideos;
    });
  };

  const handleVideoUpload = (e) => {
    const newVideos = Array.from(e.target.files);

    setSelectedVideo((prevVideos) => [...prevVideos, ...newVideos]);

    e.target.value = null;
  };

  return (
    <div className="w-100 ">
      <h1 className="text-center">Video Gallery</h1>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "4px",
        }}
        className="d-flex flex-column justify-content-start align-items-center p-4 m-4"
      >
        <div className="d-flex w-75 justify-content-center align-items-baseline mb-4">
          <label
            style={{
              color: "white",
            }}
            className="w-50 btn btn-info"
            htmlFor="fileInputVideo"
          >
            Choose Videos
          </label>
          <input
            id="fileInputVideo"
            type="file"
            multiple
            style={{ display: "none" }}
            name="fileInputVideo"
            onChange={handleVideoUpload}
          />

          <button
            className="w-50 btn btn-danger ml-4"
            onClick={() => setSelectedVideo([])}
          >
            All Remove
          </button>
        </div>

        <div className="d-flex w-100 justify-content-start align-items-center flex-wrap">
          {selectedVideo &&
            selectedVideo.map((video, index) => {
              return (
                <div className="mr-4 mb-4 d-flex flex-column">
                  <video
                    style={{
                      width: "300px",
                      height: "175px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    controls
                  >
                    <source src={URL.createObjectURL(video)} />
                  </video>

                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger m-0"
                  >
                    <i class="nc-icon nc-simple-remove"></i>Delete
                  </button>
                </div>
              );
            })}

          {selectedVideo.length === 0 ? (
            <>
              <h3 className="text-center w-100">
                You do not have selected videos.
              </h3>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

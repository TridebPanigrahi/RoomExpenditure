import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleToggleCamera = () => {
    setIsFrontCamera(!isFrontCamera);
  };

  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={!isFrontCamera}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button onClick={handleToggleCamera}>
        Toggle Camera ({isFrontCamera ? 'Front' : 'Back'})
      </button>
      <button onClick={handleCapturePhoto}>Capture Photo</button>
      {capturedImage && <img src={capturedImage} alt="Captured" className="captured-image" />}
    </div>
  );
};

export default Camera;

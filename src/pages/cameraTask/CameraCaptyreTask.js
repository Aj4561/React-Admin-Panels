import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Webcam from 'react-webcam';
import html2canvas from 'html2canvas';

function CameraCapture() {
    const [capturedImages, setCapturedImages] = useState([]);

    const webcamRef = React.useRef(null);
  
    const captureImage = async () => {
      const video = webcamRef.current.video;
      const canvas = document.createElement('canvas');
      canvas.width = video.width;
      canvas.height = video.height;
  
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, video.width, video.height);
  
      const imageDataURL = canvas.toDataURL('image/png');
      setCapturedImages((prevImages) => [...prevImages, imageDataURL]);
    };
  
    const clearCapturedImages = () => {
      setCapturedImages([]);
    };
    console.log(html2canvas);
  
    return (
        <div className="component-container">
            <p>This is camera Task</p>
            <div className="main-container">
                <Card>
                    <div>
                        <Webcam ref={webcamRef} />
                        <button onClick={captureImage}>Capture</button>
                        <button onClick={clearCapturedImages}>Clear Captured Images</button>

                        <div>
                            {capturedImages.map((image, index) => (
                                <img key={index} src={image} alt={`Captured ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default CameraCapture;
// video.js

const express = require('express');
const AWS = require('aws-sdk');
const router = express.Router();
const S3 = new AWS.S3();

// Function to get the video from S3
const getVideoFromS3 = (videoId) => {
  const params = {
    Bucket: 'tn-video-streaming-platform', // Replace with your S3 bucket name
    Key: `https://tn-video-streaming-platform.s3.us-east-1.amazonaws.com/Videos/`, // Video file path in S3
  };

  return S3.getObject(params).promise(); // Fetch the video file
};

// Streaming the video to the client
router.get('/stream/:videoId', async (req, res) => {
  const { videoId } = req.params;

  try {
    // Get video from S3
    const video = await getVideoFromS3(videoId);

    res.writeHead(200, {
      'Content-Type': 'video/mp4', // Set the content type
      'Content-Length': video.ContentLength, // Set the content length for streaming
    });

    // Pipe the video stream to the response
    const videoStream = video.Body;
    videoStream.pipe(res);

  } catch (error) {
    res.status(500).json({ error: 'Error fetching video from S3.' });
  }
});

module.exports = router;

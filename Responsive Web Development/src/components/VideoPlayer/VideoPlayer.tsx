import React from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
  type: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type,
  width = "100%",
  height = "auto",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false
}) => {
  return (
    <div className={styles.videoContainer} style={{ width, height }}>
      <video
        className={styles.video}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

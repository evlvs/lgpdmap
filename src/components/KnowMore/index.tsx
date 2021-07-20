import * as React from 'react';
import videojs from "video.js";

// const { Play, Pause } = require('react-feather')
import "video.js/dist/video-js.css";

interface VideoPlayerPropsInferface {
  videoJsOptions: videojs.PlayerOptions;
}

export default class KnowMore extends React.Component {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement;

  constructor(props: VideoPlayerPropsInferface) {
    super(props);
    this.player = undefined;
    this.videoNode = undefined;
  }

  componentDidMount() {

    this.player = videojs(this.videoNode, this.props).ready(function() {
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  
  render() {
    return (
      <div className="c-player">
        <div className="knowMore">
          <div className="ballsColored"></div>
          <div className="ballsOutlined"></div>
          <h2>
            Conheça mais da Lgpd<span>map</span>
          </h2>
          <div className="c-player__screen" data-vjs-player="true">
            <video ref={(node: HTMLVideoElement) => this.videoNode = node} className="video-js vjs-lgpd" />
            <div className="videoIcons">
              <img src="./assets/twitterIcon.svg" alt="Twitter" className="twitterIcons" />
              <img src="./assets/sendIcon.svg" alt="Send" className="sendIcons" />
              <img src="./assets/loveIcon.svg" alt="Love" className="loveIcons" />
              <img src="./assets/likeIcon.svg" alt="Like" className="likeIcons" />
              <img src="./assets/mailIcon.svg" alt="Mail" className="mailIcons" />
            </div>
          </div>
          <div className="grayWave"></div>
        </div>
      </div>
    );
  }
}
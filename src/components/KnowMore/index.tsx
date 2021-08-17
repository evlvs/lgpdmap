import React from 'react'
import videojs from 'video.js'

import 'video.js/dist/video-js.css'
import styles from './styles.module.scss'

interface VideoPlayerPropsInterface {
  videoJsOptions: videojs.PlayerOptions
}

export default class KnowMore extends React.Component {
  private player?: videojs.Player
  private videoNode?: HTMLVideoElement

  constructor(props: VideoPlayerPropsInterface) {
    super(props)
    this.player = undefined
    this.videoNode = undefined
  }

  componentDidMount(): void {
    this.player = videojs(this.videoNode, this.props).ready()
  }

  componentWillUnmount(): void {
    if (this.player) {
      this.player.dispose()
    }
  }

  render(): JSX.Element {
    return (
      <>
        <div className={styles.cplayer}>
          <div className={styles.knowMore}>
            <div className="ballsRC"></div>
            <div className="ballsRO"></div>
            <h2>
              Conheça o Lgpd<span>map</span>
            </h2>
            <div className="c-player__screen" data-vjs-player="true">
              <video
                ref={(node: HTMLVideoElement) => (this.videoNode = node)}
                className="video-js vjs-lgpd"
              />
              <div className="videoIcons">
                <img
                  src="./assets/twitterIcon.svg"
                  alt="Twitter"
                  className="twitterIcons"
                />
                <img
                  src="./assets/sendIcon.svg"
                  alt="Send"
                  className="sendIcons"
                />
                <img
                  src="./assets/loveIcon.svg"
                  alt="Love"
                  className="loveIcons"
                />
                <img
                  src="./assets/likeIcon.svg"
                  alt="Like"
                  className="likeIcons"
                />
                <img
                  src="./assets/mailIcon.svg"
                  alt="Mail"
                  className="mailIcons"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grayWave}></div>
      </>
    )
  }
}

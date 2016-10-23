import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.less';
import React from 'react';
import ScrollingText from './ScrollingText';

//const text = "Welcome to the stream!!  I am a father, software developer and a casual gamer.  I stream some of my programming sessions as well as Overwatch, Hearthstone, Clash of Clans, Clash Royale, Don't Starve plus whatever else catches my fancy.  I'm here to have fun and I hope you do as well."
const text = "Welcome to the stream!!  I love tower defense and collectible card games.  I am also a lover of the original Plants vz Zombies.  Recently found PvZ: Heroes and am super stoked to see the PvZ franchise move into the collectible card game genre.  Have any requests?  Let me know what you'd like to see.  https://discord.gg/cHNyN to voice chat with me.";
export default class App extends React.Component {
  render() {
    return (
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeColumnCenter}>
          <div className={styles.marqueeTop} />
          <div className={styles.marqueeCenter}>
            <ScrollingText text={text} width={1083} speed={3}/>
          </div>
          <div className={styles.marqueeBottom} />
        </div>
        <div className={styles.marqueeColumnLeft}>
          <div className={styles.marqueeLeft} />
        </div>

        <div className={styles.marqueeColumnRight}>
          <div className={styles.marqueeRight} />
        </div>
      </div>
    )
  }
}

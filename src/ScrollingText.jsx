import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';

export default class App extends React.Component {
  static defaultProps = { text: '', width: 100, gap: 200 };

  state = { offset: 0, textWidth: Infinity };

  componentDidMount() {
    const tick = () => {
      let { offset } = this.state;
      const { speed } = this.props;
      const textWidth = this.refs.text0.offsetWidth;

      offset -= speed;
      if (offset < -textWidth-100) {
        offset += textWidth;
      }
      this.setState({ offset, textWidth });
      raf(tick);
    }
    raf(tick);
  }


  render() {
    const { text, width, gap } = this.props;
    const { textWidth = width, offset } = this.state;

    const texts = [];
    for (let i = 0; i < 3; i++) {
      texts.push((<span ref={`text${i}`} className={styles.marqueeText} style={{
        left: offset
      }}>{text}</span>));
    }
    return (
      <div ref='root' className={styles.marquee}>
        {texts}
      </div>
    )
  }
}

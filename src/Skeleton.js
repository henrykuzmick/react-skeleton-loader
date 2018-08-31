// @flow

import './skeleton.css';
import React from 'react';

type Props = {
  width: string,
  height: string,
  widthRandomness: number,
  heightRandomness: number,
  borderRadius: string,
  color: string,
  count: number,
  animated: boolean
}

const Skeleton = (props: Props) => {
  const w = parseFloat(props.width);
  const h = parseFloat(props.height);
  const wm = props.width.toString().replace(/\d+/g, '');
  const hm = props.height.toString().replace(/\d+/g, '');
  const { borderRadius, color } = props;
  const elements = [];

  for (let i = 0; i < props.count; i++) {
    const width = `${w - (Math.random() * w * props.widthRandomness)}${wm}`;
    const height = `${h - (Math.random() * h * props.heightRandomness)}${hm}`;
    elements.push(
      <span
        className={`react-skeleton-load ${props.animated ? 'animated' : ''}`}
        key={i}
        style={{
          width,
          height,
          borderRadius,
          backgroundColor: color
        }}
      >
        &zwnj;
      </span>
    );
    if (i !== props.count - 1) {
      elements.push(<br key={`br-${i}`} />);
    }
  }

  return (
    <span>
      { elements }
    </span>
  );
};

Skeleton.defaultProps = {
  width: '150px',
  height: '100%',
  widthRandomness: 0.25,
  heightRandomness: 0,
  borderRadius: '8px',
  color: '#EFF1F6',
  count: 1,
  animated: true
};

export default Skeleton;

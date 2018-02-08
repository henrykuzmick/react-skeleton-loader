import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Skeleton from '../src/Skeleton';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const textBlockElements = [];
for (let i = 0; i < 3; i++) {
  textBlockElements.push(
    <div className="row mt-5">
      <div className="col-6">
        <h1>
          <Skeleton width="400px" />
        </h1>
        <p>
          <Skeleton width="350px" count={5}/>
        </p>
      </div>
      <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur<br />
          sed do eiusmod tempor incididunt<br />
          ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam, quis nostrud exercitation<br />
          ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
      </div>
    </div>
  );
};

storiesOf('Skeleton', module)
  .add('Text Block', () => (
    <div className="container">
      { textBlockElements }
    </div>
  ));

const customListElements = [];
for (let i = 0; i < 5; i++) {
  customListElements.push(
    <div className="row mt-5">
      <div className="col-6">
        <div className="d-flex">
          <Skeleton width="100px" height="100px" borderRadius="30px" widthRandomness={0} />
          <div className="ml-3">
            <h2 className="mt-1">
              <Skeleton width="250px" />
            </h2>
            <p>
              <Skeleton width="200px" count={2} />
            </p>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex">
          <div
            className="d-flex align-items-center justify-content-center" 
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '30px',
              backgroundColor: '#5FB500',
              color: 'white'
            }}
          >
            <h3>JS</h3>
          </div>
          <div className="ml-3">
            <h2 className="mt-1">
              John Smith
            </h2>
            <p>
              Acount Man <br />
              Some other info
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

storiesOf('Skeleton', module)
  .add('Custom List', () => (
    <div className="container">
      { customListElements }
    </div>
  ));

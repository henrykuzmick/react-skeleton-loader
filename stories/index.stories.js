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

storiesOf('Skeleton', module)
  .add('Text Block', () => (
    <div className="container">
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
    </div>
  ));

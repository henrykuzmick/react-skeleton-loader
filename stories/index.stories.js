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
    <div>
      <h1>
        <Skeleton width="400px" />
      </h1>
      <p>
        <Skeleton width="350px" count={5}/>
      </p>
    </div>
  ));

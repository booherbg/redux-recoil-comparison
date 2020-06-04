import React from 'react';
import { render } from 'react-dom';
import Counter from "./Counter";
import { RecoilRoot } from 'recoil';

render(
  <RecoilRoot>
    <Counter />
  </RecoilRoot>,
  document.getElementById('root')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {CustomDate} from './custom-date'
import { Header } from './header'


ReactDOM.render(
<div>
  <CustomDate />
  <Header text="propsのテスト1" />  
  <Header text="propsのテスト2" />  
  <h1>this is test</h1>
  <p>this is paragraph</p>
  <a href="#">Click me</a>

</div>, document.querySelector('#root'));

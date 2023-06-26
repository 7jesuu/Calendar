import React from 'react';
import { Calendar } from './components/Calendar/Calendar';

import './static/css/global.css';
import { createYear } from './utils/helpers/date/createYear';

console.log('createDate', createYear({locale: 'en-US'}).createYearMonthes());

export const App: React.FC = () => (
<div className='app_container'>
  <Calendar />
  </div>
);
export default App;

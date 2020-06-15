import React from 'react'

import Components from '../../Components/';
import data from './dataFake';

function Dashboard() {

  return (
    <div>
      <Components nameComponent="header"  />
      <Components nameComponent="taskList" data={data}  />
    </div>
  );
}

export default Dashboard;
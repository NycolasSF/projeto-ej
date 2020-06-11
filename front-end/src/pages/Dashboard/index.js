import React from 'react'

import Components from '../../Components/';

function Dashboard() {
  
  const data = [
    {
      title: "Harry Potter",
      image:
        "https://aparecidaliberato.com.br/wp-content/uploads/2017/06/harry_potter_02.jpg",
      initData: "1562273",
      endData: "1562273",
      type: "movie",
      percentCompleted: '50%',
      userId: 1,
      phases: [
        {
          title: "Pedra Filosofal",
          finished: "true",
        },
        {
          title: "Camerâ Secreta",
          finished: "false",
        },
      ],
    },
    {
      title: "Game of Thrones",
      image:
        "https://i0.wp.com/assets.propmark.com.br/legacy/upload/2019/03/5c82a81f09bf2-5c82a84aedf02-980x480.jpg?resize=720%2C353&ssl=1",
      initData: "1562273",
      endData: "1562273",
      type: "series",
      percentCompleted: '50%',
      userId: 1,
      phases: [
        {
          title: "1 Temporada",
          finished: "false",
        },
        {
          title: "2 Temporada",
          finished: "false",
        },
      ],
    },
  ];

  return (
    <header>
      <Components nameComponent="header" />
      <Components nameComponent="buttonSend" />
      <Components nameComponent="buttonFacebook" />
      <Components nameComponent="buttonGoogle" />
      <Components nameComponent="taskList" data={data} />
    </header>
  );
}

export default Dashboard;
import React from 'react'

import Header from "../../Components/Header";
import ListTask from "../../Components/ListTask";
import data from './dataFake';

import './style.css';

function Dashboard() {

  return (
    <div>
      <Header />
      
      <div className="container-info">
        <div className="content-left">
          <div className="info-image" style={{ backgroundImage: `url("https://i.uai.com.br/kheslz0kCzthWM14dYcVJAJBFRw=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2020/06/19/259612/20200619134111541378a.jpeg")`}}></div>
          <div className="info-text">
            <h2>Xuxa</h2>
            <p>xuxa@baixinhos.xcom</p>
          </div>
        </div>
        <div className="content-right">
          <p> <strong>10</strong> / 10</p>
          <p> <strong>finalizadas</strong> / cadastradas</p>
        </div>
      </div>

      <ListTask data={data}  />
    </div>
  );
}

export default Dashboard;
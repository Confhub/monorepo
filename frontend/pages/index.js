import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import MainContext from '../context/MainContext';
const Map = dynamic(import('../components/home/Map'), { ssr: false });
import Sidebar from '../components/home/Sidebar';
import 'mapbox-gl/dist/mapbox-gl.css';

const { Header } = Layout;

export default class Hello extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <MainContext.Provider>
          <div className="map">
            <Map />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </MainContext.Provider>
        <style jsx>{`
          .home {
            width: 100vw;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 450px;
            grid-template-rows: 50px 1fr;
            grid-template-areas:
              'header header'
              'map sidebar';
          }

          .header {
            grid-area: header;
          }

          .map {
            grid-area: map;
          }

          .sidebar {
            grid-area: sidebar;
            background-color: #fff;
          }
        `}</style>
      </div>
    );
  }
}

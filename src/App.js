import React, { useEffect, useState } from 'react';
import Flexbox from 'flexbox-react';
import './App.scss';
import 'antd/dist/antd.less';
import { Layout } from 'antd';
import Home from './view/home';
import Menu from './components/menu';
import InitialLoadingState from './components/initialLoadingState';
import VerticalIcons from './components/verticalIcons';
import background from './assets/background3.jpg';
import Modal from './components/modal';
import UnderConstruction from './view/underConctruction';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [])

  return (
    <Flexbox className="app" justifyContent="center" style={{ backgroundImage: `url(${background})` }}>
      {isLoading ? <InitialLoadingState /> :
        <Flexbox className="content-well" flexDirection="column">
          <Menu />
          <Flexbox className="content" alignItems="center" flex="1">
            <VerticalIcons />
            <Home />
          </Flexbox>
        </Flexbox>
      }
      {showModal &&
        <Modal
          toggleModal={() => setShowModal(!showModal)}
        >
          <UnderConstruction />
        </Modal>
      }
    </Flexbox>
  )
}

export default App;
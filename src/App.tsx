import { Routes, Route } from 'react-router-dom';
import { Board, NavBar } from 'components';
import { Boards, Home } from 'views';

import * as Styled from './App.styled';

const App = () => {
  return (
    <Styled.App>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/:boardSlug" element={<Board />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Styled.App>
  );
};

export default App;

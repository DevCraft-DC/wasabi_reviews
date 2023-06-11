import { useEffect, useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Food from './pages/Food/Food';
import Other from './pages/Other/Other';
import Staff from './pages/Staff/Staff';
import Thanks from './pages/Thanks/Thanks';
import UserInfo from './pages/UserInfo/UserInfo';
import Home from './pages/Home/Home';
import Choose from './pages/Choose/Choose';
import { Layout } from './components/Layout/Layout';

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialLoad) {
      navigate('/');
    }
    setInitialLoad(false);
  }, []);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/food" element={<Food />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/other" element={<Other />} />
        <Route path="/thanks" element={<Thanks />} />
      </Route>
    </Routes>
  );
};

export default App;

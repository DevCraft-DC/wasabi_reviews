import { Routes, Route } from 'react-router-dom';

import Food from './pages/Food/Food';
import Other from './pages/Other/Other';
import Staff from './pages/Staff/Staff';
import Thanks from './pages/Thanks/Thanks';
import UserInfo from './pages/UserInfo/UserInfo';
import Home from './pages/Home/Home';
import Choose from './pages/Choose/Choose';
import { Layout } from './components/Layout/Layout';

const App = () => (
  <Routes>
    <Route path="/wasabi_reviews" element={<Layout />}>
      <Route path="/wasabi_reviews" element={<Home />} />
      <Route path="/wasabi_reviews/userinfo" element={<UserInfo />} />
      <Route path="/wasabi_reviews/choose" element={<Choose />} />
      <Route path="/wasabi_reviews/food" element={<Food />} />
      <Route path="/wasabi_reviews/staff" element={<Staff />} />
      <Route path="/wasabi_reviews/other" element={<Other />} />
      <Route path="/wasabi_reviews/thanks" element={<Thanks />} />
    </Route>
  </Routes>
);

export default App;

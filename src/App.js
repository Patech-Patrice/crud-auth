import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import Dashboard from './FigmaComponents/Dashboard';
import Colors from './FigmaComponents/Colors';
import Typography from './FigmaComponents/Typography';
import Icons from './FigmaComponents/Icons';
import Thumbnail from './FigmaComponents/Thumbnail';
import Logo from './FigmaComponents/Logo';
import Info from './FigmaComponents/info';
import Chevrondown from './FigmaComponents/chevrondown';
import NavList from './FigmaComponents/NavList';
import Chat from './FigmaComponents/chat';
import Indicator from './FigmaComponents/Indicator';
import Logout from './FigmaComponents/logout';
import Chart from './FigmaComponents/chart';
import Case from './FigmaComponents/Case';
import User from './FigmaComponents/user';
import Checkout from './FigmaComponents/checkout';
import Settings from './FigmaComponents/settings';
import Filter from './FigmaComponents/Filter';
import Filter_1 from './FigmaComponents/Filter_1';
import More from './FigmaComponents/more';
import CircleChart from './FigmaComponents/CircleChart';
import Users from './FigmaComponents/users';
import Up from './FigmaComponents/up';
import Card from './FigmaComponents/Card';
import Check from './FigmaComponents/check';
import Down from './FigmaComponents/down';
import Arrowright from './FigmaComponents/arrowright';
import Search from './FigmaComponents/search';
import Bell from './FigmaComponents/bell';
import Arrows from './FigmaComponents/arrows';
import Status from './FigmaComponents/Status';
import More_1 from './FigmaComponents/more_1';
import Status_1 from './FigmaComponents/Status_1';
import Status_Delivery from './FigmaComponents/Status_Delivery';
import Status_2 from './FigmaComponents/Status_2';
import './App.css';




const App = () => {

const authCtx = useContext(AuthContext);

  return (
    <div className="App">
         <Layout>
           <Routes>
                <Route path='/' element={<HomePage/>} /> 
                 {!authCtx.isLoggedIn && (
                <Route path="/auth" element={<AuthPage />} /> 
              )}
              { authCtx.isLoggedIn && (
               <Route path="/profile" element={<UserProfile />} />
              )}
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/colors" element={<Colors />} /> 
                <Route path="/typography" element={<Typography />} /> 
                <Route path="/icons" element={<Icons />} /> 
                <Route path="/thumbnail" element={<Thumbnail />} /> 
                <Route path="/logo" element={<Logo />} /> 
                <Route path="/info" element={<Info />} /> 
                <Route path="/chevrondown" element={<Chevrondown />} /> 
                <Route path="/navlist" element={<NavList />} /> 
                <Route path="/chat" element={<Chat />} /> 
                <Route path="/indicator" element={<Indicator />} /> 
                <Route path="/logout" element={<Logout />} /> 
                <Route path="/chart" element={<Chart />} /> 
                <Route path="/case" element={<Case />} /> 
                <Route path="/user" element={<User />} /> 
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="/settings" element={<Settings />} /> 
                <Route path="/filter" element={<Filter />} /> 
                <Route path="/filter_1" element={<Filter_1 />} /> 
                <Route path="/more" element={<More />} /> 
                <Route path="/circlechart" element={<CircleChart />} /> 
                <Route path="/users" element={<Users />} /> 
                <Route path="/up" element={<Up />} /> 
                <Route path="/card" element={<Card />} /> 
                <Route path="/check" element={<Check />} /> 
                <Route path="/down" element={<Down />} /> 
                <Route path="/arrowright" element={<Arrowright />} /> 
                <Route path="/search" element={<Search />} /> 
                <Route path="/bell" element={<Bell />} /> 
                <Route path="/arrows" element={<Arrows />} /> 
                <Route path="/status" element={<Status />} /> 
                <Route path="/more_1" element={<More_1 />} /> 
                <Route path="/status_1" element={<Status_1 />} /> 
                <Route path="/status_delivery" element={<Status_Delivery/>} /> 
                <Route path="/status_2" element={<Status_2 />} /> 
                


               

          </Routes>
      </Layout>
    </div>
  );
}

export default App;


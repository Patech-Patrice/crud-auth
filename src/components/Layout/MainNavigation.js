import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

 const authCtx = useContext(AuthContext);

 const logoutHandler = () => {
    authCtx.logout();
    
 };

 const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Design Demo</div>
      </Link>
      <nav>
        <ul>
            {!isLoggedIn && ( 
          <li>
            <Link to='/auth'>Login</Link>
          </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to='/profile'>User Dashboard</Link>
              </li>
           )}
    

          {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

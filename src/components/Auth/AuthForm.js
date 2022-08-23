import { useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import './../ReactDemoLandingPage/ReactDemoLandingPage.css'
import ImgAsset from '../../public';



const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    let url; 
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ'
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        }
      ).then(res => {
        if (res.ok) {
          return res.json();
        } else {
         return res.json().then(data => {
            //show error modal or message
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            //   console.log(data);
            // }
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
        //user has been successfully created store token
       //construct new timestamp based on token expiration time
       //sets a timer to expire 1 hr after default
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
         //set token with auth context
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/profile');
        console.log(data);
      }).catch(err => {
        alert(err.message);
      });
   };
  
  return (
    <div className='ReactDemoLandingPage_ReactDemoLandingPage'>
      	<div className='Layer2'>
					<div className=''>
          <div className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}> 
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button type='button' className={classes.toggle} onClick={switchAuthModeHandler} >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      </div>
					</div>
				</div>

        <div className='Group'>
    {/* FIgma design logic here */}
    <div className='OBJECTS'>
    <img alt='' className='Rectangle_5' src = {ImgAsset.ReactDemoLandingPage_Rectangle_5} />
					<div className='Group_1'>
						<img alt='' className='Rectangle_6' src = {ImgAsset.ReactDemoLandingPage_Rectangle_6} />
					</div>
					<img alt='' className='Rectangle_7' src = {ImgAsset.ReactDemoLandingPage_Rectangle_7} />
          <div className='Group_2'>
          <div className='Group_3'>
							<img alt='' className='Vector_5' src = {ImgAsset.ReactDemoLandingPage_Vector_5} />
							<img alt='' className='Vector_6' src = {ImgAsset.ReactDemoLandingPage_Vector_6} />
							<img alt='' className='Vector_7' src = {ImgAsset.ReactDemoLandingPage_Vector_7} />
							<img alt='' className='Vector_8' src = {ImgAsset.ReactDemoLandingPage_Vector_8} />
							<img alt='' className='Vector_9' src = {ImgAsset.ReactDemoLandingPage_Vector_9} />
							<img alt='' className='Vector_10' src = {ImgAsset.ReactDemoLandingPage_Vector_10} />
						</div>
            <div className='Group_4'>
							<img alt='' className='Vector_11' src = {ImgAsset.ReactDemoLandingPage_Vector_11} />
						</div>
            <img alt='' className='Vector_12' src = {ImgAsset.ReactDemoLandingPage_Vector_12} />
						<img alt='' className='Vector_13' src = {ImgAsset.ReactDemoLandingPage_Vector_13} />
						<img alt='' className='Vector_14' src = {ImgAsset.ReactDemoLandingPage_Vector_14} />
						<img alt='' className='Vector_15' src = {ImgAsset.ReactDemoLandingPage_Vector_15} />
            {/* Group_2 closing tag */}
            </div>
            <div className='Group_5'>
						<img alt='' className='Vector_16' src = {ImgAsset.ReactDemoLandingPage_Vector_16} />
						<img alt='' className='Vector_17' src = {ImgAsset.ReactDemoLandingPage_Vector_17} />
						<img alt='' className='Vector_18' src = {ImgAsset.ReactDemoLandingPage_Vector_18} />
						<img alt='' className='Vector_19' src = {ImgAsset.ReactDemoLandingPage_Vector_19} />
					</div>
					<div className='Group_6'>
						<img alt='' className='Rectangle_8' src = {ImgAsset.ReactDemoLandingPage_Rectangle_8} />
					</div>
					<div className='Group_7'>
						<img alt='' className='Rectangle_9' src = {ImgAsset.ReactDemoLandingPage_Rectangle_9} />
					</div>
					<div className='Group_8'>
						<img alt='' className='Rectangle_10' src = {ImgAsset.ReactDemoLandingPage_Rectangle_10} />
					</div>
					<img alt='' className='Vector_20' src = {ImgAsset.ReactDemoLandingPage_Vector_20} />
					<img alt='' className='Vector_21' src = {ImgAsset.ReactDemoLandingPage_Vector_21} />
          <div className='Group_9'>
          <div className='Group_10'>
							<img alt='' className='Rectangle_11' src = {ImgAsset.ReactDemoLandingPage_Rectangle_11} />
						</div>
            <div className='Group_11'>
            <img alt='' className='Rectangle_12' src = {ImgAsset.ReactDemoLandingPage_Rectangle_12} />
							<div className='Group_12'>
								<img alt='' className='Rectangle_13' src = {ImgAsset.ReactDemoLandingPage_Rectangle_13} />
							</div>
              {/* Group_11 closing div */}
              </div>
            {/* Group_9 closing div */}
            </div>

            <img alt='' className='Rectangle_14' src = {ImgAsset.ReactDemoLandingPage_Rectangle_14} />
					<img alt='' className='Vector_22' src = {ImgAsset.ReactDemoLandingPage_Vector_22} />
					<img alt='' className='Vector_23' src = {ImgAsset.ReactDemoLandingPage_Vector_23} />
          <div className='Group_13'>
						<img alt='' className='Rectangle_15' src = {ImgAsset.ReactDemoLandingPage_Rectangle_15} />
					</div>
          <div className='Group_14'>
						<img alt='' className='Rectangle_16' src = {ImgAsset.ReactDemoLandingPage_Rectangle_16} />
					</div>
          <div className='Group_15'>
						<img alt='' className='Vector_24' src = {ImgAsset.ReactDemoLandingPage_Vector_24} />
						<img alt='' className='Vector_25' src = {ImgAsset.ReactDemoLandingPage_Vector_25} />
						<img alt='' className='Vector_26' src = {ImgAsset.ReactDemoLandingPage_Vector_26} />
						<img alt='' className='Vector_27' src = {ImgAsset.ReactDemoLandingPage_Vector_27} />
					</div>
					<div className='Group_16'>
						<img alt='' className='Vector_28' src = {ImgAsset.ReactDemoLandingPage_Vector_28} />
						<img alt='' className='Vector_29' src = {ImgAsset.ReactDemoLandingPage_Vector_29} />
						<img alt='' className='Vector_30' src = {ImgAsset.ReactDemoLandingPage_Vector_30} />
					</div>
					<div className='Group_17'>
						<img alt='' className='Vector_31' src = {ImgAsset.ReactDemoLandingPage_Vector_31} />
						<img alt='' className='Vector_32' src = {ImgAsset.ReactDemoLandingPage_Vector_32} />
						<img alt='' className='Vector_33' src = {ImgAsset.ReactDemoLandingPage_Vector_33} />
					</div>
					<div className='Group_18'>
						<img alt='' className='Vector_34' src = {ImgAsset.ReactDemoLandingPage_Vector_34} />
						<img alt='' className='Vector_35' src = {ImgAsset.ReactDemoLandingPage_Vector_35} />
						<img alt='' className='Vector_36' src = {ImgAsset.ReactDemoLandingPage_Vector_36} />
					</div>
					<div className='Group_19'>
						<img alt='' className='Rectangle_17' src = {ImgAsset.ReactDemoLandingPage_Rectangle_17} />
					</div>
          <div className='Group_20'>
          <div className='Group_21'>
          <div className='Group_22'>
								<img alt='' className='Rectangle_18' src = {ImgAsset.SignUp_Rectangle_1} />
							</div>
              <div className='Group_23'>
								<img alt='' className='Rectangle_19' src = {ImgAsset.SignUp_Rectangle_2} />
							</div>
							<div className='Group_24'>
								<img alt='' className='Rectangle_20' src = {ImgAsset.SignUp_Rectangle_3} />
							</div>
            {/* Group_21 closing div */}
            </div>
            <img alt='' className='Vector_37' src = {ImgAsset.ReactDemoLandingPage_Vector_37} />
						<img alt='' className='Vector_38' src = {ImgAsset.ReactDemoLandingPage_Vector_38} />
						<img alt='' className='Vector_39' src = {ImgAsset.ReactDemoLandingPage_Vector_39} />
            <div className='Group_25'>
            <div className='Group_26'>
								<img alt='' className='Rectangle_21' src = {ImgAsset.SignUp_Rectangle_4} />
							</div>
              {/* Group-25 closing div */}
              </div>
              <div className='Group_27'>
							<img alt='' className='Vector_40' src = {ImgAsset.ReactDemoLandingPage_Vector_40} />
							<img alt='' className='Vector_41' src = {ImgAsset.ReactDemoLandingPage_Vector_41} />
							<img alt='' className='Vector_42' src = {ImgAsset.ReactDemoLandingPage_Vector_42} />
							<img alt='' className='Vector_43' src = {ImgAsset.ReactDemoLandingPage_Vector_43} />
						</div>

            <img alt='' className='Vector_44' src = {ImgAsset.ReactDemoLandingPage_Vector_44} />
						<img alt='' className='Vector_45' src = {ImgAsset.ReactDemoLandingPage_Vector_45} />
						<img alt='' className='Vector_46' src = {ImgAsset.ReactDemoLandingPage_Vector_46} />
						<img alt='' className='Vector_47' src = {ImgAsset.ReactDemoLandingPage_Vector_47} />
						<img alt='' className='Vector_48' src = {ImgAsset.ReactDemoLandingPage_Vector_48} />
						<img alt='' className='Vector_49' src = {ImgAsset.ReactDemoLandingPage_Vector_49} />
						<img alt='' className='Vector_50' src = {ImgAsset.ReactDemoLandingPage_Vector_50} />
						<img alt='' className='Vector_51' src = {ImgAsset.ReactDemoLandingPage_Vector_51} />
						<img alt='' className='Vector_52' src = {ImgAsset.ReactDemoLandingPage_Vector_52} />
						<img alt='' className='Vector_53' src = {ImgAsset.ReactDemoLandingPage_Vector_53} />
            {/* Group_20 closing div */}
            </div>
            <div className='Group_28'>
						<img alt='' className='Vector_54' src = {ImgAsset.ReactDemoLandingPage_Vector_54} />
						<img alt='' className='Vector_55' src = {ImgAsset.ReactDemoLandingPage_Vector_55} />
					</div>
					<div className='Group_29'>
						<img alt='' className='Rectangle_22' src = {ImgAsset.ReactDemoLandingPage_Rectangle_22} />
					</div>
					<div className='Group_30'>
						<img alt='' className='Vector_56' src = {ImgAsset.ReactDemoLandingPage_Vector_56} />
						<img alt='' className='Vector_57' src = {ImgAsset.ReactDemoLandingPage_Vector_57} />
						<img alt='' className='Vector_58' src = {ImgAsset.ReactDemoLandingPage_Vector_58} />
					</div>
					<div className='Group_31'>
						<img alt='' className='Vector_59' src = {ImgAsset.ReactDemoLandingPage_Vector_59} />
						<img alt='' className='Vector_60' src = {ImgAsset.ReactDemoLandingPage_Vector_60} />
						<img alt='' className='Vector_61' src = {ImgAsset.ReactDemoLandingPage_Vector_61} />
					</div>
					<img alt='' className='Rectangle_23' src = {ImgAsset.ReactDemoLandingPage_Rectangle_23} />
					<div className='Group_32'>
						<img alt='' className='Rectangle_24' src = {ImgAsset.ReactDemoLandingPage_Rectangle_24} />
					</div>
					<img alt='' className='Vector_62' src = {ImgAsset.ReactDemoLandingPage_Vector_62} />
          <div className='Group_33'>
          <div className='Group_34'>
							<img alt='' className='Rectangle_25' src = {ImgAsset.ReactDemoLandingPage_Rectangle_25} />
						</div>
            <div className='Group_35'>
            <img alt='' className='Rectangle_26' src = {ImgAsset.ReactDemoLandingPage_Rectangle_26} />
							<div className='Group_36'>
								<img alt='' className='Rectangle_27' src = {ImgAsset.ReactDemoLandingPage_Rectangle_27} />
							</div>
              {/* Closing tag group 35 */}
              </div> 
            {/* Group-33 closing div */}
            </div>

            <img alt='' className='Vector_63' src = {ImgAsset.ReactDemoLandingPage_Vector_63} />            


     {/* OBJECTS CLOSING TAG */}
      </div>
      {/* Group closing tag */}
        </div>









        {/* ReactDemoLandingPage_ReactDemoLandingPage closing div */}
    </div>
   

  
  );
};

export default AuthForm;

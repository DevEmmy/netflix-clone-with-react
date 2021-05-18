import './App.css';
import Banner from './Components/Banner';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Nav from './Components/Nav';
import 
{
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './Components/Profile';

function App() {

  const user=useSelector(selectUser)
  console.log(user)

  const dispatch = useDispatch()

  useEffect(()=>{
   const unsubscribe=  auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email
          }))
      }

      else{
       dispatch(logout)
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="app">

    
    <Router>

      {!user? 
        <Home />
      : 
    <Switch>
      <Route exact path='/'>
          <Nav />
          <Banner />
          <Movies />
      </Route>

      <Route path='/profile'>
        <Profile />
      </Route>
    </Switch>
      }
    </Router>
    </div>
  );
}

export default App;

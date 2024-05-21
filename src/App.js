import logo from './logo.svg';
import './App.css';
import HeadComponent from './components/headComponent/headComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage/homepage';
import SignUp from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import Landingpage from './components/landingComponent/landingPage';
import MemberForm from './components/memberForm/memberForm';
import SearchComponent from './components/searchComponent/searchComponent';
import MainComponent from './components/mainComponent/mainComponent';
import Firestoredb from './components/firestoreDb/firestoreDb';



function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <HeadComponent/> */}
    {/* <Landingpage/> */}
    <Routes>
      <Route path='' element={<SignUp/>}/>
      <Route path='homepage' element={<Landingpage/>}/>
      <Route path='mainpage' element={<MainComponent/>}/>
      <Route path='header' element={<HeadComponent/>}/>
      <Route path='searchpage' element={<SearchComponent/>}/>
      <Route path='memberform' element={<MemberForm/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='home' element={<Homepage/>}/>
    </Routes>  
    </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setmode] = useState('light');  //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
         setAlert({
            msg: message,
            type:type
         })
         setTimeout(() => {
            setAlert(null);
         },2000);
  }
  const removeBodyClasses=()=>{
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-secondary')
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')


   }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
       if(mode==='light'){
           setmode('dark');
           document.body.style.background = '#162e51';
           showAlert("Dark mode has been enabled","success");
         
       }
       else{
        setmode('light');
        document.body.style.background = 'white';
        showAlert("light mode has been enabled","success");
        // document.title = 'TextUtils - Light Mode';
       }
  }
  return (
   <> 
     
    <Navbar title="TextUtils" mode={mode} aboutText = "About" toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
          <TextForm  showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Space" mode={mode}/> 
        </div> 
   </>
  );
}

export default App;

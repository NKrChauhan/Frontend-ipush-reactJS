import logo from './push_notification.png';
import './App.css';
import Navbar from "./Components/Utils/Navbar";
import NotificationTrigger from "./Components/NotificationTrigger";
import {useEffect} from "react";

function App() {
    async function askUserPermission() {
        return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission(function(result) {
          resolve(result);
        });

        if (permissionResult) {
          permissionResult.then(resolve, reject);
        }
      })
      .then(function(permissionResult) {
        if (permissionResult !== 'granted') {
          throw new Error('We weren\'t granted permission.');
        }
      });
    }

    useEffect(()=>{
        if (Notification.permission === 'granted') {

        }
        else{
            setTimeout(()=>{
                askUserPermission().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
            },2000)
        }
    })

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
          <table style={{borderCollapse: "separate",
              borderSpacing: "100px 0"}}>
              <tbody>
                  <tr>
                      <td>
                        <img src={logo} className="App-logo" alt="logo" />
                      </td>
                      <td className="container" style={{width:"60%", backgroundSize: "cover"}}>
                          <h1 className="lead border-0 rounded border border-info" style={{marginBottom:"50px", fontSize:"50px", color:"white"}}>Notification Details</h1>
                          <NotificationTrigger/>
                      </td>
                  </tr>
              </tbody>
          </table>
      </header>
    </div>
  );
}

export default App;

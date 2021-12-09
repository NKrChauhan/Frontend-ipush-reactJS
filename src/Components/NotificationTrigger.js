import {useState} from "react";
import Swal from "sweetalert2";

function NotificationTrigger(props) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [action_url, setActionURL] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        let data = {
            "title":title,
            "message":message,
            "action_link":action_url
        };
        console.log(data)
        fetch('http://127.0.0.1:8000/api/send_notification', {
            method: 'POST',
            body: JSON.stringify(data),
            dataType: 'text',
            headers: {
                    "Content-Type": "application/json",
                },
                }).then((res) => {
                    Swal.fire({
                        title: 'SENT !',
                        text: 'All subscriptions are processed',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff',
                        backdrop: `
                        rgba(0,0,123,0.4)
                        url("https://i.gifer.com/XfQB.gif")
                        left top
                        no-repeat
                        `
                        })
                    console.log(res);
                }).catch((err) => {
                    Swal.fire({
                        title: 'ERROR !',
                        text: 'Do you want to continue, Try again...',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                        rgba(0,0,123,0.4)
                        url("https://i.gifer.com/XSNq.gif")
                        left top
                        no-repeat
                        `
                        })
                    console.log((err))
                });
    }
    return (
      <center>
          <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input id="notify-title" aria-describedby="titleNotify"
                 onChange={(e) => {setTitle(e.target.value);}} required/>
            <label>Title</label>
        </div>
        <div className="input-container">
          <input id="notify-message" onChange={(e) => {setMessage(e.target.value);}} required/>
            <label>Message</label>
        </div>
        <div className="input-container">
          <input id="notify-action" type="url" onChange={(e) => {setActionURL(e.target.value);}} required/>
            <label>Action Link</label>
        </div>
        <button type="submit" data-toggle="tooltip" data-placement="left" title="Push !" style={{backgroundColor:"white", color:"wheat", width:"150px"}} className="btn btn-lg"><img alt="Send" src="https://global-uploads.webflow.com/5efccc15b40a7dfbb529ea1a/5f2161c88e5c3168d8e2783a_Pushowl%20Logo%20Icon.png" width={50}/></button>

          </form>
      </center>
    );
  }
  export default NotificationTrigger;
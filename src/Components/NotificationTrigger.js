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
                        url("https://i.gifer.com/3APS.gif")
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
                        url("https://c.tenor.com/kGFp0e2m_RsAAAAd/success.gif")
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
        <button type="submit" data-toggle="tooltip" data-placement="left" title="Push !" style={{backgroundColor:"rgba(52,94,201,0.59)", color:"wheat"}} className="btn"><img src="https://scontent.fdel5-1.fna.fbcdn.net/v/t31.18172-8/14706922_270822779981869_825709977850394449_o.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ruyC6Y-rigcAX93oQYg&_nc_ht=scontent.fdel5-1.fna&oh=93c3a1ec9627cc7b92cfa57009cb83f5&oe=61BC6EDB" width={50}/> Send</button>

          </form>
      </center>
    );
  }
  export default NotificationTrigger;
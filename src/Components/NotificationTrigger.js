import {useState} from "react";

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
                    console.log("the notification sent...")
                    console.log(res);
                }).catch((err) => {
                    console.log((err))
                });
    }
    return (
      <center>
          <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control" id="notify-title" aria-describedby="titleNotify"
                 placeholder="Notification Title" onChange={(e) => {setTitle(e.target.value);}}/>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="notify-message" placeholder="Notitfication Content" onChange={(e) => {setMessage(e.target.value);}}/>
        </div>
        <div className="form-group">
          <input className="form-control" id="notify-action" type="url" placeholder="Action Link Here !" onChange={(e) => {setActionURL(e.target.value);}}/>
        </div>
        <button type="submit" style={{backgroundColor:"rgba(52,94,201,0.59)",backgroundImage:"url(https://scontent.fdel5-1.fna.fbcdn.net/v/t31.18172-8/14706922_270822779981869_825709977850394449_o.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ruyC6Y-rigcAX93oQYg&_nc_ht=scontent.fdel5-1.fna&oh=93c3a1ec9627cc7b92cfa57009cb83f5&oe=61BC6EDB)",backgroundSize:"contain",backgroundRepeat:"repeat-y"}} className="btn">_</button>

          </form>
      </center>
    );
  }
  export default NotificationTrigger;
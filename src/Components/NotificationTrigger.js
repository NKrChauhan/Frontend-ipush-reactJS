import {useEffect, useState} from "react";
import Swal from "sweetalert2";

function NotificationTrigger() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [action_url, setActionURL] = useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let sent_notification_ids = new Set()

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
                }).then((res) =>
                    res.json()
                ).then(data => {
                    sent_notification_ids.add(data["response"]["id"])
                    console.log([...sent_notification_ids] +" :added")
                    update_notification_status(sent_notification_ids)
                }).catch((err) => {
                    Swal.fire({
                        title: 'ERROR !',
                        text: 'Exception in sending notification...',
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

    useEffect(()=>{
        console.log("hook initiated...")
        console.log(sent_notification_ids)
        update_notification_status(sent_notification_ids)
    },)

    function update_notification_status(sent_notification_ids){
        let sent_notification_ids_list = [...sent_notification_ids]
        if(sent_notification_ids_list.length !== 0) {
            sent_notification_ids_list.forEach(notification_id => {
                console.log(notification_id + " is under progress...")
                fetch('http://127.0.0.1:8000/api/fetch_notification_status/' + notification_id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((res) =>
                    res.json()
                ).then(data => {
                    console.log(data)
                    if (data['status'] === 'Completed') {
                        sent_notification_ids.delete(notification_id)
                        Swal.fire({
                            title: 'SENT !',
                            text: 'All subscriptions are processed for notification id: '+notification_id,
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
                    }
                    if (data['status'] === 'Failed') {
                        sent_notification_ids.delete(notification_id)
                        Swal.fire({
                            title: 'Failed!, Notification Id: '+notification_id,
                            text: 'Try again, maybe this time it will work.',
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
                    }
                    console.log(sent_notification_ids)
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
            })
            setTimeout(()=> update_notification_status(sent_notification_ids),5000)
        }
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
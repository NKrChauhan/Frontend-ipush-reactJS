function NotificationTrigger() {
    return (
      <center>
        <div className="form-group">
          <input className="form-control" id="notify-title" aria-describedby="titleNotify"
                 placeholder="Notification Title"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="notify-content" placeholder="Notitfication Content"/>
        </div>
        <button type="submit" style={{backgroundColor:"rgba(52,94,201,0.59)",backgroundImage:"url(https://scontent.fdel5-1.fna.fbcdn.net/v/t31.18172-8/14706922_270822779981869_825709977850394449_o.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ruyC6Y-rigcAX93oQYg&_nc_ht=scontent.fdel5-1.fna&oh=93c3a1ec9627cc7b92cfa57009cb83f5&oe=61BC6EDB)",backgroundSize:"contain",backgroundRepeat:"repeat-y"}} className="btn">_</button>
      </center>
    );
  }
  export default NotificationTrigger;
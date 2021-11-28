function Navbar() {
    return (
      <nav
        className="navbar-expand-sm navbar sticky-top navbar navbar-dark bg-dark navbar-fixed-top navbar-inner-sm fancyfonts"
        style={{ backgroundColor: "#3c487c" }}
      >
        <a className="navbar-brand" href="#">
          <span className="glyphicon glyphicon-info-sign" style={{top:"17%"}}></span> p u s h
        </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" style={{float:"right"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        </div>
      </nav>
    );
  }
  export default Navbar;
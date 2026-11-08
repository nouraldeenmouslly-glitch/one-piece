import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
function Header() {
  return (
    <header className="bg-hero d-flex flex-column justify-content-between">
      <nav className="navbar navbar-expand-lg rounded-2">
        <div className="container">
          <a href="" className=" navbar-brand">
            <h1>
              Nour<span className="text-success">Aldeen</span>
            </h1>
          </a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-Nav"
            aria-controls="navbar-Nav"
            aria-expanded="false"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbar-Nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item mx-auto">
                <a href="#" data-text="Home">
                  {" "}
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a href="#section-2" data-text="Main">
                  {" "}
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a href="#section-3" data-text="About"></a>
              </li>
              <li className="nav-item mx-auto">
                <a href="#footer" data-text="Contact"></a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row gap-2 ">
              <button className="btn btn-success border border-1 border-dark m-1 rounded-pill">
                Get started
              </button>
              <span className="bg-dark text-white rounded-pill p-2 d-flex align-item-center justify-content-center text-center">
                <i className="bi bi-person fs-4"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mb-5 ">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 d-flex flex-column  align-item-center justify-content-center ">
                <p className="lead">
                  LeadGen - Multipurpose Marketing Landing Page Pack with Page
                  Builder
                </p>
                <h1>
                  Shape up your page with our page builder as per your
                  imagination…
                </h1>
                <div>
                <button className="btn btn-dark me-5 mt-2 rounded-pill btn-lg"> Try the Builder</button>
                <button className="btn btn-outline-dark me-5 mt-2 rounded-pill btn-lg"> View Demos</button>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://www.themezaa.com/html/leadgen/demo/incs/images/slider-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

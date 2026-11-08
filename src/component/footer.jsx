function Footer() {
  return (
    <footer className="text-light bg-black" id="footer">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <h2 className="text-warning fw-bold mb-3">Nour Al Deen</h2>

            <p className="opacity-75 lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores similique sapiente nisi velit repellendus tempora sit
              labore ipsa illo, officiis repudiandae corporis vero alias odio
              enim saepe. Dolores, rerum nulla?
            </p>

            <div className="input-group mt-4">
              <input
                type="email"
                className="form-control bg-transparent text-white border-warning"
                placeholder="Your email"
              />

              <button className="btn btn-warning">Subscribe</button>
            </div>
          </div>

          <div className="col-md-2">
            <h5 className="text-warning mb-3">Explore</h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="./index.html"
                  class="text-light text-decoration-none d-block mb-2 opacity-75"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./about.html"
                  class="text-light text-decoration-none d-block mb-2 opacity-75"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="./Menu.html"
                  class="text-light text-decoration-none d-block mb-2 opacity-75"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="./contact.html"
                  class="text-light text-decoration-none d-block mb-2 opacity-75"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning mb-3">Contact</h5>

            <p className="opacity-75 mb-2">📍 Tokyo </p>

            <p className="opacity-75 mb-2">☎ +963 90752146</p>

            <p className="opacity-75">✉ nour.al.deen.mouslly@gmail.com</p>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning mb-3">Follow Us</h5>

            <p className="opacity-75">
              Stay connected and discover our website
            </p>

            <div>
              <a
                href="https://www.facebook.com/share/1QRJNxe5kN/"
                className="btn btn-outline-warning rounded-circle me-2"
              >
                <i className="bi bi-facebook fs-3"></i>
              </a>

              <a
                href="https://www.instagram.com/nour.al.deen_mouslly?igsh=MTA1dDljemU1NzMyMQ=="
                className="btn btn-outline-warning rounded-circle me-2"
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>

              <a
                href="https://wa.me/15141234567"
                className="btn btn-outline-warning rounded-circle me-2"
              >
                <i className="bi bi-whatsapp fs-3"></i>
              </a>

              <a href="#" className="btn btn-outline-warning rounded-circle">
                <i className="bi bi-twitter-x fs-3"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-warning opacity-50 mt-5" />

        <div className="text-center opacity-75">
          © 2026 Nour Al Deen. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

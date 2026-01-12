import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <h4>Explorer</h4>
                  <ul>
                    <li>
                      <a href="#">Electric bikes</a>
                    </li>
                    <li>
                      <a href="#">City bikes</a>
                    </li>
                    <li>
                      <a href="#">Kids bikes</a>
                    </li>
                    <li>
                      <a href="#">Accesories</a>
                    </li>
                    <li>
                      <a href="#">Outlet</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Insurance Electric</a>
                    </li>
                    <li>
                      <a href="#">Size guide</a>
                    </li>
                  </ul>
                
              </div>
              <div className="col-md-3">
                <h4>About</h4>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Journal</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                  </ul>

              </div>
              <div className="col-md-3">
                <h4>Help</h4>
                  <ul>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Delivery</a>
                    </li>
                    <li>
                      <a href="#">Assembly & manuals</a>
                    </li>
                    <li>
                      <a href="#">Payment options</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                  </ul>

              </div>
              
            </div>

           
          
          </div>
          <div classNameName="col-md-4">
            <h4>Join the ride.</h4>
            <div className="subscribe d-flex align-items-end">
              <form>
               <label for="email">Sign up for our newsletter.</label>
	                <input type="email" id="email" name="email" className="email" placeholder="Enter your email address here" required/>
                  <button type="button" className="btn btn-outline-dark">Subscribe</button>

                <p>
                  <input type="checkbox"  name="" value="I agree"/>By signing up, I agree to the <a href="#">privacy policy</a> of Veloretti.
                </p>
              </form>
            </div>

            <div className="row">
              <div className="d-flex icons justify-content-start mt-3 gap-4">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-tiktok"></i>
                
              </div>
            </div>
            
            
          
            
          </div>

          
        </div>
       
      </div>
    </footer>
    </>
  )
}

export default Footer

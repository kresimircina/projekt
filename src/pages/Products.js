


const Products = () => {
  return (
    <>

      <section className="hero hero-products d-flex align-items-center text-white mb-5">
      <div className="container">
        <span className="text-uppercase">Veloretti electric</span>
        <h1>This is Two.</h1>
        <p>Introducing the all-new Ivy and Ace</p>
      </div>
    </section>

    <section className="bike-picker pb-5">
      <div className="container d-flex pt-md-2 m-auto">
        <div className="row gap-5">
          <div className="col-md-5 mb-3 bike">
            <div className="card-text">
              <div className="two d-flex gap-3">
                <h3>Electric Ace</h3>
                <p>Two</p>
              </div>
              <p>Rider height: 173-200cm</p>
              <div className="slider align-items-center">
                <img src="img/bikeace.png" alt="Bike"/>
              </div>
              <div className="options-row mb-2 d-flex align-items-end ms-3">
                <div className="action ps-0">
                  <a href="#!" className="btn buy-now border-black bg-white">Buy now</a>
                  <a href="#!" className="learn-more ms-4">Learn more</a>
                </div>
                <div className="choice">
                  <span className="colorbtn-active"><button type="button" className="btn p-1 btn-crn"><img src="img/btn1.svg" alt="btn1"/></button>
                  </span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-siv"><img src="img/btn2.svg" alt="btn2"/>          </button></span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-bez"><img src="img/btn3.svg" alt="btn3"/>          </button></span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-mix"><img src="img/btn4.svg" alt="btn4"/>         </button></span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-5 mb-3 bike">
            <div className="card-text">
              <div className="two d-flex gap-3">
                <h3>Electric Ivy</h3>
                <p>Two</p>
              </div>
              <p>Rider height: 164-184cm</p>
              <div className="slider">
                <img src="img/bikeivy.png" alt="Bike"/>
              </div>
              <div className="options-row mb-2 d-flex align-items-end ms-3">
                <div className="action pb-0">
                  <a href="#!" className="btn buy-now border-black bg-white">Buy now</a>
                  <a href="#!" className="learn-more">Learn more</a>
                </div>
                <div className="choice">
                  <span className="colorbtn-active"><button type="button" className="btn p-1 btn-crn"><img src="img/btn1.svg" alt="btn1"/></button>
                  </span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-siv"><img src="img/btn2.svg" alt="btn2"/>          </button></span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-bez"><img src="img/btn3.svg" alt="btn3"/>          </button></span>
                  <span className="colorbtn"><button type="button" className="btn p-1 btn-mix"><img src="img/btn5.svg" alt="btn4"/>         </button></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="explore mb-5">
      <div className="container">
        <h3>Explore our bikes
          <span className="slider-arrows"></span>
        </h3>
        <div className="bikes-slider">
          <div className="bike-slide">
            <h2 className="d-flex">
              <span>City bikes</span>
              <span>From €399</span>
            </h2>
            <p>Ages 1,5 to 8</p>
            <a href="#!">
              <img src="https://placehold.co/480x270" alt="City bikes"/>
            </a>
            <p>
              <a href="#!" className="btn">Buy now</a>
              <a href="#!">Learn more</a>
            </p>
          </div>

          <div className="bike-slide">
            <h2 className="d-flex">
              <span>City bikes</span>
              <span>From €399</span>
            </h2>
            <p>Ages 1,5 to 8</p>
            <a href="#!">
              <img src="https://placehold.co/480x270" alt="City bikes"/>
            </a>
            <p>
              <a href="#!" className="btn">Buy now</a>
              <a href="#!">Learn more</a>
            </p>
          </div>

          <div className="bike-slide">
            <h2 className="d-flex">
              <span>City bikes</span>
              <span>From €399</span>
            </h2>
            <p>Ages 1,5 to 8</p>
            <a href="#!">
              <img src="https://placehold.co/480x270" alt="City bikes"/>
            </a>
            <p>
              <a href="#!" className="btn">Buy now</a>
              <a href="#!">Learn more</a>
            </p>
          </div>

          <div className="bike-slide">
            <h2 className="d-flex">
              <span>City bikes</span>
              <span>From €399</span>
            </h2>
            <p>Ages 1,5 to 8</p>
            <a href="#!">
              <img src="https://placehold.co/480x270" alt="City bikes"/>
            </a>
            <p>
              <a href="#!" className="btn">Buy now</a>
              <a href="#!">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="commute d-flex">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-5">Make your commute the best part of your day.</h2>
          </div>
          <div className="col-md-6 m-auto">
            <p className="max-466">Clean and timeless designs that make every ride a thrill.
              Wherever you're heading, our bikes are made to make your daily
              commute a joy.
            </p>
          </div>
          <div className="col-md-6">
            <img src="./img/textlogo.png" alt="textlogo" className="commute-logo"/>
          </div>
        </div>
      </div>
    </section>

    <section className="home-2-products d-flex align-items-center text-white">
      <div className="container">
        <div className="col-md-12">
          <div className="max-466 ms-md my-4">
            <h2 className="opacity-90">
                Discover your local Veloretti
                 partner store
            </h2>
             <p className="opacity-90 mt-3 mb-4">
                Our partner stores across the Netherlands
                are there for you. Whether you're looking to
                pick up a newly ordered bike, need a fix, or
                want to take a test ride on our Ivy or Ace Two,
                your ideal biking experience is closer than
                you think.
            </p>
            <button type="button" href="#!" className="btn btn-light py-3 px-5 mt-3 rounded-5">
              Find a partner store near you
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="home-3 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="img/home-3.jpg" alt="naslovna 3. slika" />
          </div>
          <div className="col-md-6">
            <div className="max-466 ms-md-auto my-4">
              <h2 className="opacity-90">Leasing</h2>
              <p className="opacity-90 mt-3 mb-4">
                Want to provide your organisation with mobility in a unique and
                creative way? Our Electric and City bikes are the perfect solution for
                healthier employees. So whether it's customised employee bicycles
                or standout promotional rides, both small and big organisations
                share the love of our Veloretti designs. Depending on the number of
                bikes, we will give you a customised quote.
              </p>
              <a href="#!">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-us">
      <div className="container">
        <h2>They talked about us</h2>
        <div className="row">
          <div className="col-md-4">
            <div>
              <p>"One of the best e-bikes available at
                  any price and far and away my
                  favourite ride of the year."</p>
              <img src="./img/testimonial-1.png" alt="testiominal-1"/>
            </div>
          </div>
          <div className="col-md-4">
            <div><p>“This second-generation Ace is a
                    superhero amongst urban e-
                    bikes… 9/10.”
                  </p>
                  <img src="./img/testimonial-2.png" alt="testiominal-2"/>
            </div>
          </div>
          <div className="col-md-4">
            <div><p>"The timeless, chic design and
                    stunning craftsmanship make
                    them the perfect way to get
                    around the city."
                  </p>
              <img src="./img/testimonial-3.png" alt="testiominal-3"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-3-products d-flex align-items-center text-white">
      <div className="container">
        <div className="col-md-12">
          <div className="max-466 ms-md my-4">
            <h2 className="opacity-90">
                Red Dot Award
            </h2>
             <p className="opacity-90 mt-3 mb-4">
                Good design is what drives us, and we're
                proud to share that Veloretti Electric Two has
                already won the prestigious Red Dot Design
                Award 2023, as judged by the world's best
                product designers.
             </p>
          </div>
        </div>
      </div>
    </section>

    <section className="home-3 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="max-466 my-4">
              <h2 className="opacity-90">Ride carefree</h2>
              <p className="opacity-90 mt-3 mb-4">
                Our Qover x Veloretti insurance plan has got you covered. It offers
                comprehensive coverage against theft, provides assistance in case
                of any issues, and covers any damages to your bike.
              </p>
              <a href="#!">Learn more</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="img/products-3.jpg" alt="products-3. slika" />
          </div>
          
        </div>
      </div>
    </section>
        
     <section className="footer-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <p className="mb-0 px-md-5">Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in
                Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer,
              Berlin, Hamburg and Munich. Schedule your test ride now and we'll see you there.</p>
          </div>
          <div className="col-md-5 text-center">
            <a href="#!" className="btn">Book now</a>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Products

import React from 'react'
import './Styles/Updates.scss'
import frame1 from './Images/frame1.png'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

 const Updates = () => {
    return (
    <div className='updates'>
      <div className="container">
        <div className='heading'>
           <h1 className='main-heading'>
                Updates
            </h1>
            <Link to='/'   className=" viewupdates">
                View More Updates  <FontAwesomeIcon icon={faChevronRight} />
            </Link>
        </div>
        <div className='cover'> 
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className="card">
                            <img src={frame1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to='/'  className=" readmore">
                                    Read more  <FontAwesomeIcon icon={faChevronRight} />
                                </Link>
                                <p className="card-text date"><small className="text-muted">September 13, 2021</small></p>
                            </div>
                        </div>
                    </div>
    <div className="carousel-item">
      <div className="card" >
  <img src={frame1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/'   className=" readmore">
    Read more  <FontAwesomeIcon icon={faChevronRight} />
    </Link>
    <p className="card-text date"><small className="text-muted">September 13, 2021</small></p>
  </div>
</div>
    </div>
    <div className="carousel-item">
      <div className="card" >
  <img src={frame1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/'  className="readmore">
        Read more  <FontAwesomeIcon icon={faChevronRight} />
    </Link>
    <p className="card-text date"><small className="text-muted">September 13, 2021</small></p>
  </div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        </div>
    )
}

export default Updates
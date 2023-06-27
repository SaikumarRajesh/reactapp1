// import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3 className='text-uppercase'>Price cart</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>

            <div className="card mb-5 mb-lg-0 shake-card">
              <div className="card-body ">
                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 className='card-price text-center'>$0<span className='period'>/model</span></h6>
                <hr></hr>
                <ul className='fa-ul list'>
                  <li>Single User</li>
                  <li>5gb Storage</li>
                  <li>Unlimited Public Projects</li>
                  <li>Community Access</li>
                  <li>Unlimited Private Projects</li>
                  <li>Dedicated Phone Support</li>
                  <li>Free Subdomain</li>
                  <li>Monthly Status Report</li>
                </ul>
                <div className='d-grid '>
                  <a  href='#' className="btn btn-primary btn-lg btn-block button" >Button</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="card mb-5 mb-lg-0 shake-card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">plus</h5>
                <h6 className='card-price text-center'>$9<span className='period'>/model</span></h6>
                <hr></hr>
                <ul className='fa-ul list'>
                  <li>5 User</li>
                  <li>50gb Storage</li>
                  <li>Unlimited Public Projects</li>
                  <li>Community Access</li>
                  <li>Unlimited Private Projects</li>
                  <li>Dedicated Phone Support</li>
                  <li>Free Subdomain</li>
                  <li>Monthly Status Report</li>
                </ul>
                <div className='d-grid'>
                  <a href='#'className="btn btn-primary btn-lg btn-block button" >Button</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="card mb-5 mb-lg-0 shake-card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">pro</h5>
                <h6 className='card-price text-center'>$49<span className='period'>/model</span></h6>
                <hr></hr>
                <ul className='fa-li list'>
                  <li>Mutiple User</li>
                  <li>150gb Storage</li>
                  <li>Unlimited Public Projects</li>
                  <li>Community Access</li>
                  <li>Unlimited Private Projects</li>
                  <li>Dedicated Phone Support</li>
                  <li>Free Subdomain</li>
                  <li>Monthly Status Report</li>
                </ul>
                <div className='d-grid '>
                  <a   href='#'className="btn btn-primary btn-lg btn-block button">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

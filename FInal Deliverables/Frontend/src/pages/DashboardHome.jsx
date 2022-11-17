import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import "./Cards.css"


const DashboardHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h1>Welcome to your Dashboard!</h1>
        <br />
        <br />
        <br />
        <h3>Check out your email. Your results have been sent there.</h3>
        <br />
        <br />
        <h3>Here you can check out different kind of visualizations to get a general idea about the factors increasing causes of getting a cardiac arrest.</h3>
        <br />
        <h3>The visualizations have been made with the help of Tableau</h3>
        <br />
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>85%</span></h2>
                <p class="m-b-0">Accuracy</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>5</span></h2>
                <p class="m-b-0">Visualization Types</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>Random Forest Classifier</span></h2>
                <p class="m-b-0">ML Model</p>
              </div>
            </div>
          </div>

          {/* <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardHome

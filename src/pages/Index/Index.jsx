import StarIcon from '@mui/icons-material/Star';
import "./Index.css"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import BarChart from './BarChart';

const Index = () => {

   

  return (
    <div className='Index'>
        <div className="greeting">
            <div className="welcome mt-4 ml-2">
                <h1 className='text-dark'>Hi, welcome back!</h1>
                <p>Sales monitoring dashboard template</p>
            </div>
            <div className="customerrating">
                <span>
                    <p className='fs-6'>Customer Ratings</p>
                    <span>
                        <StarIcon className='text-warning'/>
                        <StarIcon className='text-warning'/>
                        <StarIcon className='text-warning'/>
                        <StarIcon className='text-warning'/>
                        <StarIcon/>
                        <span className='text-dark'>
                            (14,873)
                        </span>
                    </span>
                </span>
                <span className='mt-2'>
                    <p className='fs-6'>Online Sales</p>
                    <h4 className='mx-auto text-dark ml-5 fs-5'>563,275</h4>
                </span>
                <span className='mt-2'>
                <p className='fs-6'>Offline Sales</p>
                <h4 className='text-dark fs-5'>783,675</h4>
                </span>
            </div>
        </div>
        <div className="cards">
            <div className="card-1">
                <div className="total-orders">
                <div className="price">
                <h5>Total Orders</h5>
                    <h4>$5,74.12</h4>
                    <h6>Compared to last week</h6>
                </div>
                <div className="points">
                    <ArrowCircleUpIcon/><p>+427</p>
                </div>
                </div>
                <div className="chart">
                </div>
            </div>
            <div className="card-2">
            <div className="total-orders">
                <div className="price">
                <h5>Today Earnings</h5>
                    <h4>$1,230.17</h4>
                    <h6>Compared to last week</h6>
                </div>
                <div className="points">
                    <ArrowCircleDownIcon/><p>-23.09%</p>
                </div>
                </div>
                {/* <div className="chart">
                </div> */}
            </div>
            <div className="card-3">
                <div className="total-orders">
                <div className="price">
                <h5>Total Earnings</h5>
                    <h4>$7,125.50</h4>
                    <h6>Compared to last week</h6>
                </div>
                <div className="points">
                    <ArrowCircleUpIcon/><p>52.09%</p>
                </div>
                </div>
                {/* <div className="chart">
                </div> */}
            </div>
            <div className="card-4">
                <div className="total-orders">
                <div className="price">
                <h5>Products Sold</h5>
                    <h4>$4820.50</h4>
                    <h6>Compared to last week</h6>
                </div>
                <div className="points">
                    <ArrowCircleDownIcon/><p>-152.3</p>
                </div>
                </div>
                {/* <div className="chart">
                </div> */}
            </div>
        </div>
        <div className="order-status sales-revenue">
            <div className="order">
             <h4>Order Status</h4>
             <p>Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.</p>
             <div className="succes-pending-failed">
                <div className="sucess">
                    <h4 className='fs-5'>120,750</h4>
                    <div className="dot">
                      <div className="dot-1"></div>
                      <p className='text-dark fs-6'>success</p>
                    </div>
                </div>
                <div className="pending">
                    <h4 className='fs-5'>53,108</h4>
                    <div className="dot">
                      <div className="dot-2"></div>
                      <p className='text-dark fs-6'>Pending</p>
                    </div>
                </div>
                <div className="failed">
                    <h4 className='fs-5'>32,895</h4>
                    <div className="dot">
                      <div className="dot-3"></div>
                      <p className='text-dark fs-6'>Failed</p>
                    </div>
                </div>
             </div>
             <div className="barchart">
             <BarChart/>
             </div>
            </div>
            <div className="revenue">

            </div>
        </div>
    </div>
  )
}

export default Index
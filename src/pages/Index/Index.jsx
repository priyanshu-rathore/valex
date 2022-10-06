import StarIcon from '@mui/icons-material/Star';
import "./Index.css"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import BarChart from './BarChart';
import Map from './Map';
import Users from './Users';
import user from './user';
// import { UserChart } from './UserChart';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import { NoteAltOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import ReactApexChart from 'react-apexcharts';

const Index = () => {
     const chart = {
        series: [83],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    postion: "center",
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              legend:{
                onItemClick: {
                    toggleDataSeries: false
                  },
              },
              labels: [''],
     
            },
          
          
          };
     
   

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
              <div>
              <h4>SALES REVENUE BY CUSTOMERS IN USA</h4>  
              <p>Sales Performance of all states in the United States</p>
              </div>
              <div className="sales">
              <Map/>
              </div>
            </div>
        </div>
        <div className="Recent-sales-orders">
            <div className="recent-customers">
                <h4>Recent Customers</h4>
                <p>A customer is an individual or business that purchases the goods service has evolved to include real-time</p>
                <div className="users">
                 <Users userimage={user[0].UserImage} title={user[0].Title} status={user[0].Status} />
                 <Users userimage={user[1].UserImage} title={user[1].Title} status={user[1].Status} />
                 <Users userimage={user[2].UserImage} title={user[2].Title} status={user[2].Status} />
                 <Users userimage={user[3].UserImage} title={user[3].Title} status={user[3].Status} />
                 <Users userimage={user[4].UserImage} title={user[4].Title} status={user[4].Status} />
                </div>
            </div>
            <div className="sales-activity">
            <h4>SALES ACTIVITY</h4>
            <p>Sales activities are the tactics that salespeople use to achieve their goals and objective</p>
                <div className="totalsales">
                    <div className="box">
                        <div className="icon"> < PieChartOutlineOutlinedIcon className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Total Products</h4>
                            <span>1.3k New Products</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
            
            
                <div className="totalsales">
                    <div className="box">
                        <div className="icon1"> <ShoppingCartOutlinedIcon className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Total Sales</h4>
                            <span>1k New Sales</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
                
                
                <div className="totalsales">
                    <div className="box">
                        <div className="icon2"> <LeaderboardOutlinedIcon className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Total Revenue</h4>
                            <span>23.5K New Revenue</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
                
               
                <div className="totalsales">
                    <div className="box">
                        <div className="icon3"> <AccountBalanceWalletOutlinedIcon className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Total Profit</h4>
                            <span>1k New Profit</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
             
               
                <div className="totalsales">
                    <div className="box">
                        <div className="icon4"> <RemoveRedEyeOutlined className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Customer Visits</h4>
                            <span>15% increased</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
           
            
                <div className="totalsales">
                    <div className="box">
                        <div className="icon"> <NoteAltOutlined className='icons'/> </div>
                        <div className="innerbox">
                            <h4>Total Products</h4>
                            <span>1.5k reviews</span>
                            </div>
                            <div className="date">
                                <p>3 days ago</p>
                            </div>
                    </div>
                </div>
       
               
            </div>
            <div className="recent-orders">
                <div className="recent">
                   <div className="header">
                   <h4>RECENT ORDERS</h4>
                        <p>
                        An order is an investor's instructions to a broker or brokerage firm to purchase or sell
                        </p>
                   </div>
                  <div className="chart">
                   <ReactApexChart options={chart.options} series={chart.series} type="radialBar" height={200}/>
                  </div>
                  <div className="container">
                    <div className="delivered">
                        <p>Delivered</p>
                        <h4>5238</h4>
                        <span>Last 6 months</span>
                    </div>
                    <div className="cancelled">
                        <p>Cancelled</p>
                        <h4>3467</h4>
                        <span>Last 6 months</span>
                    </div>
                  </div>
                </div>
                <div className="total-sales">
                    <div className="total">
                        <p>Total Sales</p>
                        <h4>$7,590</h4>
                        <input type="range" />

                    </div>
                    <div className="active">
                    <p>Active Users</p>
                        <h4>$5,460</h4>
                        <input className='range' type="range" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index
import StarIcon from '@mui/icons-material/Star';
import "./Index.css"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';



const Index = () => {

    const ctx = document.getElementById("totalorders");
    console.log(ctx)
 


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
        <div className="total">
            <div className="forChart totalorders">
            <div className="totalorders d-flex">
                <div className='orders'>
                    <h6>TODAY ORDERS</h6>
                    <h4>$5,74.12</h4>
                    <p className='comp'>Compared to last week</p>
                </div>
                <div className='arrow'>
                   <ArrowCircleUpIcon/>
                   <p>+427</p>
                </div>
                </div>
                <canvas id="totalorders" width={385} height={40}></canvas>
            </div>
            <div className="totalorders2 d-flex">
                <div className='orders'>
                    <h6>TODAY EARNINGS</h6>
                    <h4>$1,230.17</h4>
                    <p className='comp'>Compared to last week</p>
                </div>
                <div className='arrow'>
                   <ArrowCircleDownIcon/>
                   <p>-23.09%</p>
                </div>
            </div>
            <div className="totalorders3 d-flex">
                <div className='orders'>
                    <h6>TOTAL EARNINGS</h6>
                    <h4>$7,125.70</h4>
                    <p className='comp'>Compared to last week</p>
                </div>
                <div className='arrow'>
                   <ArrowCircleUpIcon/>
                   <p>52.09%</p>
                </div>
            </div>
            <div className="totalorders4 d-flex">
                <div className='orders'>
                    <h6>PRODUCTS SOLD</h6>
                    <h4>$4,820.50</h4>
                    <p className='comp'>Compared to last week</p>
                </div>
                <div className='arrow'>
                   <ArrowCircleDownIcon/>
                   <p>-152.3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index
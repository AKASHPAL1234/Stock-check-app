import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h1 className='mt-5 my-5'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience </p>
                <div className='col-4 mt-5 mb-5'>
                    <img src='media/image/smallcaseLogo.png'></img>
                    <p className='text-small text-muted'>Thematesting platformthat helps 
                        .</p>
                </div>
                <div className='col-4 mt-5 mb-5'>
                <img src='media/image/streakLogo.png' style={{width:"50%"}} ></img>
                <p className='text-small text-muted'>
                   Options trading platform that lets you
                  
                </p>
                </div>

                <div className='col-4 mt-5 mb-5 '>
                <img src='media/image/sensibullLogo.svg' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>
                   Options trading platform that lets you
                   .                   
                </p>
                </div>
                <div className='col-4 mt-5'>
                <img src='media/image/zerodhaFundhouse.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>
                   
                   data points like open interest, FII/DII, and more.
                </p>
                </div>
                <div className='col-4 mt-5'>
                <img src='media/image/goldenpiLogo.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>
                   Options trading 
                   data points like open interest, FII/DII, and more.                   
                </p>
                </div>
                <div className='col-4 mt-5 '>
                <img src='media/image/dittoLogo.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted'>
                   Options  points like open interest, FII/DII, and more.                   
                </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 my-5 mt-5' style={{width:"25%", margin:"auto"}}>SingUp for free</button>
                
            </div>
        </div>
      )
}

export default Universe;
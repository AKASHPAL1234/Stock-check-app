import React from 'react';
function Hero() {
    return (
        <section>
        <div className='container-fluid  p-5' id='Supporthero'>
            <div className='p-5' id='Support'>
                <h4>Support Portal</h4>
                <a href=''>Track tickets</a>
            </div>
            <div className=' row ' >
                <div className='col-6 text-center'>
                    <h4 className='mb-5 ' >Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder='Eg:how do i active F&Q, why is my order getting rejected' className='mb-3'></input><br></br>
                    <a href='' className='mx-3'>Track account opening</a>
                    <a href=''  className='mx-3'> Track segment activation</a>
                    <a href=''  className='mx-3'>Intraday margins</a>
                    <a href=''  className='mx-3'>Intraday margins</a>
                </div>
                <div className='col-6 p-5'>
                    <h4 className=''>Featured</h4>
                    <ol>
                        <li> <a href='' style={{lineHeight:"3"}}>Rights Entitlements listing in February 2025</a></li>
                        <li><a href=''>Surveillance measure on scrips - February 2025 </a></li>
                    </ol>
                </div>
            </div>
        </div>
        </section>
    
    );
}

export default Hero;
import React from 'react';
function Brojkerge() {
    return ( 
        <div className='container border-top'>
            <div className='row'>
                <div className='col-8 p-5'>
                    <a href='' className='my-5' style={{textDecoration:"none"}}><h3 className='text-center fs-5' >Brojkerge calculator</h3></a>
                    <ul className='p-5' style={{lineHeight:"2.5"}}>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                </div>
                <div className='col p-5 mb-5'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='text-center fs-5'  style={{textDecoration:"none"}}>List of charges</h3></a>
                    
                </div>
            </div>
        </div>
     );
}

export default Brojkerge;
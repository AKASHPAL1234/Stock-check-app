import React from 'react';
function Team() {
    return (
        <div className='container p-3 '>
            <div className='row  mb-5 border-top '>
                <h1 className='  mt-5 text-center'>People</h1>
            </div>

            <div className='row mt-5  text-muted fs-6 ' style={{ lineHeight: "1.8", fontSize: "1.5rem" }}>
                <div className='col p-3 text-center'>
                    <img src='media\image\WhatsApp Image 2025-02-18 at 1.38.18 PM.jpeg' style={{ borderRadius: "100%", width: "60%" }} ></img>
                    <h4 className='mt-5'>Akash pal</h4>
                    <h6>Created</h6>
                </div>
                <div className='col p-3 my-5 '>
                    <p>Akash pal from Amraula akbarpur ambedkar nager uttar pradesh</p>

                       <p> schoocling from VDSS board and inter from MBDRSIC</p>

                      <p> playing outdoor and indoor game both.</p>

                       <p> Connect on <a href=''>Homepage</a> /<a href=''>TradingQnA</a>/ <a href=''>Twitter</a>    </p>
                </div>
            </div>
        </div>


    );
}

export default Team;
import React from 'react';
function Rightsection({
    imageURL,
    productName,
    productDesription,
    learnMore,
}) {
    return ( 
        <div className='container '>
            <div className='row p-5 '>
                <div className='col-6 p-5 mt-5 ' style={{marginTop:"20%"}}>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <a href={learnMore}>Learn more</a>
                </div>
                <div className='col-6'>
                 <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default Rightsection;
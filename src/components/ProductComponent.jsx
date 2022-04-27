import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import EAuctionDataService from '../api/EAuctionDataService';

const ProductComponent = (props) => {

    const [productId, setProductId] = useState('');
    const [isValidProduct, setIsValidProduct] = useState(false);
    const [product, setProduct] = useState(
        
        
        {
            "productName": "",
            "shortDesc": "",
            "detailedDesc": "",
            "category": "",
            "startPrice": null,
            "bidEndDate": "",
            "bids": [
                {
                    "id": null,
                    "buyerName": "",
                    "email": "",
                    "phone": null,
                    "bidAmount": null
                }
            ]
        }
        );

    
    function fetchDetails() {
        console.log('productid - ' + productId);
        EAuctionDataService.retrieveAllBids(productId)
          .then(
              response => {
                  setIsValidProduct(true);
                  console.log(response.data);
                  setProduct(response.data)
              }
          )
          .catch( () =>{
            setIsValidProduct(false);
        }) 
    }
    
    return(
        <>
        
        <div class="container space" >
            <div class="row">
                <div class="col text-right">
                    Product: <input type="text" name="productId" value={productId} onChange={(event) => setProductId(event.target.value)} />
                </div>
                <div class="col text-left">
                    <button className="btn btn-success" onClick={fetchDetails}>Get</button>
                </div>
            </div>
        </div>

        
        <div class="container space">
            <div class="row">
                <div class="col text-right">
                    Product Name : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{product.productName}</label>}
                </div>
            </div>
            
            <div class="row">
                <div class="col text-right">
                    Short Description : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{product.shortDesc}</label>}
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                Detailed Description : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{product.detailedDesc}</label>}
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                Category : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{product.category}</label>}
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                Starting Price : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{product.startPrice}</label>}
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                Bid End Date : 
                </div>
                <div class="col text-left">
                    {isValidProduct && <label>{moment(product.bidEndDate).format('YYYY-MM-DD')}</label>}
                </div>
            </div>
        
        </div>
        
                     
        <div>
            {/* <h1>Bids</h1> */}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Bid Amount</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                    {isValidProduct && 
                        product.bids.map (
                            bid =>
                                <tr key={bid.id}>
                                    <td>{bid.bidAmount}</td>
                                    <td>{bid.buyerName}</td>
                                    <td>{bid.email}</td>
                                    <td>{bid.phone}</td>
                                </tr>
                        )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        
        {/* </div> */}
    </>
    )
}

export default ProductComponent
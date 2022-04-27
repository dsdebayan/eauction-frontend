import axios from 'axios'

class EAuctionDataService {
    retrieveAllBids(productId) {
        //console.log('executed service')
        return axios.get(`http://localhost:8765/seller/e-auction/api/v1/seller/show-bids/${productId}`);
    }

    }


export default new EAuctionDataService()
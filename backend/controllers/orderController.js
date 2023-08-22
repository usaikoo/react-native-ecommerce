const Order = require('../models/Order');

module.exports = {
    getUserOrders: async(res, req) =>{
        const userId = req.params.id;
        try{
            const orders = Order.find({userId}).populate({
                path:'productId',
                select:'-description -product_location',
                
            })  
        res.status(200).json(orders)          
        }catch(err){
            res.status(500).json(err)          

        }
    }
}
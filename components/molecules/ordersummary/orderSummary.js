const OrderSummary = () => {

    return (
        <div className="order-summary" >
            <div className="summary-data">
                <ul>
                    <li><span className='sub-total'>Sub Total</span><span className='sub-total'>$ 200</span></li>

                    <li><span>Discount</span> <span>-</span></li>

                    <li><span>Saved with Promo</span> <span>$ 10</span></li>

                    <li><span>Delivery Charges</span><span>$ 8</span></li>

                    <li><span>VAT</span> <span>$ 20</span></li>

                    <hr/>

                    <li><span className='total-amount'>Total Amount</span> <span className='total-amount'>$ 218</span></li>
                </ul>
                
            </div>
        </div>
    )
}


export default OrderSummary
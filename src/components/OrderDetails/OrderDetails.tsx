import React, {ReactNode} from 'react';
import './OrderDetails.css'
interface Props {
    order: React.ReactNode
}
const OrderDetails:React.FC<Props> = ({order}) => {


    return (
        <div className='OrderDetails'>
            {order}
        </div>
    );
};

export default OrderDetails;
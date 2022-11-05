import React from 'react';
import './Additems.css';
interface Props {
    MenuList: React.ReactNode
}
const AddItems:React.FC<Props> = ({MenuList}) => {

    return (
        <div className='AddItems'>
            {MenuList}
        </div>
    );
};

export default AddItems;
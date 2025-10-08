import { ArrowDownToLine } from 'lucide-react';
import React from 'react';
import star from '../assets/icon-ratings.png'
const SingleAppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app
    return (
        <div>
            <div className="card bg-white shadow-md hover:scale-105 transition ease-in-out">
                <figure className='h-56 m-2 overflow-hidden'>
                    <img className=''
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className='text-lg font-semibold'>{title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge bg-green-50 text-green-400"><ArrowDownToLine className=' h-[15px] w-[15px] '/>{downloads}</div>
                        <div className="badge bg-orange-50 text-orange-400"><img src={star} className='h-[15px] w-[15px]' alt="" />{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppCard;
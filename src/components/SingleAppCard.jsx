import { ArrowDownToLine } from 'lucide-react';
import React from 'react';
import star from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const SingleAppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads,id } = app
    return (
        <div>
            <Link to={`/app/${id}`}>
                <div className="card bg-white shadow-md hover:scale-105 transition ease-in-out">
                    <figure className='h-28 md:h-56 m-2 overflow-hidden'>
                        <img className=''
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className='md:text-lg font-semibold'>{title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge bg-green-50 text-green-400"><ArrowDownToLine className=' h-[15px] w-[15px] ' />{downloads}M</div>
                            <div className="badge bg-orange-50 text-orange-400"><img src={star} className='h-[15px] w-[15px]' alt="" />{ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleAppCard;
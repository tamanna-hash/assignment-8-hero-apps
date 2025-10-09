import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { Download } from 'lucide-react';
import review from '../assets/icon-review.png';
import rating from '../assets/icon-ratings.png'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const clickedApp = apps.find(app => String(app.id) === id)
    const { image, ratingAvg, downloads, companyName, size, title, reviews, description } = clickedApp || {}
    const [isDisabled, setIsDisabled] = useState(() => {
        const existingList = JSON.parse(localStorage.getItem('installed')) || [];
        return existingList.some(a => a.id === clickedApp?.id);
    });

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installed')) || [];
        setIsDisabled(existingList.some(a => a.id === clickedApp?.id));
    }, [clickedApp]);
    if (loading) return <Loader />
    const handleInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem('installed'))
        let updatedList = []
        if (existingList) {
            // const isDuplicate = existingList.some(a => a.id === clickedApp.id)
            // if (isDuplicate) return toast('Installed')
            updatedList = [...existingList, clickedApp]
        }
        else {
            updatedList.push(clickedApp)
        }
        localStorage.setItem('installed', JSON.stringify(updatedList))
        setIsDisabled(true);
        toast.success('App Installed Successfully!');
    }
    const parsedRatings = typeof clickedApp?.ratings === "string"
        ? JSON.parse(clickedApp.ratings)
        : clickedApp?.ratings || [];
    return (
        <div className='bg-gray-100'>
            <div>
                <div className='md:flex gap-9  items-start md:p-24 md:pb-8 border-b-1 border-gray-400'>
                    <div>
                        <img className='h-28 w-28 md:h-[300px] md:w-[300px]' src={image} alt="" />
                    </div>
                    <div className=''>
                        <div className='border-b-1 border-gray-400 w-full'>
                            <h1 className='text-xl md:text-3xl font-bold mb-2'>{title}</h1>
                            <p className='text-gray-500 mb-4'>Developed by <span className='text-purple-600 font-semibold'>{companyName}</span></p>
                        </div>
                        <div className='my-3 md:my-6 flex justify-between gap-6'>
                            <div>
                                <Download className='text-green-600 h-[30px] w-[30px]'></Download>
                                <p className='text-gray-600 my-2 text-sm'>Downloads</p>
                                <p className='text-xl md:text-3xl font-bold'>
                                    {downloads}M
                                </p>
                            </div>
                            <div>
                                <img src={rating} className='text-green-600 h-[30px] w-[30px]' />
                                <p className='text-gray-600 my-2 text-sm'>Average Ratings</p>
                                <p className='text-xl md:text-3xl font-bold'>{ratingAvg}</p>
                            </div>
                            <div>
                                <img src={review} className='text-green-600 h-[30px] w-[30px]' />
                                <p className='text-gray-600 my-2 text-sm'>Total Reviews</p>
                                <p className='text-xl md:text-3xl font-bold'>{reviews}</p>
                            </div>
                        </div>
                        <button
                            disabled={isDisabled}
                            onClick={handleInstalled}
                            className='btn bg-[#00D390] text-white md:btn-lg'>
                            {isDisabled ? 'Installed' : 'Install Now'}
                            <span>({size} MB)</span>
                        </button>
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto'>
                    <div className="p-2">
                        <h1 className='text-lg font-bold'>Ratings</h1>
                        <ResponsiveContainer width="90%" height={300}>
                            <BarChart data={[...parsedRatings].reverse()} layout="vertical" margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" />
                                <Bar dataKey="count" fill="#FF8C00" barSize={25} />
                                <Tooltip></Tooltip>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold'>Description</h1>
                        <p className='text-gray-500'>{description}</p>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default AppDetails;
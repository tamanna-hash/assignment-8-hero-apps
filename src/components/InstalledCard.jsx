import React from 'react';
import rating from '../assets/icon-ratings.png'
import { Download } from 'lucide-react';
import { toast } from 'react-toastify';
const InstalledCard = ({ app, setInstalled }) => {
    const { image, ratingAvg, downloads, size, title, id } = app
    const handleUnInstalled = (id) => {
        const installedList = JSON.parse(localStorage.getItem('installed'))
        let updatedList = installedList.filter(app => app.id !== id)
        // for ui instant update
        setInstalled(updatedList)
        localStorage.setItem('installed', JSON.stringify(updatedList))
        toast.success('App uninstalled Successfully!');
    }
    return (
        <div className='bg-white p-2 md:p-4 mb-2 flex justify-between items-center'>
            <div className="flex items-center gap-2 md:gap-4">
                <div>
                    <img src={image} className='h-[70px] w-[70px]' alt="" />
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-2'>{title}</h1>
                    <div className='md:flex gap-3'>
                        <p className='flex gap-1.5 text-sm text-[#00D390]'><Download className='h-[20px] w-[20px] text-[#00D390]' />{downloads}</p>
                        <p className='flex gap-1.5 text-sm text-orange-400'><img src={rating} className='h-[20px] w-[20px]' alt="" />{ratingAvg}</p>
                        <p className='flex gap-1.5 text-sm text-gray-500'>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUnInstalled(id)} className='btn btn-sm md:btn-md bg-[#00D390] text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledCard;
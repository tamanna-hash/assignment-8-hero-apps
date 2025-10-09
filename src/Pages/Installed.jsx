import React, { useEffect, useState } from 'react';
import InstalledCard from '../components/InstalledCard';

const Installed = () => {
    const installedList = JSON.parse(localStorage.getItem('installed')) || {}
    const [installed, setInstalled] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        if (installedList) {
            setInstalled(installedList)
        }
    }, [])
    const sortedItem = (
        () => {
            if (sortOrder === 'low-dwn') {
                return [...installed].sort((a, b) => a.downloads - b.downloads)
            }
            else if (sortOrder === 'high-dwn') {
                return [...installed].sort((a, b) => b.downloads - a.downloads)
            }
            else {
                return installed
            }
        })()

    return (
        <div className='pt-7 bg-gray-100 '>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center '>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-sm text-gray-500'>Explore All Apps on the Market developed by us.</p>
                    <div className='my-6 flex justify-between'>
                        <p className='md:text-lg font-semibold'><span>({installed.length})</span> Apps Found</p>
                        <label className='form-control w-full max-w-xs'>
                            <select
                                className='select select-bordered'
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="none">Sort</option>
                                <option value="low-dwn">Low-&gt;high</option>
                                <option value="high-dwn">high-&gt;low</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='m-2'>
                    {
                        sortedItem.map(app => <InstalledCard key={app.id} setInstalled={setInstalled} app={app}></InstalledCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Installed;
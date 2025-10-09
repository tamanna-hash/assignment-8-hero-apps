import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import SingleAppCard from '../components/SingleAppCard';
import { Search } from 'lucide-react';
import Loader from '../components/Loader';
import NotFound from '../components/NotFound';

const AllApps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState(false);
    const term = search.trim().toLocaleLowerCase();
    const filteredApps = term
        ? apps.filter(app => app.title.toLowerCase().includes(term))
        : apps;

    const searchedApps = term ?
        apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps
    return (
        <div className='pt-7 bg-gray-100 '>
            <div className='max-w-[1280px] mx-auto'>
                <div className='text-center '>
                    <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                    <p className='text-sm text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    <div className='my-6 flex justify-between'>
                        <p className='text-lg font-semibold'><span>({searchedApps.length})</span> Apps Found</p>
                        <label className="input input-sm">
                            <Search className='text-gray-400' />
                            <input
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setSearchLoading(true)
                                    setTimeout(() => setSearchLoading(false), 200);
                                }}
                                type="search"
                                placeholder="Search App" />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-7 mx-2'>
                    {(loading || searchLoading) ? (
                        <Loader />
                    ) : filteredApps.length > 0 ? (
                        filteredApps.map(app => <SingleAppCard key={app.id} app={app} />)
                    ) : (
                        <NotFound/> 
                    )}

                    {/* {loading ? (
                        <Loader></Loader>
                    ) : (
                        searchedApps.map(app => <SingleAppCard key={app.id} app={app}></SingleAppCard>)
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default AllApps;
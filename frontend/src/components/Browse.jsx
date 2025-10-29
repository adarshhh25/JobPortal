import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Footer from './shared/Footer';

const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 max-w-7xl mx-auto my-10 px-4 w-full'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                {
                    allJobs.length === 0 ? (
                        <div className='flex items-center justify-center py-20'>
                            <p className='text-gray-500 text-lg'>No jobs found</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10'>
                            {
                                allJobs.map((job) => {
                                    return (
                                        <Job key={job._id} job={job}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Browse
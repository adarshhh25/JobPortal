// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel


import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Home, Building2, Users, TrendingUp, IndianRupee, BarChart3, Lightbulb, Rocket, FileText, GraduationCap, Settings } from 'lucide-react';

const categories = [
    {
        name: "Remote",
        icon: Home,
        query: "Remote"
    },
    {
        name: "MNC",
        icon: Building2,
        query: "MNC"
    },
    {
        name: "HR",
        icon: Users,
        query: "HR"
    },
    {
        name: "Marketing",
        icon: TrendingUp,
        query: "Marketing"
    },
    {
        name: "Banking & Finance",
        icon: IndianRupee,
        query: "Banking Finance"
    },
    {
        name: "Analytics",
        icon: BarChart3,
        query: "Analytics"
    },
    {
        name: "Fortune 500",
        icon: Lightbulb,
        query: "Fortune 500"
    },
    {
        name: "Startup",
        icon: Rocket,
        query: "Startup"
    },
    {
        name: "Internship",
        icon: FileText,
        query: "Internship"
    },
    {
        name: "Fresher",
        icon: GraduationCap,
        query: "Fresher"
    },
    {
        name: "Engineering",
        icon: Settings,
        query: "Engineering"
    }
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="w-full my-12 px-4">
            <Carousel 
                className="w-full max-w-7xl mx-auto"
                opts={{
                    align: "start",
                    loop: false,
                }}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <CarouselItem 
                                key={index} 
                                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                            >
                                <Button 
                                    onClick={() => searchJobHandler(cat.query)} 
                                    variant="outline" 
                                    className="w-full h-auto py-4 px-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-between gap-2"
                                >
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <Icon className="w-5 h-5 flex-shrink-0 text-gray-700" />
                                        <span className="text-sm font-medium text-gray-900 truncate">
                                            {cat.name}
                                        </span>
                                    </div>
                                    <svg 
                                        className="w-4 h-4 flex-shrink-0 text-gray-400" 
                                        fill="none" 
                                        strokeWidth="2" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    );
}

export default CategoryCarousel;
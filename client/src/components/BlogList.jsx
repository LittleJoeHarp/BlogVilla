import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import {motion} from "motion/react"
import BlogCard from './BlogCard';
import { useAppContext } from '../context/AppContext';

const BlogList = () => {
    const [menu,setMenu] = useState("All");
    const {blogs, input} = useAppContext();

    const filteredBlogs = ()=>{
        if(input === '') return blogs;
        return blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()));
    }

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button onClick={()=>setMenu(item)} className={`cursor-pointer px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${menu === item ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>
                            {item}
                        </button> 
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {filteredBlogs().filter((blog) => menu === "All" ? true: blog.category === menu).map((blog) => <BlogCard key={blog._id} blog={blog} />)}
            </div>

        </div>
    )
}

export default BlogList

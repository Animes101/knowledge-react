import { useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";

const Blog = (props) => {

    const {author,id,name,post_date,profile_img,reading_time,title,description,image}=props.blog;
    const {onBookMark}=props;

    const [isMark ,setIsMark]=useState(false);

    const handleBookMark=()=>{
        onBookMark(props.blog)
        setIsMark(!isMark);

    }

  return <div className="w-[90%] mx-auto  bg-[#6047EC1A] p-5 rounded-md">
    <img className="w-full rounded-md h-[400px]" src={image} alt={name} />
    <div className="space-y-4">
        <div className="md:flex justify-between space-y-3 items-center">
        <div className="flex gap-4 items-center mt-4">
            <img className="w-[100px] h-[100px] rounded-full ring-2 ring-green-500" src={profile_img} alt="" />
            <div>
                <h1 className="text-[#111] text-2xl font-bold">{author}</h1>
                <h4 className="text-[#11111199] text-base font-semibold">{post_date}</h4>
            </div>

        </div>
        <div>
        <h2 onClick={handleBookMark} className="text-[#11111199] cursor-pointer text-2xl ">{reading_time > 9 ?  `${reading_time}`:`0${reading_time}`} min read <CiSaveDown1 className={`inline-block text-3xl ${isMark ? 'text-red-500' : 'text-green-500'}`} /></h2>
        </div>
        </div>
        <h3 className="text-[#11111199] text-lg font-semibold">{title}</h3>
        <p className="text-[#111] text-3xl font-extrabold">{description}</p>
        <div className="flex gap-5">
            <h4 className="text-2xl font-semibold ">#beginners</h4>
            <h4 className="text-2xl font-semibold ">#programming</h4>
        </div>
        <button className="text-[#6047EC] underline underline-offset-8 text-3xl font-bold">Mark as read</button>
    </div>


  </div>;
};
export default Blog;
const BookMark = ({bookMark ,readTimes}) => {

  return <div className="md:w-1/3 border border-black bg-[#1111110D]">
    <div className="text-3xl font-bold text-[#6047EC] p-4 bg-[#6047EC1A] mb-3">
      <h1>Spent time on read : {readTimes} min</h1>
    </div>
    <h1 className="text-3xl font-bold">Bookmarked Blogs : {bookMark.length}</h1>
    <div className="p-2 space-y-3">
      {bookMark.map((markItem,index)=>{
        const {description}=markItem;
        return (
          <div key={index} className="p-2 bg-[#FFF] rounded-md">
            <h1 className="text-lg font-semibold">{description}</h1>
          </div>
        )

      })}
    </div>
    
  </div>;
};
export default BookMark;
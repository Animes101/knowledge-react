const BookMark = ({bookMark}) => {

  console.log(bookMark);

  return <div className="md:w-1/3 border border-black bg-[#1111110D]">
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
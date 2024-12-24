const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
     {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-card m-4 w-40 h-[240px] bg-gray-100" />
      ))}
     
      
     
    </div>
  );
};
export default Shimmer;

const ShimmerCard = () => (
  <div className="shimmer-container">
    <div className="shimmer-card"></div>
    <h3 className="shimmer-heading"></h3> 
    <h4 className="shimmer-heading shimmer-heading-2"></h4>  

  </div>
);


const Shimmer = () => {
  return (
    <div className="main-shimmer-container">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};




export default Shimmer;

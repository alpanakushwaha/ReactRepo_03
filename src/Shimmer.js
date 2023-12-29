const Shimmer = () => {
  return (
    <>
      <div className="shimmers">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <h1 className="shimmer-card" key={index}>
              {" "}
              Shimmer UI{" "}
            </h1>
          ))}
      </div>
    </>
  );
};
export default Shimmer;

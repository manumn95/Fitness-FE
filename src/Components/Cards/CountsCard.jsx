const CountsCard = (Props) => {
  return (
    <>
      <div className="container">
        <div className=" d-flex flex-1 justify-content-between my-2 bg-light rounded p-3">
          <div>
            <h2 className="text-info">{Props.item.name}</h2>
            <p className="text-black fw-bold">
              1200 <span>{Props.item.unit}</span>
              <span>(+10%)</span>
            </p>
            <p className="text-muted">{Props.item.desc}</p>
          </div>
          <div>
            <img src={Props.item.icon}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountsCard;

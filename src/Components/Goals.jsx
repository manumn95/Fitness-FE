import workouts from "./constant";

const Goals = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-info">Workouts/Add Workouts</h1>
      <div className="row">
        {workouts.map((data, index) => {
          return (
            <>
              <div className="col-md-4 d-flex">
                <div
                  key={index}
                  className="card mb-5 mt-5 m-auto"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt="..."
                  ></img>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;

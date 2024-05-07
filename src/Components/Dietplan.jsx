import { useState } from "react";
import "../Components/style.css";
import { useNavigate } from "react-router-dom";

const Dietplan = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const [diet, setDiet] = useState([]);
  const [styles, setStyles] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";

      if (bmi < 18.5) {
        setStyles("text-warning");
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        setStyles("text-success");
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        setStyles("text-danger");
        message = "You are Overweight";
      } else {
        setStyles("text-danger");
        message = "You are Obese";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };

  const handleClick = () => {
    if (bmiMessage) {
      if (bmiMessage === "You are Underweight") {
        setDiet((preval) => {
          return [...preval, bmiMessage];
        });
      } else if (bmiMessage === "You are Normal weight") {
        setDiet((preval) => {
          return [...preval, bmiMessage];
        });
      } else if (bmiMessage === "You are Overweight") {
        setDiet((preval) => {
          return [...preval, bmiMessage];
        });
      } else if (bmiMessage === "You are Obese") {
        setDiet((preval) => {
          return [...preval, bmiMessage];
        });
      }
    } else {
      console.log("please check your BMI");
    }
  };

  const navigate = useNavigate();

  const handleDiet = () => {
    if (bmiMessage === "You are Underweight") {
      navigate("/underweight");
    } else if (bmiMessage === "You are Normal weight") {
      navigate("/normalweight");
    } else if (bmiMessage === "ou are Overweight") {
      navigate("/overweight");
    } else if (bmiMessage === "You are Obese") {
      navigate("/obese");
    }
  };
  return (
    <>
      <div className="mt-5 mb-5  d-flex justify-content-center ">
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <h1 className="text-warning mt-5 text-center">
            Nutrifit BMI Calculator
          </h1>
          <div className="container mb-5">
            <input
              className="mt-3 fs-4 rounded"
              style={{ width: "100%" }}
              type="text"
              id="height"
              placeholder="Enter Your Height (cm)"
              value={heightValue}
              maxLength={3}
              onChange={(e) => setHeightValue(e.target.value)}
            />
            <br></br>
            <input
              className="mt-3 fs-4 rounded"
              style={{ width: "100%" }}
              type="text"
              id="weight"
              placeholder="Enter Your Weight (kg)"
              maxLength={3}
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
            />
            <button
              className="btn btn-primary mt-3 fs-4 rounded "
              style={{ width: "100%" }}
              onClick={calculateBmi}
            >
              Click to Calculate BMI
            </button>
          </div>

          {bmiValue && bmiMessage && (
            <div className="result">
              <p className="text-white fs-3">
                Your BMI: <span className="text-info">{bmiValue}</span>
              </p>
              <p className="text-white fs-2">
                Result: <span className={styles}>{bmiMessage}</span>
              </p>

              <button
                className=" mb-2 btn btn-success"
                style={{ width: "100%", color: "white" }}
                onClick={handleClick}
              >
                Add Your Diet Plans
              </button>
            </div>
          )}
        </div>
      </div>
      {diet && (
        <div className="container mb-5">
          <table className="table">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Diet Name</th>
                <th>Go to Diet</th>
              </tr>
            </thead>
            <tbody>
              {diet.map((data, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data}</td>
                    <td>
                      <div className="d-flex">
                        <button className="btn btn-info" onClick={handleDiet}>
                          Click me
                        </button>
                        <button className="ms-2 btn btn-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Dietplan;

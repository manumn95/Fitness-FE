import "../Components/style.css";
import logo from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "bootstrap-icons/font/bootstrap-icons.css";
import workouts from "./constant";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

const Goals = () => {
  const [openmodal, setOPenModal] = useState(false);

  const handleClick = () => {
    setOPenModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-info">Workouts/Add Workouts</h1>
      <div className="row">
        {workouts.map((data, index) => {
          return (
            <>
              <div className="col-md-4 d-flex ">
                <div
                  key={index}
                  className="card mb-5 mt-5 m-auto "
                  style={{ width: "18rem" }}
                >
                  <img
                    src={data.image}
                    className="card-img-top "
                    alt="..."
                    onClick={() => {
                      setOPenModal(true);
                    }}
                  ></img>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Modal
        open={openmodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(255, 255, 255,0.2)",
        }}
      >
        <Box sx={style}>
          <div className="d-flex justify-content-end">
            <i
              className="bi bi-x-square-fill fs-2 text-black"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            ></i>
          </div>
          <div className="d-flex justify-content-center ">
            <img
              src={logo}
              style={{ width: "100px", borderRadius: "50%" }}
            ></img>
          </div>

          <Typography
            className="text-center mt-3 text-white"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Workouts
          </Typography>
          <div>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Workout Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="text"
              label="Reps"
              variant="outlined"
              margin="normal"
            />
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="text"
              label="Distance Covered"
              variant="outlined"
              margin="normal"
            />
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="date"
              label=""
              variant="outlined"
              margin="normal"
            />
            <div>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                className="p-3"
              >
                Add workout
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Goals;

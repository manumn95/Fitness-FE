import "../Components/style.css";
import logo from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signup from "./Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(211, 211, 211,0.2)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};
const Login = (Props) => {
  const handleclick = () => {
    Props.setType(false);
  };
  if (!Props.open) return null;
  return (
    <>
    {Props.type === 'signup'?(<Signup></Signup>):( <div>
        <Modal
          open={Props.open}
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
                className="bi bi-x-square-fill fs-2 text-white"
                style={{ cursor: "pointer" }}
                onClick={handleclick}
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
              Login
            </Typography>
            <div>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
              />
              <div>
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  className="p-3"
                >
                  Login
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>)}
     
    </>
  );
};

export default Login;

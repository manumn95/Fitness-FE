import signupbg from "../assets/images/signupbg.jpg";
const Signup = (Props) => {
  if (!Props.open) return null;
  return (
    <>
      <div className="container signup-bg">
        <img src={signupbg}></img>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Signup;

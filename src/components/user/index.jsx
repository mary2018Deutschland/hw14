import { connect } from "react-redux";

function User({ userData }) {
  return (
    <>
      <h1>User Profile</h1>
      <h2>User Information</h2>
      <p>Name: {userData.name}</p>
      <p>Status: {userData.status}</p>
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state,
});

export default connect(mapStateToProps)(User);

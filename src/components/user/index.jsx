import { connect } from "react-redux";

function User({ userData }) {
  return (
    <>
      <p>Name: {userData.name}</p>
      <p>Status: {userData.status}</p>
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state,
});

export default connect(mapStateToProps)(User);

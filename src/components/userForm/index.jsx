import { useState } from "react";
import { changeUser } from "../../redux/actions/actions";
import { connect } from "react-redux";
import styles from "./styles.module.css";

function UserForm({ newUser }) {
  const [user, setUser] = useState({ name: "", status: "" });

  function handleChange(event) {
    //console.log(event);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  } //так можно создать функцию, чтобы потом ее использовать, чтобы отслеживать изменения input

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    setUser({ name: "", status: "" });
    newUser(user);
  }
  <h1>Edit User Information</h1>;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name:</p>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={user.name}
        />
        <p>Status:</p>
        <input
          onChange={handleChange}
          name="status"
          type="text"
          value={user.status}
        />
        <label>
          <button type="submit">SAVE</button>
        </label>
      </div>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => ({
  newUser: (newData) => dispatch(changeUser(newData)),
});

export default connect(null, mapDispatchToProps)(UserForm);

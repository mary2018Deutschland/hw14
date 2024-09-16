import { useState } from "react";
import { changeUser } from "../../redux/actions/actions";
import { connect } from "react-redux";

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        value={user.name}
      />
      <input
        onChange={handleChange}
        name="status"
        type="text"
        value={user.status}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => ({
  newUser: (newData) => dispatch(changeUser(newData)),
});

export default connect(null, mapDispatchToProps)(UserForm);

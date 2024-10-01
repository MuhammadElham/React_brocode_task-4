// import dataType from "../node_modules/prop-types"
import DataType from "prop-types"; // just write file name automatically locates the correct package from node_modules

function Student(props) {
  const inlineStyle = { // Object
    margin: "15px 0", 
  };
  return (
    <div className="studentData">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      <hr style={inlineStyle} />
    </div>
  );
}
// For Identifying dataType in Console
// make Object
Student.propTypes = { // propTypes is the "property"
  name: DataType.string,
  age: DataType.number,
  isStudent: DataType.bool,
};
// Default Value Suggestion
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;

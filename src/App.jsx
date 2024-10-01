import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Student name="Muhammad Elham Waheed" age={20} isStudent={true} />
      <Student name="Eman Waheed" age={22} isStudent={false} />
      <Student age={22} isStudent={false} /> {/* Remove Name */}
      <Student name="Eman Waheed" isStudent={false} /> {/* Remove Age */}
      <Student name="Eman Waheed" age={22} /> {/* Remove Student */}
    </>
  );
}

export default App;

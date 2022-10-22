import { useState } from "react";
import "./App.css";

function App() {
  const [StudentName, setStudentName] = useState("");
  const [StudentEmail, setStudentEmail] = useState("");
  const [StudentWebsite, setStudentWebsite] = useState("");
  const [StudentNo, setStudentNo] = useState("");
  const [StudentGender, setStudentGender] = useState("");

  const [StudentFormData, setStudentFormData] = useState([]);

  const resetAll = () => {
    setStudentName("");
    setStudentEmail("");
    setStudentWebsite("");
    setStudentNo("");
  };

  const submitData = (e) => {
    e.preventDefault();

    if (
      StudentName === "" ||
      StudentEmail === "" ||
      StudentNo === "" ||
      StudentWebsite === "" ||
      StudentGender === ""
    ) {
      alert("Please Enter Details");
      return;
    }
    var a = new Array();
    if (document.getElementById("java").checked) {
      a.push("java");
    }
    if (document.getElementById("Html").checked) {
      a.push("Html");
    }
    if (document.getElementById("Css").checked) {
      a.push("Css");
    }

    const Data = {
      name: StudentName,
      email: StudentEmail,
      no: StudentNo,
      website: StudentWebsite,
      gender: StudentGender,
      skills: a,
    };
    setStudentFormData((StudentFormData) => [...StudentFormData, Data]);
  };

  return (
    <>
      <div className="header">
        <h2>Student Enrollment Form</h2>
      </div>

      <div className="mainSection">
        <form action="#" className="formMain">
          <div className="field">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              className="name"
              value={StudentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              placeholder="Enter Yor Email"
              id="email"
              className="email"
              value={StudentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="website">Website : </label>
            <input
              type="text"
              placeholder="Enter Yor Website"
              id="website"
              className="website"
              value={StudentWebsite}
              onChange={(e) => setStudentWebsite(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="no">Number : </label>
            <input
              type="number"
              placeholder="Enter Your Number"
              id="no"
              className="no"
              value={StudentNo}
              onChange={(e) => setStudentNo(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="gender">Gender : </label>

            <div className="choices">
              <input
                type="radio"
                name="gender"
                id="male"
                onChange={(e) => {
                  if (e.target.checked) {
                    setStudentGender("Male");
                  }
                }}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="choices">
              <input
                type="radio"
                name="gender"
                id="female"
                onChange={(e) => {
                  if (e.target.checked) {
                    setStudentGender("Male");
                  }
                }}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="field">
            <label htmlFor="skill">Skills : </label>

            <div className="choices">
              <input type="checkbox" name="java" id="java" />
              <label htmlFor="java">Java</label>
            </div>

            <div className="choices">
              <input type="checkbox" name="Html" id="Html" />
              <label htmlFor="Html">Html</label>
            </div>

            <div className="choices">
              <input type="checkbox" name="Css" id="Css" />
              <label htmlFor="Css">Css</label>
            </div>
          </div>

          <div className="btnGroups">
            <input
              type="submit"
              value="Enroll Student"
              className="btn"
              onClick={submitData}
            />
            <input
              type="reset"
              value="Clear"
              className="btn reset"
              onClick={resetAll}
            />
          </div>
        </form>
        <div className="studentList">
          <h1>Enrolled Students</h1>
          {StudentFormData.map((student) => {
            return (
              <div className="list" key={student.name + Math.random()}>
                <div className="leftSide">
                  <img src="./user.png" alt="img" />
                </div>
                <div className="rightSide">
                  <h3>Name : {student.name}</h3>
                  <h3>Email : {student.email}</h3>
                  <h3>
                    Website : <a href="#">{student.website}</a>
                  </h3>
                  <h3>Gender : {student.gender}</h3>
                  <h3>
                    Skills :{" "}
                    {student.skills.map((skill) => {
                      return skill + " ";
                    })}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";
import { course } from "../../sevices/courseListService";
import { useSelector, useDispatch } from "react-redux";
import { setCoursesInStore } from "../../actions/courses";
const Courses = () => {
  const dispatch = useDispatch();
  const url = "http://localhost:3001/courses";
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const listOfCoursesFromStore = useSelector((store) => store.courses);
  useEffect(() => {
    setIsLoading(true);
    if (listOfCoursesFromStore.length) {
      setCourses([...listOfCoursesFromStore]);
      setIsLoading(false);
    } else {
      fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCourses(data);
          setIsLoading(false);
          course.courseList = data;
          dispatch(setCoursesInStore(data));
        });
    }
  }, [dispatch, listOfCoursesFromStore]);
  const navigateToCourseActivity = (course) => {
    navigate(`/lessons/${course.id}`);
  };
  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    if (courses.length) {
      return (
        <div
          className="container"
          style={{ marginTop: "56px", marginBottom: "50px" }}
        >
          <div className="row">
            {courses.map((course) => (
              <div className="col-lg-4 col-md-6 col-xs-12" key={course.id}>
                <div
                  className="card"
                  style={{
                    height: "450px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={course?.iconUrl}
                    className="card-img-top"
                    alt={course?.description}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{course?.description}</h5>
                    <p className="card-text">{course?.longDescription}</p>
                    <div
                      className="btn btn-primary"
                      onClick={() => navigateToCourseActivity(course)}
                    >
                      Start
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>No Courses Found</div>;
    }
  }
};

export default Courses;

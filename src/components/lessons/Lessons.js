import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./lessons.module.css";
import Completion from "../completion/Completion";
import { markLessonAsCompleted } from "../../actions/courses";
const Lessons = () => {
  const { courseID } = useParams();
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState({});
  const listOfCoursesFromStore = useSelector((store) => store.courses);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    let selectedCourse = listOfCoursesFromStore.filter(
      (item) => item.id === parseInt(courseID)
    );
    selectedCourse[0].lessons.forEach((element) => {
      element["isModalOpen"] = false;
    });
    setSelectedCourse({ ...selectedCourse[0] });
  }, [listOfCoursesFromStore, courseID]);
  const launch = (lesson) => {
    let tempSelectedCourse = { ...selectedCourse };
    tempSelectedCourse.lessons.forEach((element) => {
      if (element.id === lesson.id) {
        element.isModalOpen = true;
      }
    });
    setSelectedCourse({ ...tempSelectedCourse });
  };
  const handleModalClose = (lesson) => {
    closeModal(lesson);
  };
  const closeModal = (lesson) => {
    let tempSelectedCourse = { ...selectedCourse };
    tempSelectedCourse.lessons.forEach((element) => {
      if (element.id === lesson.id) {
        element.isModalOpen = false;
      }
    });
    setSelectedCourse({ ...tempSelectedCourse });
  };
  const handleMarkItComplete = (lesson) => {
    dispatch(markLessonAsCompleted({ ...lesson, isModalOpen: false }));
  };

  return (
    <div
      className="container"
      style={{ marginTop: "56px", marginBottom: "50px" }}
    >
      <div className="row">
        {selectedCourse?.lessons?.map((lesson) => (
          <div
            className="col-lg-4 col-md-6 col-xs-12"
            key={lesson.id}
            style={{ marginTop: "10px" }}
          >
            <div className={classes.eachLessonWrapper}>
              <div className={classes.imageWrapper}>
                <img
                  src={selectedCourse?.iconUrl}
                  className="card-img-top"
                  alt="course"
                />
              </div>
              <div className={classes.infoWrapper}>
                <div className={classes.title}>{lesson.description}</div>
                <div className={classes.duration}>
                  Duration : {lesson.duration}
                </div>
                <div className="btn btn-primary" onClick={() => launch(lesson)}>
                  Launch
                </div>
              </div>
              {lesson?.isModalOpen && (
                <Completion
                  name={lesson.description}
                  closeModal={() => handleModalClose(lesson)}
                  markItComplete={() => handleMarkItComplete(lesson)}
                  isCompleted={lesson.completed}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;

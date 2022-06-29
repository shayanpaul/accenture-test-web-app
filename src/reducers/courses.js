// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case "SET_COURSES":
      return action.payload;
    case "MARK_LESSON_COMPLETED":
      let courseListCopy = [...state];
      courseListCopy.forEach((course) => {
        if (course.id === action?.payload?.courseId) {
          course?.lessons?.forEach((lesson) => {
            if (lesson.id === action?.payload?.id) {
              lesson["completed"] = true;
            }
          });
        }
      });
      return [...courseListCopy];
    default:
      return state;
  }
}

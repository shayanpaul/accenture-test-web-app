export function setCoursesInStore(payload){
    return {
        type:'SET_COURSES',
        payload
    }
}

export function markLessonAsCompleted(payload){
    return {
        type:'MARK_LESSON_COMPLETED',
        payload
    }
}
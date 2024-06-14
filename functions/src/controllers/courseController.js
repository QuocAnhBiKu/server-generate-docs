// controllers/courseController.js
const courseService = require('../service/courseService');

async function getAllCourses(req, res) {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function findByCourseId(req, res) {
  try {
    const courseId = req.params.courseId; // Update to use courseId
    const course = await courseService.findByCourseId(courseId);
    if (course) {
      res.json(course);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function findByCourseName(req, res) {
  try {
    const courseName = req.params.courseName; // Update to use courseName
    const courses = await courseService.findByCourseName(courseName);
    res.json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCourses,
  findByCourseId,
  findByCourseName,
};
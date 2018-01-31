const express = require('express');
const router  = express.Router()
const Model = require('../models');
const Student = Model.Student

router.get('/',(req,res) => {
  Student.findAll(
    // { bisa diisi include }
  )
  .then(studentList => {
    res.render('student', {students: studentList})
    // res.send(studentList)
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add',(req,res) => {
  Student.findAll()
  .then(students => {
    res.render('student_add' {student: students})
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router

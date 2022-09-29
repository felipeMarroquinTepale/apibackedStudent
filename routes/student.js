var express = require('express');
var router = express.Router();
const studentService = require("../controllers/studentService");


//route para el inicio de sesion del administrador
router.get('/getallAlumno',studentService.consultStudent);
router.post('/registerStudent',studentService.insertStudent);
router.delete('/deleteStudent',studentService.deleteStudent);
router.put('/updateStudent',studentService.updateStudent);




module.exports = router;

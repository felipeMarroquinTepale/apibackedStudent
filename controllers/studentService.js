const studentDao = require("../models/studentDAO")

const insertStudent=(req, res)=>{
    console.log("Insertando usuario")
    const student = {
        idstudent: req.body.idstudent,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        rollnumber:req.body.rollnumber,
    }
    studentDao.insertStudent(student,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'datos insertados exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al insertar los datos'
            })
        }
    })
}

const consultStudent = (req, res) =>{
    console.log("Obteniendo datos de estudiantes")
    studentDao.consultStudent((data)=>{
        if ( data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Ningun dato"
            })
        }
    })
}

const deleteStudent = (req, res) =>{
    console.log("Eliminando estudiante")
    const idstudent = req.body.idstudent;
    studentDao.deleteStudent(idstudent,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'estudiante eliminado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateStudent = (req, res) =>{
    console.log("actualizando estudiante")
    const student = {
        idstudent: req.body.idstudent,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        rollnumber:req.body.rollnumber,
    }
    studentDao.updateStudent(student,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'estudiante actualizado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al actualizar los datos'
            })
        }
    })
}
module.exports = {
    consultStudent,
    insertStudent,
    deleteStudent,
    updateStudent
}
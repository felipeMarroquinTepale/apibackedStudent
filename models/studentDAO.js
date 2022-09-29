const bd = require("../configMysql");

module.exports = {

    consultStudent : (callback) =>{
        let sql = 'SELECT * FROM student'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertStudent: (student,callback)=>{
        let sql = 'INSERT INTO student SET ?'
        bd.query(sql,student,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteStudent: (idstudent,callback)=>{

        let sql = 'DELETE FROM student WHERE idstudent= ?'
        bd.query(sql,idstudent,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateStudent:(student,callback)=>{
        let sql = 'UPDATE student SET firstname = ?, lastname = ?, rollnumber = ? WHERE idstudent = ?;'
        bd.query(sql,student,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },
}
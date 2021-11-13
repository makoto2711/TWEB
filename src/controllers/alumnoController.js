const controller = {}

controller.list = (req, res) => 
{
    req.getConnection(  (err, conn) => 
    {
        conn.query("SELECT * FROM tbl_alumno", (err, alumnos) => 
        {
            if (err) {
                res.json(err);
            }

            res.render("alumno" , {  // alumno.ejs
                data: alumnos
            });

        });
    });
}




module.exports = controller

























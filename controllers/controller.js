const Employee = require('../models/employee');
exports.getdefault = function(req, res){
    res.send('You are on the root route.');
};
//
exports.aboutus=function(req, res){
    res.send('<h2>About us</h2><h3>Tejaskumar<br> 9071346694.</h3>');
};
//
exports.addemployee=function(req, res){
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    const Emp = new Employee();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save({}, function(err) {
        if (err)
            res.end(err);
        res.end(`Created ${empName}`);
    });     
};
//
exports.getemployees=function(req, res){
    Employee.find({}, function(err, results){
        if (err)
            res.end(err);
        res.json(results);
    });
};
//
exports.getemployee = function(req, res) {
    let empToFind = req.params.employeeName;
    Employee.find({empName:empToFind}, function(err, results){
        if (err)
        res.end(err);
        res.json(results);
    });
};
//
exports.deletebyname = function(req, res){
    let empToDelete = req.body.empName;
    Employee.deleteOne({empName:empToDelete}, function(err, result) {
        if (err)
        res.send(err);
        res.end(`Deleted ${empToDelete}`);
    });  
};
//
exports.updateemployee = function(req, res){
    let empName = req.body.empName;
    let newPass = req.body.newPass;
    let query = { empName : empName };
    let data = { $set : {empPass : newPass } };
    Employee.updateOne(query, data, function(err, result) {
        if (err)
            res.send(err);
            res.end(`Updated ${empName}`);
    });  
};
//



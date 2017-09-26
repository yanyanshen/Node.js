var kclass = require('./kclass');

//有很多班级
exports.add = function(kclasses){
    kclasses.forEach(function(item,index){//遍历班级数组
        var _kclass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        kclass.add(teacherName,students);
    });
};
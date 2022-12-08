export const arr = {
    arr_01 : {
        obj : {
          data1 : "data1"
        }, obj_02 :{
            data2 : "data2"
        },tf : function test_function(num1,num2) {
            let a = num1 + num2;
            console.log("test function executed");
            console.log(arr.arr_01.obj.data1);
            console.log(a);
        }
    }
}
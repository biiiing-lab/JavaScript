let yubin = {
    name : "유빈",
    showName : function() {
        console.log(yubin.name);
    }
};
yubin.showName();

let girl = yubin;
girl.name = "수정된 유빈";
console.log(girl.name);
module.factory("aService", function(dataService) {
    const result = {}

    result.getList = function () {
        let arr = [];
        for (let i=0; i<dataService.a; i++) {
            arr.push(i+1);
        }
        return arr;
    }

    return result
})
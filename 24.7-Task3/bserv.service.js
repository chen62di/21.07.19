module.service("bService", function(dataService) {
    this.getList = function () {
        let arr = [];
        for (let i=dataService.b; i>0; i--) {
            arr.push(i);
        }
        return arr;
    }
})
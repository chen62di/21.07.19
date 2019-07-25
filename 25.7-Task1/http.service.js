module.service("httpService", function(dataService, urlService, $http) {
    
    this.getAllData = function() {
        let p = $http.get(urlService.url);
        p.then( (resp) => {
            console.log(resp.data);
            dataService.todos = resp.data;
        }, (err) => {
            dataService.dataError = err;
        })
    }

    this.getDataById = function(dataId) {
        let p = $http.get(`${urlService.url}/${dataId}`);
        p.then( (resp) => {
            console.log(resp.data);
            dataService.someData = resp.data;
        }, (err) => {
            dataService.someDataError = err;
        })
    }
})
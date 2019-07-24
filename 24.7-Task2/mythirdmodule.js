const thirdModule = angular.module("mythirdmodule", []);
thirdModule.controller("HolaController", HolaCtrl);

function HolaCtrl() {
    this.message = "Hello I am controller in third module";
}
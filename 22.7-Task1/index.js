function clicked() {
    const name = document.getElementById("nameTxt").value;
    const age = document.getElementById("ageTxt").value;
    const password = document.getElementById("passwordTxt").value;
    const car = document.getElementById("car");
    const selectedCar = car.options[car.selectedIndex].value;
    const vehicle = document.getElementById("vehicle1Txt").checked;
    const gender = document.getElementsByName("gender");
    let selectedGender;
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            selectedGender = gender[i].value;
            break;
        }
    }

    const p1 = new Person(name, age, password, selectedGender, selectedCar, vehicle);
    console.log(p1);
    const p2 = new Personp({ name: name, age:age, password:password, gender:selectedGender, car:selectedCar, vehicle:vehicle});
    console.log(p2);
}




    
/*function clicked()
{
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    //-- create Person
    //console.log(person)
    // -- use class
}*/
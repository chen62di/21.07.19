class Personp{
    constructor({ name, age, password, gender, car, vehicle}) {
        this.name = name
        this.age = age
        this.password = password
        this.gender = gender
        this.car = car
        this.vehicle = vehicle
        this.toString = () => {
            const { name, age, password, gender, car, vehicle } = this
            return `${name} ${age} ${password} ${gender} ${car} ${vehicle}`;
        }
    }
}
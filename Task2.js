function CreateMobilePhone(model, size, price, number)
{
  var result = { };
  result.model = model;
  result.size = size;
  result.price = price;
  result.number = number;
  result.getNumber = function() {
    return result.number;
  }
  result.setNumber = function(n) {
    result.number = n;
  }
  return result;
}

function MobilePhone(model, size, price, number) {
  this.model = model;
  this.size = size;
  this.price = price;
  this.number = number;
  this.getNumber = function() {
    return this.number;
  };
  this.setNumber = function(n) {
    this.number = n;
  }
} 

const m1 = CreateMobilePhone('s', 'large', '100', '12344321');
console.log(m1)
const m2 = new MobilePhone()
console.log(m2)

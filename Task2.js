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
  let _model;
  this.size = size;
  let _price = 0;
  this.number = number;
  this.getNumber = function() {
    return this.number;
  }
  this.setNumber = function(n) {
    this.number = n;
  }
  this.getModel = () => { return _model }
  this.setModel = (newModel) => {
    if (newModel.length >= 4) {
      _model = newModel
    }
  }
  this.getPrice = () => { return _price }
  this.setPrice = (newPrice) => {
    if (newPrice >= _price) {
      _price = newPrice
    }
  }
  this.setModel(model)
  this.setPrice(price)
} 

const m1 = CreateMobilePhone('s', 'large', '100', '12344321');
console.log(m1)
const m2 = new MobilePhone('s', 'large', '100', '12344321')
console.log(m2)
m2.getPrice()

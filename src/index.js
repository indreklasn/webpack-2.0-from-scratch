require('./styles.scss');

class Car {

  manufacturer(car) {
    document.write(`I have a ${car}`)
  }

}

const bmw = new Car;

bmw.manufacturer('bmw');

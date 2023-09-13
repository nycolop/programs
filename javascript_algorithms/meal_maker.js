const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(dish) {
      this._appetizers.push({
        name: dish.name,
        price: dish.price
      });
    },
    get mains() {
      return this._mains;
    },
    set mains(dish) {
      this._mains.push({
        name: dish.name,
        price: dish.price
      });
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dish) {
      this._mains.push({
        name: dish.name,
        price: dish.price
      });
    }
  },
  get courses() {
    return this._courses
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('_appetizers');
    const main = this.getRandomDishFromCourse('_mains');
    const dessert = this.getRandomDishFromCourse('_desserts');
    const totalPrice = main.price + appetizer.price + dessert.price;
    
    return `${appetizer.name}, ${main.name}, ${dessert.name}: ${totalPrice}`;
  }
};

menu.addDishToCourse('_mains', 'Sopa', 10);
menu.addDishToCourse('_desserts', 'manteca', 10);
menu.addDishToCourse('_appetizers', 'pan', 10);
menu.addDishToCourse('_mains', 'estofado', 15);
menu.addDishToCourse('_desserts', 'helado', 15);
menu.addDishToCourse('_appetizers', 'chipa', 15);

const meal = menu.generateRandomMeal();
meal;
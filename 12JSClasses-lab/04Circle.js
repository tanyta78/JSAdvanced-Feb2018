class Circle {
  constructor(radius) {
    this.radius = radius;

  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (radius <= 0) {
      throw new RangeError('Radius must be positive!');
    }
    this._radius = radius;
  }
  get diameter() { return 2 * this.radius; }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }

}
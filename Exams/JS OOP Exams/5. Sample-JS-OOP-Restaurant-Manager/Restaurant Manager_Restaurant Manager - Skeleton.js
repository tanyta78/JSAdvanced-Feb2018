function processRestaurantManagerCommands(commands) {
    'use strict';

    var Types = {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () { }
    };

    Object.prototype.isString = function () {
        return typeof (this) === Types.String;
    };

    var RestaurantEngine = (function () {
        var globalConstants = {
            UNIT_GRAMS: 'g',
            UNIT_MILLILITERS: 'ml'
        };
        var _restaurants, _recipes;

        function initialize() {
            _restaurants = [];
            _recipes = [];
        }

        var Restaurant = (function () {
            class Restaurant {
                constructor(name, location) {
                    this.name = name;
                    this.location = location;
                    this._recipes = [];
                }

                get name() {
                    return this._name;
                }

                set name(value) {
                    if (!value || !value.isString()) {
                        throw new Error('Name can not be null or empty!');
                    }
                    this._name = value;
                }

                get location() {
                    return this._location;
                }
                set location(value) {
                    if (!value || !value.isString()) {
                        throw new Error('Location can not be null or empty!');
                    }
                    this._location = value;
                }

                addRecipe(recipe) {
                    if (!(recipe instanceof Recipe)) {
                        throw new TypeError('Parameter should be instance of Recipe.');
                    }

                    this._recipes.push(recipe);
                }

                removeRecipe(recipe) {
                    if (!(recipe instanceof Recipe)) {
                        throw new TypeError('Parameter should be instance of Recipe.');
                    }

                    var index = this._recipes.indexOf(recipe);
                    this._recipes.splice(index, 1);
                }

                getRecipesByType(type) {
                    return this._recipes.filter(function (recipe) {
                        return recipe instanceof type;
                    });
                }

                formatRecipes() {
                    var drinks,
                        salads,
                        mainCourses,
                        desserts;
                    drinks = this.getRecipesByType(Drink);
                    salads = this.getRecipesByType(Salad);
                    mainCourses = this.getRecipesByType(MainCourse);
                    desserts = this.getRecipesByType(Dessert);

                    var result = '';
                    if (drinks.length) {
                        result += '~~~~~ DRINKS ~~~~~' + '\n';

                        drinks.forEach(function (drink) {
                            result += drink.toString();
                        });
                    }
                    if (salads.length) {
                        result += '~~~~~ SALADS ~~~~~' + '\n';

                        salads.forEach(function (salad) {
                            result += salad.toString();
                        });
                    }

                    if (mainCourses.length) {
                        result += '~~~~~ MAIN COURSES ~~~~~' + '\n';

                        mainCourses.forEach(function (mainCourse) {
                            result += mainCourse.toString();
                        });
                    }
                    if (desserts.length) {
                        result += '~~~~~ DESSERTS ~~~~~' + '\n';

                        desserts.forEach(function (dessert) {
                            result += dessert.toString();
                        });
                    }

                    return result;
                }



                printRestaurantMenu() {
                    let result = `***** ${this.name} - ${this.location} *****\n`;

                    if (this._recipes.length == 0) {
                        result += 'No recipes... yet\n';
                    } else {
                        result += this.formatRecipes();
                    }
                    return result;
                }
            }

            return Restaurant;
        }());

        var Recipe = (function () {
            class Recipe {
                constructor(name, price, calories, quantity, time, unit) {
                    if (new.target === Recipe) {
                        throw new Error('Recipe can not be instantiated!');
                    }
                    this.name = name;
                    this.price = price;
                    this.calories = calories;
                    this.quantity = quantity;
                    this.time = time;
                    this._unit = unit;
                }

                get name() {
                    return this._name;
                }
                set name(value) {
                    if (!value || !value.isString()) {
                        throw new Error('Name can not be null or empty!');
                    }
                    this._name = value;
                }

                get price() {
                    return this._price;
                }
                set price(value) {
                    if (value <= 0) {
                        throw new Error('The price must be positive.');
                    }
                    this._price = value;
                }

                get calories() {
                    return this._calories;
                }
                set calories(value) {
                    if (value <= 0) {
                        throw new Error('The calories must be positive.');
                    }
                    this._calories = value;
                }

                get quantity() {
                    return this._quantity;
                }
                set quantity(value) {
                    if (value <= 0) {
                        throw new Error('The quantity must be positive.');
                    }
                    this._quantity = value;
                }

                get time() {
                    return this._time;
                }
                set time(value) {
                    if (value <= 0) {
                        throw new Error('The time must be positive.');
                    }
                    this._time = value;
                }

                toString() {
                    return `==  ${this.name} == $${this.price.toFixed(2)}\nPer serving: ${this.quantity} ${this._unit}, ${this.calories} kcal\nReady in ${this.time} minutes\n`;
                }
            }

            return Recipe;
        }());

        var Drink = (function () {
            class Drink extends Recipe {
                constructor(name, price, calories, quantity, time, isCarbonated) {
                    super(name, price, calories, quantity, time, globalConstants.UNIT_MILLILITERS);
                    this._isCarbonated = isCarbonated;
                }

                get calories() {
                    return this._calories;
                }

                set calories(value) {
                    if (value <= 0) {
                        throw new Error('The calories must be positive.');
                    }
                    if (value > 100) {
                        throw new Error('The calories must not be greater than 100.');
                    }
                    this._calories = value;
                }

                get time() {
                    return this._time;
                }

                set time(value) {
                    if (value <= 0) {
                        throw new Error('The time must be positive.');
                    }
                    if (value > 20) {
                        throw new Error('The time must not be greater than 20 minutes.');
                    }

                    this._time = value;
                }

                toString() {
                    let result = super.toString();
                    result += `Carbonated: ${this._isCarbonated ? 'yes' : 'no'}\n`;
                    return result;
                }

            }

            return Drink;
        }());

        var Meal = (function () {
            class Meal extends Recipe {
                constructor(name, price, calories, quantity, time, isVegan) {
                    if (new.target === Meal) {
                        throw new Error('Meal can not be instantiated!');
                    }
                    super(name, price, calories, quantity, time, globalConstants.UNIT_GRAMS);
                    this._isVegan = isVegan;
                }

                toggleVegan() {
                    this._isVegan = !this._isVegan;
                }

                toString() {
                    var result = this._isVegan ? '[VEGAN] ' : '';
                    result += super.toString();
                    return result;
                }
            }

            return Meal;
        }());

        var Dessert = (function () {
            class Dessert extends Meal {
                constructor(name, price, calories, quantity, time, isVegan) {
                    super(name, price, calories, quantity, time, isVegan);
                    this._withSugar = true;
                }

                toggleSugar() {
                    this._withSugar = !this._withSugar;
                }

                toString() {
                    let result = `${this._withSugar ? '' : '[NO SUGAR]'}`;
                    result += super.toString();
                    return result;
                }
            }

            return Dessert;
        }());

        var MainCourse = (function () {
            class MainCourse extends Meal {
                constructor(name, price, calories, quantity, time, isVegan, type) {
                    super(name, price, calories, quantity, time, isVegan);
                    this._type = type;
                }

                toString() {
                    let result = super.toString();
                    result += `Type: ${this._type}\n`;
                    return result;
                }
            }

            return MainCourse;
        }());

        var Salad = (function () {
            class Salad extends Meal {
                constructor(name, price, calories, quantity, time, isVegan, containsPasta) {
                    super(name, price, calories, quantity, time, true);
                    this._containsPasta = containsPasta;
                }

                toString() {
                    let result = super.toString();
                    result += `Contains pasta: ${this._containsPasta ? 'yes' : 'no'}\n`;
                    return result;
                }
            }
            return Salad;
        }());

        var Command = (function () {

            function Command(commandLine) {
                this._params = new Array();
                this.translateCommand(commandLine);
            }

            Command.prototype.translateCommand = function (commandLine) {
                var self, paramsBeginning, name, parametersKeysAndValues;
                self = this;
                paramsBeginning = commandLine.indexOf("(");

                this._name = commandLine.substring(0, paramsBeginning);
                name = commandLine.substring(0, paramsBeginning);
                parametersKeysAndValues = commandLine
                    .substring(paramsBeginning + 1, commandLine.length - 1)
                    .split(";")
                    .filter(function (e) { return true; });

                parametersKeysAndValues.forEach(function (p) {
                    var split = p
                        .split("=")
                        .filter(function (e) { return true; });
                    self._params[split[0]] = split[1];
                });
            };

            return Command;
        }());

        function createRestaurant(name, location) {
            _restaurants[name] = new Restaurant(name, location);
            return "Restaurant " + name + " created\n";
        }

        function createDrink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
            _recipes[name] = new Drink(name, price, calories, quantity, timeToPrepare, isCarbonated);
            return "Recipe " + name + " created\n";
        }

        function createSalad(name, price, calories, quantity, timeToPrepare, containsPasta) {
            _recipes[name] = new Salad(name, price, calories, quantity, timeToPrepare, containsPasta);
            return "Recipe " + name + " created\n";
        }

        function createMainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type) {
            _recipes[name] = new MainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type);
            return "Recipe " + name + " created\n";
        }

        function createDessert(name, price, calories, quantity, timeToPrepare, isVegan) {
            _recipes[name] = new Dessert(name, price, calories, quantity, timeToPrepare, isVegan);
            return "Recipe " + name + " created\n";
        }

        function toggleSugar(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }
            recipe = _recipes[name];

            if (recipe instanceof Dessert) {
                recipe.toggleSugar();
                return "Command ToggleSugar executed successfully. New value: " + recipe._withSugar.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleSugar is not applicable to recipe " + name + "\n";
            }
        }

        function toggleVegan(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }

            recipe = _recipes[name];
            if (recipe instanceof Meal) {
                recipe.toggleVegan();
                return "Command ToggleVegan executed successfully. New value: " +
                    recipe._isVegan.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleVegan is not applicable to recipe " + name + "\n";
            }
        }

        function printRestaurantMenu(name) {
            var restaurant;

            if (!_restaurants.hasOwnProperty(name)) {
                throw new Error("The restaurant " + name + " does not exist");
            }

            restaurant = _restaurants[name];
            return restaurant.printRestaurantMenu();
        }

        function addRecipeToRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }
            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.addRecipe(recipe);
            return "Recipe " + recipeName + " successfully added to restaurant " + restaurantName + "\n";
        }

        function removeRecipeFromRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }
            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.removeRecipe(recipe);
            return "Recipe " + recipeName + " successfully removed from restaurant " + restaurantName + "\n";
        }

        function executeCommand(commandLine) {
            var cmd, params, result;
            cmd = new Command(commandLine);
            params = cmd._params;

            switch (cmd._name) {
                case 'CreateRestaurant':
                    result = createRestaurant(params["name"], params["location"]);
                    break;
                case 'CreateDrink':
                    result = createDrink(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["carbonated"]));
                    break;
                case 'CreateSalad':
                    result = createSalad(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["pasta"]));
                    break;
                case "CreateMainCourse":
                    result = createMainCourse(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]), params["type"]);
                    break;
                case "CreateDessert":
                    result = createDessert(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]));
                    break;
                case "ToggleSugar":
                    result = toggleSugar(params["name"]);
                    break;
                case "ToggleVegan":
                    result = toggleVegan(params["name"]);
                    break;
                case "AddRecipeToRestaurant":
                    result = addRecipeToRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "RemoveRecipeFromRestaurant":
                    result = removeRecipeFromRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "PrintRestaurantMenu":
                    result = printRestaurantMenu(params["name"]);
                    break;
                default:
                    throw new Error('Invalid command name: ' + cmdName);
            }

            return result;
        }

        function parseBoolean(value) {
            switch (value) {
                case "yes":
                    return true;
                case "no":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());


    // Process the input commands and return the results
    var results = '';
    RestaurantEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != "") {
            try {
                var cmdResult = RestaurantEngine.executeCommand(cmd);
                results += cmdResult;
            } catch (err) {
                results += err.message + "\n";
            }
        }
    });

    return results.trim();
}
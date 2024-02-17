208 - Constructon Functions and the new Operator

We create object this way: const //nameObject = function(params for constructor)

new instance(params for constructors)

        1. New {} <- object --- is created
        2. Function is called, this = {}
        3. {} linked to prototype
        4. function automatically return {}

209 - Prototypes

Every function in JS automatically has property called prototype.

200 - Prototypical Inheritance

In JS every obj has a prototype. Prototype is an object from which other objects inherit propertis. It serves a blueprint for creating other objects.

When we access a property or method of an object:

        1. Find that property on directly the objects.
        2. If there is not any, then look at object's prototype.
        3. If there is not any, it continues up the prototype chain until it reaches the top level: Object.prototype

Prototype chain is series of links between objects linked through prototypes. (Similar to the scope chain)

213 - ES6 Classes

All methods besides constructor method is written on class.prototype.

        1. Classes are not hoisted
        2. Class are first-class citizens, we can pass them to functions and return from functions
        3. Classes are executed in strict mode

214 - Setters and Getters

Every object in JS can have setter and getter properties. We call them Accessor properties.

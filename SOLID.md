# SOLID
S - Single-responsiblity Principle
O - Open-closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle



## Single-Responsibility Principle
    A class should have one and only one reason to change, meaning that a class should have only one job.

INCORRECT - the Book class violates the Single Responsibility Principle because it is responsible for both storing book details and formatting/displaying book information, as well as calculating discounts. If any of these responsibilities change, you'd need to modify the same class.
```
class Book {
    public title: String
    public author: String
    public price: Double
    
    func displayBookInfo() {
        // Code for formatting and displaying book info
    }
    
    func calculateDiscountedPrice() {
        // Code for applying discounts
    }
}
```
CORRECT:
```
class Book {
    public title: String
    public author: String
    public price: Double
}

class BookFormatter {
    static func displayBookInfo(book: Book) {
        // Code for formatting and displaying book info
    }
}

class PriceCalculator {
    static func calculateDiscountedPrice(book: Book) -> Double {
        // Code for applying discounts
    }
}

const myBook = Book(title: "Sample Book", author: "John Doe", price: 29.99)

const formattedInfo = BookFormatter.displayBookInfo(book: myBook)
print(formattedInfo)

const discountedPrice = PriceCalculator.calculateDiscountedPrice(book: myBook)
print("Discounted Price: $\(discountedPrice)")
```

## Open-Closed Principle 

    Objects or entities should be open for extension but closed for modification.
Explained by the below example
```
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  getJob() {
    return this.job.getJob();
  }
}

// PersonJob class uses the getJob method
class PersonJob {
  getJob() {}
}

// Sub classes for different roles extend the PersonJob class
class TeacherJob extends PersonJob {
  getJob() {
    return 'teacher';
  }
}

class ChefJob extends PersonJob {
  getJob() {
    return 'chef';
  }
}

class PoliceOfficerJob extends PersonJob {
  getJob() {
    return 'police officer';
  }
}

const maria = new Person('Maria', 32, new PoliceOfficerJob);
console.log(`${maria.name} works as ${maria.getJob()}`); // Maria works as police officer


```

## Liskov Substitution Principle

    Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

This means that every subclass or derived class should be substitutable for their base or parent class.

The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass.

```
    function makeRequest(url, errorHandler) {
        fetch(url)
            .then(response => response.json())
            .catch(error => errorHandler.handle(error))
        }

    // We can have several functions to handle errors
    const consoleErrorHandler = function handle(error){
        console.log(error)
    }

    const externalErrorHandler = function handle(error){
        sendErrorToExternalService(error)
    }

    makeRequest(url, consoleErrorHandler);
    makeRequest(url, externalErrorHandler);
```

## Interface Segregation Principle

    A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

Based on this principle, no class should be forced to implement interfaces or methods that it will not use. In other words, it's better to have specific interfaces, rather than a single general interface.
And this also applies to functions in JavaScript.

INCORRECT - this way Dogs extends fly() but doesn't need it
```
    class Animal {
        constructor() { /* */ }

        eat() { /* */ }
        fly() {/* */ }
        sleep() { /* */ }
    }

    class Dog extends Animal {
        // fly() is extended but not necessary 
    }

```
CORRECT -  Dogs only extends sleep() and eat() but not fly()
```
    class Animal {
        constructor() { /* */ }

        eat() { /* */ }
        sleep() { /* */ }
    }

    class Flier extends Animal {
        constructor() {
            super()
        }
        fly() { /* */ }
    }

    class Dog extends Animal {
    }
```

## Dependency Inversion Principle
    Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

The last principle, "D," is the Dependency Inversion Principle. This principle holds that high-level modules, i.e., the modules that contain strategic decisions and high-level directives, should not depend on low-level modules, which are the modules that contain detailed and low-level logic.

Both, high-level and low-level modules, should depend on abstractions. This principle allows for decoupling

INCORRECT - 
```
    class MySqlConnection {
        connect() { /* */ }
    }

    class PasswordReminder {
        constructor() {
            this.dbConnection = new MySQLConnection();
        }
    }
```
CORRECT - The refactoring follows the principle by having PasswordReminder receive an instance of a class implementing a common "database connection" interface, showing both MySQLConnection and PostgreSqlConnection classes.
```
    class MySqlConnection {
        connect() { /* */ }
    }
    class PostgreSqlConnection {
        connect() { /* */ }
    }

    class PasswordReminder {
        constructor(connection) {
            this.dbConnection = connection
        }
    }
```
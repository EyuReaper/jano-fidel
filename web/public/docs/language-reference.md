# Language Reference

This section provides a detailed reference for Jano Fidel keywords, their Amharic meanings, and their corresponding JavaScript equivalents. This aims to be a comprehensive guide for all language constructs.

## 1. Variables & Constants

These keywords are used for declaring and managing data within your Jano Fidel programs.

### `ተለዋጭ` (var)
- **Description**: Declares a function-scoped variable. Variables declared with `ተለዋጭ` can be re-declared and re-assigned within their function scope. While still supported, `ይሁን` and `ቋሚ` are generally preferred for modern Jano Fidel development due to better scoping rules.
- **JavaScript Equivalent**: `var`
- **Example**:
    ```jano
    ተለዋጭ መልእክት = "ሰላም"፤
    ተለዋጭ መልእክት = "አለም"፤ // Re-declaration is allowed
    ያትም(መልእክት)፤ // Output: አለም
    ```

### `ይሁን` (let)
- **Description**: Declares a block-scoped variable. Variables declared with `ይሁን` can be re-assigned but not re-declared within the same block scope, preventing common bugs associated with `ተለዋጭ`.
- **JavaScript Equivalent**: `let`
- **Example**:
    ```jano
    ይሁን ቆጣሪ = ፟፤
    ቆጣሪ = ፩፤ 
    ያትም(ቆጣሪ)፤ // Output: ፩ 
    ```

### `ቋሚ` (const)
- **Description**: Declares a block-scoped constant. The value of a `ቋሚ` cannot be re-assigned after its initial declaration, making it ideal for values that should not change throughout the program's execution.
- **JavaScript Equivalent**: `const`
- **Example**:
    ```jano
    ቋሚ PI = 3.14159፤
    // PI = 3.0፤ // Error: Assignment to constant variable
    ያትም(PI)፤ // Output: 3.14159
    ```

### `ይህ` (this)
- **Description**: Refers to the current execution context (the object that "owns" the executing code). Its value depends on how the function is called.
- **JavaScript Equivalent**: `this`
- **Example (in an object method)**:
    ```jano
    ቋሚ ሰው = {
      ስም: "አበበ",
     ሰላምታ: ተግባር() {
        ያትም("ሰላም, " + ይህ።ስም + "!");
      }
    }፤
    ሰው።ሰላምታ()፤
    ```

### `ሰርዝ` (delete)
- **Description**: The `ሰርዝ` operator removes a property from an object. It only affects properties directly on an object, not those inherited from the prototype chain.
- **JavaScript Equivalent**: `delete`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር {
      ቁልፍ: "ዋጋ"
    }፤
    ያትም(ነገር.ቁልፍ)፤ // Output: ዋጋ
    ሰርዝ ነገር.ቁልፍ፤
    ያትም(ነገር.ቁልፍ)፤ // Output: undefined
    ```

### `ባዶነት` (void)
- **Description**: The `ባዶነት` operator evaluates the given expression and then returns `undefined`. It's often used to prevent an expression from returning a value, particularly in contexts where a side effect is desired but a return value is not (e.g., in `javascript:` URLs).
- **JavaScript Equivalent**: `void`
- **Example**:
    ```jano
    ቋሚ ውጤት = ባዶነት(1 + 2)፤
    ያትም(ውጤት)፤ // Output: undefined
    ```

## 2. Functions & Classes

These keywords are fundamental for defining reusable code blocks and creating object-oriented structures.

### `ተግባር` (function)
- **Description**: Used to declare a function, which is a block of code designed to perform a particular task. Functions can take parameters and return values.
- **JavaScript Equivalent**: `function`
- **Example**:
    ```jano
    ተግባር ድምር(ቁጥር1, ቁጥር2) {
      መልስ ቁጥር1 + ቁጥር2፤
    }
    ያትም(ድምር(5, 3))፤ // Output: 8
    ```

### `ግንባታ` (constructor)
- **Description**: A special method within a `መደብ` (class) for creating and initializing an object instance of that class.
- **JavaScript Equivalent**: `constructor`
- **Example**:
    ```jano
    መደብ ሰው {
      ግንባታ(ስም) {
        ይህ.ስም = ስም፤
      }
      ሰላምታ() {
        ያትም("ሰላም, " + ይህ.ስም + "!")፤
      }
    }
    ቋሚ አዲስ_ሰው = አዲስ ሰው("አበበ")፤
    አዲስ_ሰው.ሰላምታ()፤ // Output: ሰላም, አበበ!
    ```

### `መልስ` (return)
- **Description**: Terminates execution of a function and specifies a value to be returned to the function caller.
- **JavaScript Equivalent**: `return`
- **Example**:
    ```jano
    ተግባር አሥር_መልስ() {
      መልስ 10፤
    }
    ቋሚ ዋጋ = አሥር_መልስ()፤
    ያትም(ዋጋ)፤ // Output: 10
    ```

### `ፍታ` (resolve)
- **Description**: Used within a `ቃልኪዳን` (Promise) to indicate that the Promise has successfully completed and returns a value.
- **JavaScript Equivalent**: `resolve`
- **Example**:
    ```jano
    ቋሚ የቃልኪዳን_ተግባር = አዲስ ቃልኪዳን( (ፍታ, ተዉ) => {
      ፍታ("ተሳክቷል!")፤
    })፤
    የቃልኪዳን_ተግባር.ከዛ(መልእክት => ያትም(መልእክት))፤ // Output: ተሳክቷል!
    ```

### `መደብ` (class)
- **Description**: Provides a template for creating objects (object-oriented programming). Classes encapsulate data with code to work on that data.
- **JavaScript Equivalent**: `class`
- **Example**:
    ```jano
    መደብ መኪና {
      ግንባታ(ሞዴል) {
        ይህ.ሞዴል = ሞዴል፤
      }
      ጀምር() {
        ያትም(ይህ.ሞዴል + " እየተጀመረ ነው!")፤
      }
    }
    ቋሚ የእኔ_መኪና = አዲስ መኪና("ቶዮታ")፤
    የእኔ_መኪና.ጀምር()፤ // Output: ቶዮታ እየተጀመረ ነው!
    ```

### `አዲስ` (new)
- **Description**: The `አዲስ` operator is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
- **JavaScript Equivalent**: `new`
- **Example**:
    ```jano
    ቋሚ ዛሬ = አዲስ ቀን()፤ // Creates a new Date object
    ያትም(ዛሬ)፤ // Output: Current date and time
    ```

### `ያራዝማል` (extends)
- **Description**: Used in class declarations or class expressions to create a class that is a child of another class. This facilitates inheritance in object-oriented programming.
- **JavaScript Equivalent**: `extends`
- **Example**:
    ```jano
    መደብ እንስሳ {
      ሰላምታ() {
        ያትም("እንስሳ ሰላም ይላል።")፤
      }
    }
    መደብ ውሻ ያራዝማል እንስሳ {
      ሰላምታ() {
        ያትም("ውሻ ይጮሃል።")፤
      }
    }
    ቋሚ የኔ_ውሻ = አዲስ ውሻ()፤
    የኔ_ውሻ.ሰላምታ()፤ // Output: ውሻ ይጮሃል።
    ```

### `የበላይ` (super)
- **Description**: The `የበላይ` keyword is used to call functions on an object's parent (superclass). It is commonly used within subclass constructors to call the parent constructor and ensure proper initialization.
- **JavaScript Equivalent**: `super`
- **Example (in subclass constructor)**:
    ```jano
    መደብ ልጅ ያራዝማል ወላጅ {
      ግንባታ(ስም, ዕድሜ) {
        የበላይ(ስም)፤ // Calls parent's constructor
        ይህ.ዕድሜ = ዕድሜ፤
      }
    }
    ```

### `አስገኝ` (yield)
- **Description**: The `አስገኝ` keyword is used to pause and resume a generator function. It returns an iterator object, allowing the generator to produce a sequence of values over time.
- **JavaScript Equivalent**: `yield`
- **Example**:
    ```jano
    ተግባር* ቆጣሪ_አስገኝ() {
      ይሁን i = 0፤
      እስኪሆን(i < 3) {
        አስገኝ i፤
        i++፤
      }
    }
    ቋሚ ጄኔሬተር = ቆጣሪ_አስገኝ()፤
    ያትም(ጄኔሬተር.ቀጣይ().ዋጋ)፤ // Output: 0
    ያትም(ጄኔሬተር.ቀጣይ().ዋጋ)፤ // Output: 1
    ```

### `ቀጣይ` (next)
- **Description**: A method of iterator objects. Calling `ቀጣይ()` advances the iterator to the next result, typically returning an object with `value` (the yielded value) and `done` (a boolean indicating if the iteration is complete).
- **JavaScript Equivalent**: `next`
- **Example**: See `አስገኝ` example above.

### `ድልድል` (Array)
- **Description**: The global `Array` object is used to construct arrays, which are list-like objects.
- **JavaScript Equivalent**: `Array`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = አዲስ ድልድል(1, 2, 3)፤
    ያትም(ቁጥሮች)፤ // Output: [1, 2, 3]
    ```

### `ርዝመት` (length)
- **Description**: A property of an object (e.g., Array, String) that indicates the number of elements in an array or the number of characters in a string.
- **JavaScript Equivalent**: `length`
- **Example**:
    ```jano
    ቋሚ ዝርዝር = ዝርዝር("አንድ", "ሁለት")፤
    ያትም(ዝርዝር.ርዝመት)፤ // Output: 2
    ```

### `ግብዓቶች` (arguments)
- **Description**: An array-like object accessible inside functions that contains the values of the arguments passed to that function. Useful for functions that accept a variable number of arguments.
- **JavaScript Equivalent**: `arguments`
- **Example**:
    ```jano
    ተግባር ብዙ_ግብዓቶች() {
      ለእያንዳንዱ ዋጋ የ ግብዓቶች {
        ያትም(ዋጋ)፤
      }
    }
    ብዙ_ግብዓቶች(1, "ሁለት", እውነት)፤
    // Output: 1, ሁለት, እውነት (each on a new line)
    ```

### `ቃልኪዳን` (Promise)
- **Description**: Represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Used for managing asynchronous code more cleanly.
- **JavaScript Equivalent**: `Promise`
- **Example**:
    ```jano
    አዲስ ቃልኪዳን( (ፍታ, ተዉ) => {
      // አሲንክሮነስ ክዋኔ
    })፤
    ```

### `ክፍል` (module)
- **Description**: Refers to a JavaScript module, a way to organize code into separate, reusable files.
- **JavaScript Equivalent**: `module`
- **Example (conceptual usage in import/export contexts)**:
    ```jano
    // MyModule.jano
    ላክ ቋሚ ስም = "የእኔ ሞዱል"፤

    // main.jano
    አምጣ { ስም } ከ "MyModule"፤
    ያትም(ስም)፤ // Output: የእኔ ሞዱል
    ```

### `ጠይቅ` (require)
- **Description**: Used in CommonJS environments (like Node.js) to import modules.
- **JavaScript Equivalent**: `require`
- **Example (Node.js context)**:
    ```jano
    ቋሚ fs = ጠይቅ('fs')፤
    ```

## 3. Functional Array Methods

These methods provide powerful, declarative ways to manipulate arrays without directly modifying them (immutability).

### `አጣራ` (filter)
- **Description**: Creates a new array with all elements that pass the test implemented by the provided function.
- **JavaScript Equivalent**: `filter`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = ዝርዝር(1, 2, 3, 4, 5)፤
    ቋሚ እኩል_ቁጥሮች = ቁጥሮች.አጣራ(num => num % 2 === 0)፤
    ያትም(እኩል_ቁጥሮች)፤ // Output: [2, 4]
    ```

### `አጠቃልል` (reduce)
- **Description**: Executes a reducer function on each element of the array, resulting in a single output value. It takes an accumulator and the current value.
- **JavaScript Equivalent**: `reduce`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = ዝርዝር(1, 2, 3, 4, 5)፤
    ቋሚ ድምር = ቁጥሮች.አጠቃልል((ድምር, ቁጥር) => ድምር + ቁጥር, 0)፤
    ያትም(ድምር)፤ // Output: 15
    ```

### `አግኝ` (find)
- **Description**: Returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise `undefined` is returned.
- **JavaScript Equivalent**: `find`
- **Example**:
    ```jano
    ቋሚ ሰዎች = ዝርዝ(
      ነገር { ስም: "አበበ", ዕድሜ: 30 },
      ነገር { ስም: "ከበደ", ዕድሜ: 25 }
    )፤
    ቋሚ የተፈለገ_ሰው = ሰዎች.አግኝ(ሰው => ሰው.ዕድሜ > 28)፤
    ያትም(የተፈለገ_ሰው.ስም)፤ // Output: አበበ
    ```

### `አንዳንድ` (some)
- **Description**: Tests whether at least one element in the array passes the test implemented by the provided function. It returns `እውነት` if any element passes, and `ሐሰት` otherwise.
- **JavaScript Equivalent**: `some`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = ዝርዝር(1, 10, 20)፤
    ቋሚ ትልቅ_አለ = ቁጥሮች.አንዳንድ(num => num > 15)፤
    ያትም(ትልቅ_አለ)፤ // Output: እውነት
    ```

### `ሁሉም` (every)
- **Description**: Tests whether all elements in the array pass the test implemented by the provided function. It returns `እውነት` if all elements pass, and `ሐሰት` otherwise.
- **JavaScript Equivalent**: `every`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = ዝርዝር(2, 4, 6)፤
    ቋሚ ሁሉም_እኩል = ቁጥሮች.ሁሉም(num => num % 2 === 0)፤
    ያትም(ሁሉም_እኩል)፤ // Output: እውነት
    ```

## 4. Logic & Flow Control

These keywords are used to make decisions and control the order of execution in your program.

### `ከሆነ` (if)
- **Description**: The primary conditional statement. It executes a block of code if a specified condition evaluates to `እውነት`.
- **JavaScript Equivalent**: `if`
- **Example**:
    ```jano
    ቋሚ ዕድሜ = 20፤
    ከሆነ (ዕድሜ >= 18) {
      ያትም("ዕድሜው ደርሷል።")፤
    }
    ```

### `ካልሆነ` (else)
- **Description**: Provides an alternative block of code to execute if the preceding `ከሆነ` (if) condition evaluates to `ሐሰት`. Can be chained with `ከሆነ` for `else if` logic.
- **JavaScript Equivalent**: `else`
- **Example**:
    ```jano
    ቋሚ ነጥብ = 75፤
    ከሆነ (ነጥብ >= 90) {
      ያትም("ኤ!")፤
    } ካልሆነ (ነጥብ >= 80) {
      ያትም("ቢ!")፤
    } ካልሆነ {
      ያትም("ሲ!")፤
    } // Output: ሲ!
    ```

### `ምረጥ` (switch)
- **Description**: Evaluates an expression, matching the expression's value to a `ቢሆን` (case) clause, and executes statements associated with that case.
- **JavaScript Equivalent**: `switch`
- **Example**:
    ```jano
    ቋሚ ቀን = "ሰኞ"፤
    ምረጥ (ቀን) {
      ቢሆን "ሰኞ"፡
        ያትም("የሳምንቱ መጀመሪያ።")፤
        ውጣ፤
      ቢሆን "እሁድ"፡
        ያትም("የሳምንቱ መጨረሻ።")፤
        ውጣ፤
      መደበኛ፡
        ያትም("ሌላ ቀን።")፤
        ውጣ፤
    } // Output: የሳምንቱ መጀመሪያ።
    ```

### `ቢሆን` (case)
- **Description**: Defines a specific value to be matched against the expression in a `ምረጥ` (switch) statement.
- **JavaScript Equivalent**: `case`
- **Example**: See `ምረጥ` example above.

### `መደበኛ` (default)
- **Description**: Specifies the code to be executed if none of the `ቢሆን` (case) clauses in a `ምረጥ` (switch) statement match the expression's value.
- **JavaScript Equivalent**: `default`
- **Example**: See `ምረጥ` example above.

### `ውጣ` (break)
- **Description**: Terminates the current loop (`እስኪሆን`, `ለእያንዳንዱ`) or `ምረጥ` (switch) statement and transfers control to the statement following the terminated statement.
- **JavaScript Equivalent**: `break`
- **Example (in a loop)**:
    ```jano
    ለእያንዳንዱ (ይሁን i = 0፤ i < 10፤ i++) {
      ከሆነ (i === 5) {
        ውጣ፤
      }
      ያትም(i)፤
    } // Output: 0, 1, 2, 3, 4
    ```

### `ቀጥል` (continue)
- **Description**: Terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.
- **JavaScript Equivalent**: `continue`
- **Example**:
    ```jano
    ለእያንዳንዱ (ይሁን i = 0፤ i < 5፤ i++) {
      ከሆነ (i === 2) {
        ቀጥል፤
      }
      ያትም(i)፤
    } // Output: 0, 1, 3, 4
    ```

### `አርም` (debugger)
- **Description**: Invokes any available debugging functionality. If no debugger is available, this statement has no effect. Used to set breakpoints in code.
- **JavaScript Equivalent**: `debugger`
- **Example**:
    ```jano
    ተግባር ችግር_ፈታ() {
      ያትም("የመጀመሪያ ደረጃ")፤
      አርም፤ // Execution will pause here if a debugger is active
      ያትም("ሁለተኛ ደረጃ")፤
    }
    ```

### `እና` (&&)
- **Description**: Logical AND operator. Returns `እውነት` if both operands are `እውነት`; otherwise, returns `ሐሰት`. Short-circuits: if the first operand is `ሐሰት`, the second is not evaluated.
- **JavaScript Equivalent**: `&&`
- **Example**:
    ```jano
    ቋሚ ሀ = እውነት፤
    ቋሚ ለ = ሐሰት፤
    ያትም(ሀ && ለ)፤ // Output: ሐሰት
    ```

### `ወይም` (||)
- **Description**: Logical OR operator. Returns `እውነት` if at least one operand is `እውነት`; otherwise, returns `ሐሰት`. Short-circuits: if the first operand is `እውነት`, the second is not evaluated.
- **JavaScript Equivalent**: `||`
- **Example**:
    ```jano
    ቋሚ ሀ = እውነት፤
    ቋሚ ለ = ሐሰት፤
    ያትም(ሀ || ለ)፤ // Output: እውነት
    ```

### `አይደለም` (!)
- **Description**: Logical NOT operator. Inverts the boolean value of its operand. If the operand is `እውነት`, it returns `ሐሰት`, and vice-versa.
- **JavaScript Equivalent**: `!`
- **Example**:
    ```jano
    ቋሚ ሀ = እውነት፤
    ያትም(!ሀ)፤ // Output: ሐሰት
    ```

## 5. Loops & Iteration

Keywords for repeatedly executing blocks of code.

### `ለእያንዳንዱ` (for)
- **Description**: A versatile looping construct. It can be used for traditional counter-based loops (`for (let i = 0; i < n; i++)`), iterating over object properties (`for...in`), or iterating over iterable values (`for...of`).
- **JavaScript Equivalent**: `for`
- **Example (counter-based)**:
    ```jano
    ለእያንዳንዱ (ይሁን i = 0፤ i < 3፤ i++) {
      ያትም(i)፤
    } // Output: 0, 1, 1
    ```

### `እስከ` (while)
- **Description**: Creates a loop that executes a specified statement as long as the test condition evaluates to `እውነት`. The condition is evaluated before each execution of the loop body.
- **JavaScript Equivalent**: `while`
- **Example**:
    ```jano
    ይሁን ቆጣሪ = 0፤
    እስከ (ቆጣሪ < 3) {
      ያትም("ቆጣሪ: " + ቆጣሪ)፤
      ቆጣሪ++፤
    }
    // Output: ቆጣሪ: 0, ቆጣሪ: 1, ቆጣሪ: 2
    ```

### `ውስጥ` (in)
- **Description**: The `ውስጥ` keyword (used with `ለእያንዳንዱ`) iterates over the enumerable string properties of an object (including inherited ones).
- **JavaScript Equivalent**: `in` (as in `for...in`)
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር {
      ስም: "አበበ",
      ዕድሜ: 30
    }፤
    ለእያንዳንዱ ቁልፍ ውስጥ ሰው {
      ያትም(ቁልፍ + "፡ " + ሰው[ቁልፍ])፤
    }
    // Output: ስም: አበበ, ዕድሜ: 30
    ```

### `የ` (of)
- **Description**: The `የ` keyword (used with `ለእያንዳንዱ`) iterates over iterable objects (like `ድልድል` (arrays), `ጽሁፍ` (strings), `መዝገብ` (Maps), `ስብስብ` (Sets), etc.), providing the value of each property.
- **JavaScript Equivalent**: `of` (as in `for...of`)
- **Example**:
    ```jano
    ቋሚ ፍራፍሬዎች = ዝርዝር("ፖም", "ብርቱካን")፤
    ለእያንዳንዱ ፍሬ የ ፍራፍሬዎች {
      ያትም(ፍሬ)፤
    }
    // Output: ፖም, ብርቱካን
    ```

## 6. Booleans & Types

Keywords and operators for working with boolean values and determining the type of data.

### `እውነት` (true)
- **Description**: A boolean literal representing the truth value.
- **JavaScript Equivalent**: `true`
- **Example**:
    ```jano
    ቋሚ ሁኔታ = እውነት፤
    ```

### `ሐሰት` (false)
- **Description**: A boolean literal representing the falsehood value.
- **JavaScript Equivalent**: `false`
- **Example**:
    ```jano
    ቋሚ ሁኔታ = ሐሰት፤
    ```

### `ባዶ` (null)
- **Description**: Represents the intentional absence of any object value. It is one of JavaScript's primitive values.
- **JavaScript Equivalent**: `null`
- **Example**:
    ```jano
    ተለዋዋጭ ዋጋ = ባዶ፤
    ያትም(ዋጋ === ባዶ)፤ // Output: እውነት
    ```

### `አልተወሰነም` (undefined)
- **Description**: A primitive value automatically assigned to variables that have been declared but not yet assigned a value, or to object properties that do not exist.
- **JavaScript Equivalent**: `undefined`
- **Example**:
    ```jano
    ተለዋዋጭ ያልተገለጸ_ዋጋ፤
    ያትም(ያልተገለጸ_ዋጋ)፤ // Output: undefined
    ```

### `አይነት` (typeof)
- **Description**: The `አይነት` operator returns a string indicating the type of its unevaluated operand.
- **JavaScript Equivalent**: `typeof`
- **Example**:
    ```jano
    ያትም(አይነት("ሰላም"))፤ // Output: "ጽሁፍ"
    ያትም(አይነት(123))፤ // Output: "ቁጥር"
    ```

### `ምሳሌ` (instanceof)
- **Description**: The `ምሳሌ` operator tests whether the `prototype` property of a constructor appears anywhere in the prototype chain of an object.
- **JavaScript Equivalent**: `instanceof`
- **Example**:
    ```jano
    መደብ መኪና { }
    ቋሚ የእኔ_መኪና = አዲስ መኪና()፤
    ያትም(የእኔ_መኪና ምሳሌ መኪና)፤ // Output: እውነት
    ```

### `ምልክት` (Symbol)
- **Description**: A primitive data type whose instances are unique and immutable. Symbols can be used as the key of an object property.
- **JavaScript Equivalent**: `Symbol`
- **Example**:
    ```jano
    ቋሚ መታወቂያ = ምልክት("መታወቂያ")፤
    ቋሚ መታወቂያ2 = ምልክት("መታወቂያ")፤
    ያትም(መታወቂያ === መታወቂያ2)፤ // Output: ሐሰት
    ```

### `ቁጥር?` (isNaN)
- **Description**: The `ቁጥር?` global function determines whether a value is an illegal number (Not-a-Number). It's a safer way to check for `NaN` than direct comparison.
- **JavaScript Equivalent**: `isNaN`
- **Example**:
    ```jano
    ያትም(ቁጥር?("ሰላም"))፤ // Output: እውነት
    ያትም(ቁጥር?(123))፤ // Output: ሐሰት
    ```

## 7. Exception Handling

Keywords for dealing with errors gracefully in your programs.

### `ሞክር` (try)
- **Description**: The `ሞክር` statement defines a block of code to be tested for errors while it is being executed.
- **JavaScript Equivalent**: `try`
- **Example**:
    ```jano
    ሞክር {
      // ስህተት ሊፈጥር የሚችል ኮድ
    } ያዝ (ስህተት) {
      // ስህተት ሲፈጠር የሚሰራ ኮድ
    }
    ```

### `ያዝ` (catch)
- **Description**: The `ያዝ` statement defines a block of code to be executed if an error occurs in the `ሞክር` (try) block. It receives the error object as a parameter.
- **JavaScript Equivalent**: `catch`
- **Example**: See `ሞክር` example above.

### `በመጨረሻ` (finally)
- **Description**: The `በመጨረሻ` statement defines a block of code to be executed after the `ሞክር` (try) and `ያዝ` (catch) blocks, regardless of whether an exception was thrown or caught.
- **JavaScript Equivalent**: `finally`
- **Example**:
    ```jano
    ሞክር {
      // ኮድ
    } ያዝ (ስህተት) {
      // ስህተት ማስተናገድ
    } በመጨረሻ {
      ያትም("ሁሌም እዚህ እደርሳለሁ።")፤
    }
    ```

### `ወርዉር` (throw)
- **Description**: The `ወርዉር` statement is used to throw a user-defined exception. Execution of the current function will stop (the statements after `ወርዉር` will not be executed), and control will be passed to the first `ያዝ` (catch) block in the call stack.
- **JavaScript Equivalent**: `throw`
- **Example**:
    ```jano
    ተግባር አደጋ_አምጣ() {
      ወርዉር አዲስ ስህተት("ይህ የእኔ ብጁ ስህተት ነው።")፤
    }
    ሞክር {
      አደጋ_አምጣ()፤
    } ያዝ (ስህተት) {
      ያትም("የተያዘ ስህተት: " + ስህተት.መልእክት)፤
    } // Output: የተያዘ ስህተት: ይህ የእኔ ብጁ ስህተት ነው።
    ```

### `ስህተት` (Error)
- **Description**: The `ስህተት` constructor creates an error object. Instances of `ስህተት` objects are thrown when runtime errors occur.
- **JavaScript Equivalent**: `Error`
- **Example**: See `ወርዉር` example above.

## 8. Modules & Access Control

These keywords relate to structuring code into modules and controlling the visibility of class members (though some are conceptual or TypeScript-specific in JavaScript contexts).

### `የጋራ` (public)
- **Description**: (Conceptual/TypeScript) Indicates that a class member (property or method) can be accessed from anywhere, without restriction.
- **JavaScript Equivalent**: `public` (TypeScript)
- **Example (conceptual)**:
    ```jano
    መደብ መረጃ {
      የጋራ ስም: ጽሁፍ = "እንግዳ"፤
    }
    ```

### `የተጠበቀ` (protected)
- **Description**: (Conceptual/TypeScript) Indicates that a class member is accessible only within the class itself and by instances of its subclasses.
- **JavaScript Equivalent**: `protected` (TypeScript)
- **Example (conceptual)**:
    ```jano
    መደብ መረጃ {
      የተጠበቀ መታወቂያ: ቁጥር፤
    }
    ```

### `ላክ` (export)
- **Description**: Used to export functions, objects, or primitive values from a module so they can be used by other programs with the `አምጣ` (import) statement.
- **JavaScript Equivalent**: `export`
- **Example**:
    ```jano
    // util.jano
    ላክ ተግባር ሰላምታ(ስም) {
      ያትም("ሰላም, " + ስም)፤
    }
    ```

### `ውጤት` (exports)
- **Description**: A property of the `module` object in CommonJS environments (Node.js) used to export modules.
- **JavaScript Equivalent**: `exports`
- **Example (CommonJS)**:
    ```jano
    // util.jano
    ውጤት.ሰላምታ = ተግባር(ስም) {
      ያትም("ሰላም, " + ስም)፤
    }
    ```

### `አምጣ` (import)
- **Description**: Used to import exports from another module.
- **JavaScript Equivalent**: `import`
- **Example**:
    ```jano
    አምጣ { ሰላምታ } ከ './util'፤
    ሰላምታ("ዓለም")፤
    ```

### `ከ` (from)
- **Description**: Specifies the module path or name from which to import or export. Used in conjunction with `አምጣ` and `ላክ`.
- **JavaScript Equivalent**: `from`
- **Example**: See `አምጣ` example above.

### `እንደ` (as)
- **Description**: Used to rename named imports or exports when there might be naming conflicts or a preference for a different local name.
- **JavaScript Equivalent**: `as`
- **Example**:
    ```jano
    አምጣ { ሰላምታ እንደ የኔ_ሰላምታ } ከ './util'፤
    የኔ_ሰላምታ("ቦብ")፤
    ```

### `ጠብቅ` (await)
- **Description**: The `ጠብቅ` operator is used to wait for a `ቃልኪዳን` (Promise) to settle (either fulfill or reject) and unwraps its value. It can only be used inside an `ጊዜጠባቂ` (async) function.
- **JavaScript Equivalent**: `await`
- **Example**:
    ```jano
    ጊዜጠባቂ ተግባር ውሂብ_አምጣ() {
      ቋሚ ምላሽ = ጠብቅ ጨልፍ('/api/data')፤
      ቋሚ ውሂብ = ጠብቅ ምላሽ.ጃነማ()፤
      ያትም(ውሂብ)፤
    }
    ውሂብ_አምጣ()፤
    ```

### `መገናኛ` (interface)
- **Description**: (Conceptual/TypeScript) Defines the syntax that any entity (like an object or a class) must adhere to. It's a powerful tool for type-checking and code consistency.
- **JavaScript Equivalent**: `interface` (TypeScript)
- **Example (conceptual)**:
    ```jano
    መገናኛ ሰው_ባህሪያት {
      ስም: ጽሁፍ፤
      ዕድሜ: ቁጥር፤
    }
    ተግባር ሰላምታ(ሰው: ሰው_ባህሪያት) {
      ያትም(ሰው.ስም)፤
    }
    ```

### `ጥቅል` (package)
- **Description**: (Conceptual/Other Languages) In some languages, `package` is used to group related classes and interfaces. In JavaScript, modules (ክፍል) serve a similar purpose.
- **JavaScript Equivalent**: `package` (conceptual)

### `የማይንቀሳቀስ` (static)
- **Description**: Defines a static method or property for a class. Static members belong to the class itself rather than to any instance of the class.
- **JavaScript Equivalent**: `static`
- **Example**:
    ```jano
    መደብ ቁጥሮች_ሂሳብ {
      የማይንቀሳቀስ ድምር(ሀ, ለ) {
        መልስ ሀ + ለ፤
      }
    }
    ያትም(ቁጥሮች_ሂሳብ.ድምር(1, 2))፤ // Output: 3
    ```

### `ተከተል` (enum)
- **Description**: (Conceptual/TypeScript) A set of named constants. It allows for a more descriptive way of representing a fixed set of values.
- **JavaScript Equivalent**: `enum` (TypeScript)
- **Example (conceptual)**:
    ```jano
    ተከተል ቀለሞች {
      ቀይ,
      አረንጓዴ,
      ሰማያዊ
    }
    ቋሚ የመረጠ_ቀለም = ቀለሞች.ቀይ፤
    ```

## 9. Punctuation & Operators

Common symbols and operators used in Jano Fidel.

### `።` (dot operator)
- **Description**: Used to access properties or methods of an object.
- **JavaScript Equivalent**: `.`
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር { ስም: "አበበ" }፤
    ያትም(ሰው.ስም)፤ // Output: አበበ
    ```

### `፤` (semicolon)
- **Description**: Statement terminator. Marks the end of a statement.
- **JavaScript Equivalent**: `;`
- **Example**:
    ```jano
    ቋሚ x = 10፤
    ያትም(x)፤
    ```

### `፡` (colon)
- **Description**: Used in object literal declarations to separate keys from values, or in `ምረጥ` (switch) statements to separate `ቢሆን` (case) from its statements.
- **JavaScript Equivalent**: `:`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር { ቁልፍ፡ "ዋጋ" }፤
    ```

### `፣` (comma)
- **Description**: Used to separate elements in lists, arrays, function arguments, or object properties.
- **JavaScript Equivalent**: `,`
- **Example**:
    ```jano
    ቋሚ ቁጥሮች = ዝርዝር(1, 2, 3)፤
    ```

### `+` (addition operator)
- **Description**: Performs addition for numbers or string concatenation for strings.
- **JavaScript Equivalent**: `+`
- **Example**:
    ```jano
    ያትም(1 + 2)፤ // Output: 3
    ያትም("ሰላም" + "አለም")፤ // Output: ሰላምአለም
    ```

### `-` (subtraction operator)
- **Description**: Performs subtraction for numbers.
- **JavaScript Equivalent**: `-`
- **Example**:
    ```jano
    ያትም(5 - 3)፤ // Output: 2
    ```

### `*` (multiplication operator)
- **Description**: Performs multiplication for numbers.
- **JavaScript Equivalent**: `*`
- **Example**:
    ```jano
    ያትም(4 * 2)፤ // Output: 8
    ```

### `/` (division operator)
- **Description**: Performs division for numbers.
- **JavaScript Equivalent**: `/`
- **Example**:
    ```jano
    ያትም(10 / 2)፤ // Output: 5
    ```

### `%` (modulo operator)
- **Description**: Returns the remainder of a division operation.
- **JavaScript Equivalent**: `%`
- **Example**:
    ```jano
    ያትም(10 % 3)፤ // Output: 1
    ```

### `==` (equality operator)
- **Description**: Compares two values for equality after performing type coercion (loose equality).
- **JavaScript Equivalent**: `==`
- **Example**:
    ```jano
    ያትም(10 == "10")፤ // Output: እውነት
    ```

### `===` (strict equality operator)
- **Description**: Compares two values for equality without performing type coercion (strict equality). Values must be of the same type and have the same value.
- **JavaScript Equivalent**: `===`
- **Example**:
    ```jano
    ያትም(10 === "10")፤ // Output: ሐሰት
    ```

### `!=` (inequality operator)
- **Description**: Compares two values for inequality after performing type coercion.
- **JavaScript Equivalent**: `!=`
- **Example**:
    ```jano
    ያትም(10 != "10")፤ // Output: ሐሰት
    ```

### `!==` (strict inequality operator)
- **Description**: Compares two values for inequality without performing type coercion.
- **JavaScript Equivalent**: `!==`
- **Example**:
    ```jano
    ያትም(10 !== "10")፤ // Output: እውነት
    ```

### `<` (less than operator)
- **Description**: Checks if the left operand is less than the right operand.
- **JavaScript Equivalent**: `<`
- **Example**:
    ```jano
    ያትም(5 < 10)፤ // Output: እውነት
    ```

### `>` (greater than operator)
- **Description**: Checks if the left operand is greater than the right operand.
- **JavaScript Equivalent**: `>`
- **Example**:
    ```jano
    ያትም(10 > 5)፤ // Output: እውነት
    ```

### `<=` (less than or equal to operator)
- **Description**: Checks if the left operand is less than or equal to the right operand.
- **JavaScript Equivalent**: `<=`
- **Example**:
    ```jano
    ያትም(5 <= 5)፤ // Output: እውነት
    ```

### `>=` (greater than or equal to operator)
- **Description**: Checks if the left operand is greater than or equal to the right operand.
- **JavaScript Equivalent**: `>=`
- **Example**:
    ```jano
    ያትም(10 >= 5)፤ // Output: እውነት
    ```

## 10. Math Functions (`ሒሳብ`)

Jano Fidel provides access to the global `ሒሳብ` (Math) object for performing mathematical operations.

### `ሒሳብ` (Math)
- **Description**: The global `Math` object is a built-in object that has properties and methods for mathematical constants and functions. It's not a constructor.
- **JavaScript Equivalent**: `Math`
- **Example**:
    ```jano
    ያትም(ሒሳብ.PI)፤ // Output: 3.14159...
    ```

### `ጣራ` (ceil)
- **Description**: Returns the smallest integer greater than or equal to a given number.
- **JavaScript Equivalent**: `Math.ceil`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ጣራ(4.2))፤ // Output: 5
    ```

### `ወለል` (floor)
- **Description**: Returns the largest integer less than or equal to a given number.
- **JavaScript Equivalent**: `Math.floor`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ወለል(4.8))፤ // Output: 4
    ```

### `ዘፈቀደ` (random)
- **Description**: Returns a floating-point, pseudo-random number in the range `[0, 1)` (inclusive of 0, but not 1).
- **JavaScript Equivalent**: `Math.random`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ዘፈቀደ())፤ // Output: a random number between 0 and 1
    ```

### `ፍጹም` (abs)
- **Description**: Returns the absolute value of a number.
- **JavaScript Equivalent**: `Math.abs`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ፍጹም(-5))፤ // Output: 5
    ```

### `ኃይል` (pow)
- **Description**: Returns the base to the exponent power, that is, `base^exponent`.
- **JavaScript Equivalent**: `Math.pow`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ኃይል(2, 3))፤ // Output: 8 (2 * 2 * 2)
    ```

### `ሥር` (sqrt)
- **Description**: Returns the square root of a number.
- **JavaScript Equivalent**: `Math.sqrt`
- **Example**:
    ```jano
    ያትም(ሒሳብ.ሥር(9))፤ // Output: 3
    ```

## 11. Numbers (Ethiopic Numerals)

Jano Fidel supports traditional Ethiopic numerals for number representation.

| Amharic Numeral | Numeric Value | Description |
|---|---|---|
| `፟` | `0` | Zero |
| `፩` | `1` | One |
| `፪` | `2` | Two |
| `፫` | `3` | Three |
| `፬` | `4` | Four |
| `፭` | `5` | Five |
| `፮` | `6` | Six |
| `፯` | `7` | Seven |
| `፰` | `8` | Eight |
| `፱` | `9` | Nine |
| `፲` | `10` | Ten |
| `፳` | `20` | Twenty |
| `፴` | `30` | Thirty |
| `፵` | `40` | Forty |
| `፶` | `50` | Fifty |
| `፷` | `60` | Sixty |
| `፸` | `70` | Seventy |
| `፹` | `80` | Eighty |
| `፺` | `90` | Ninety |
| `፻` | `100` | One Hundred |
| `፼` | `10000` | Ten Thousand |

## 12. Built-in Utilities

Commonly used global functions and object methods.

### `ያትም` (console.log)
- **Description**: Outputs a message to the web console (or terminal for Node.js). It's crucial for debugging and displaying information.
- **JavaScript Equivalent**: `console.log`
- **Example**:
    ```jano
    ያትም("እንኳን ደህና መጣችሁ!")፤
    ```

### `ማንቂያ` (alert)
- **Description**: Displays an alert box with a specified message and an OK button. Primarily used in browser environments.
- **JavaScript Equivalent**: `alert`
- **Example**:
    ```jano
    ማንቂያ("ይህ የማንቂያ መልእክት ነው!")፤
    ```

### `ጊዜጠባቂ` (async)
- **Description**: (Contextual) The `ጊዜጠባቂ` keyword is used to define an asynchronous function, which implicitly returns a `ቃልኪዳን` (Promise). It allows the use of `ጠብቅ` (await) within its body.
- **JavaScript Equivalent**: `async`
- **Example**:
    ```jano
    ጊዜጠባቂ ተግባር ዘግይቶ_ያትም() {
      ጠብቅ አዲስ ቃልኪዳን(ፍታ => ቆይ(ፍታ, 1000))፤
      ያትም("አንድ ሰከንድ ቆየሁ።")፤
    }
    ዘግይቶ_ያትም()፤
    ```

### `ዝግጁ` (ready)
- **Description**: (Conceptual, often seen in libraries like jQuery) Indicates that the DOM is fully loaded and ready for manipulation. In modern JavaScript, `DOMContentLoaded` event listener is typically used.
- **JavaScript Equivalent**: `ready` (conceptual)

### `ግለጽ` (eval)
- **Description**: The `ግለጽ` global function evaluates JavaScript code represented as a string. Its use is generally discouraged due to security risks and performance implications.
- **JavaScript Equivalent**: `eval`
- **Example**:
    ```jano
    ቋሚ ኮድ = 'ያትም("ግለጽ ኮድ!");'፤
    ግለጽ(ኮድ)፤ // Output: ግለጽ ኮድ!
    ```

### `ተዉ` (reject)
- **Description**: Used within a `ቃልኪዳን` (Promise) to indicate that the Promise has failed to complete successfully, and returns a reason for the failure.
- **JavaScript Equivalent**: `reject`
- **Example**:
    ```jano
    ቋሚ የተሳሳተ_ቃልኪዳን = አዲስ ቃልኪዳን( (ፍታ, ተዉ) => {
      ተዉ("ስህተት ተፈጠረ!")፤
    })፤
    የተሳሳተ_ቃልኪዳን.ያዝ(ስህተት => ያትም(ስህተት))፤ // Output: ስህተት ተፈጠረ!
    ```

### `ቁልፎች` (keys)
- **Description**: A static method of `ነገር` (Object) that returns an array of a given object's own enumerable string-keyed property names.
- **JavaScript Equivalent**: `Object.keys`
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር { ስም: "አበበ", ዕድሜ: 30 }፤
    ያትም(ነገር.ቁልፎች(ሰው))፤ // Output: ["ስም", "ዕድሜ"]
    ```

### `እሴቶች` (values)
- **Description**: A static method of `ነገር` (Object) that returns an array of a given object's own enumerable property values.
- **JavaScript Equivalent**: `Object.values`
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር { ስም: "አበበ", ዕድሜ: 30 }፤
    ያትም(ነገር.እሴቶች(ሰው))፤ // Output: ["አበበ", 30]
    ```

### `መግቢያዎች` (entries)
- **Description**: A static method of `ነገር` (Object) that returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
- **JavaScript Equivalent**: `Object.entries`
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር { ስም: "አበበ", ዕድሜ: 30 }፤
    ያትም(ነገር.መግቢያዎች(ሰው))፤ // Output: [["ስም", "አበበ"], ["ዕድሜ", 30]]
    ```

## 13. Additional Data Structures

Beyond basic arrays and objects, Jano Fidel provides access to more specialized data structures.

### `ስብስብ` (Set)
- **Description**: The `ስብስብ` (Set) object lets you store unique values of any type, whether primitive values or object references.
- **JavaScript Equivalent**: `Set`
- **Example**:
    ```jano
    ቋሚ ልዩ_ቁጥሮች = አዲስ ስብስብ()፤
    ልዩ_ቁጥሮች.አክል(1)፤
    ልዩ_ቁጥሮች.አክል(1)፤ // Ignored
    ያትም(ልዩ_ቁጥሮች.ርዝመት)፤ // Output: 1
    ```

### `መዝገብ` (Map)
- **Description**: The `መዝገብ` (Map) object holds key-value pairs and remembers the original insertion order of the keys. Any value (objects and primitive values) may be used as either a key or a value.
- **JavaScript Equivalent**: `Map`
- **Example**:
    ```jano
    ቋሚ የኔ_መዝገብ = አዲስ መዝገብ()፤
    የኔ_መዝገብ.አስቀምጥ('ስም', "አልማዝ")፤
    ያትም(የኔ_መዝገብ.አግኝ('ስም'))፤ // Output: አልማዝ
    ```

### `ታላቅ_ቁጥር` (BigInt)
- **Description**: `ታላቅ_ቁጥር` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the `ቁጥር` (Number) primitive.
- **JavaScript Equivalent**: `BigInt`
- **Example**:
    ```jano
    ቋሚ ትልቅ_ቁጥር = ታላቅ_ቁጥር(9007199254740991n + 1n)፤
    ያትም(ትልቅ_ቁጥር)፤
    ```

### `ላላ_መዝገብ` (WeakMap)
- **Description**: A `ላላ_መዝገብ` (WeakMap) object is a collection of key/value pairs in which the keys are weakly referenced. This means that if there are no other references to the key object, it can be garbage collected.
- **JavaScript Equivalent**: `WeakMap`
- **Example**:
    ```jano
    ቋሚ የኔ_ላላ_መዝገብ = አዲስ ላላ_መዝገብ()፤
    ```

### `ላላ_ስብስብ` (WeakSet)
- **Description**: A `ላላ_ስብስብ` (WeakSet) object is a collection of objects for which only weak references are held. Objects in a WeakSet can be garbage collected if there are no other references to them.
- **JavaScript Equivalent**: `WeakSet`
- **Example**:
    ```jano
    ቋሚ የኔ_ላላ_ስብስብ = አዲስ ላላ_ስብስብ()፤
    ```

## 14. Data Conversion & Global Objects

Keywords and functions for converting between data types and interacting with global objects.

### `ጽሁፍ` (String)
- **Description**: The global `String` object is a constructor for strings, or a way to perform operations on string primitive values.
- **JavaScript Equivalent**: `String`
- **Example**:
    ```jano
    ቋሚ ቁጥር_ጽሁፍ = ጽሁፍ(123)፤
    ያትም(አይነት(ቁጥር_ጽሁፍ))፤ // Output: "ጽሁፍ"
    ```

### `ቁጥር` (Number)
- **Description**: The global `Number` object is a wrapper object allowing you to work with numerical values.
- **JavaScript Equivalent**: `Number`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ_ቁጥር = ቁጥር("123")፤
    ያትም(አይነት(ጽሁፍ_ቁጥር))፤ // Output: "ቁጥር"
    ```

### `ጃነማ` (JSON)
- **Description**: The global `ጃነማ` (JSON) object contains methods for parsing JavaScript Object Notation (JSON) strings and converting JavaScript values to JSON strings.
- **JavaScript Equivalent**: `JSON`
- **Example**:
    ```jano
    ቋሚ የጃነማ_ጽሁፍ = '{ "ስም": "አበበ" }'፤
    ቋሚ ነገር_ውሂብ = ጃነማ.ተንትን(የጃነማ_ጽሁፍ)፤
    ያትም(ነገር_ውሂብ.ስም)፤ // Output: አበበ
    ```

### `ተንትን` (parse)
- **Description**: A method of the `ጃነማ` (JSON) object that parses a JSON string, constructing the JavaScript value or object described by the string.
- **JavaScript Equivalent**: `JSON.parse`
- **Example**: See `ጃነማ` example above.

### `ለውጥ` (stringify)
- **Description**: A method of the `ጃነማ` (JSON) object that converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, and optionally including only a specified set of properties if a replacer array is specified.
- **JavaScript Equivalent**: `JSON.stringify`
- **Example**:
    ```jano
    ቋሚ ነገር_ውሂብ = ነገር { ስም: "አበበ", ዕድሜ: 30 }፤
    ቋሚ የጃነማ_ጽሁፍ = ጃነማ.ለውጥ(ነገር_ውሂብ)፤
    ያትም(የጃነማ_ጽሁፍ)፤ // Output: {"ስም":"አበበ","ዕድሜ":30}
    ```

## 15. State & Getters/Setters

These are used for defining how object properties are accessed and modified.

### `ያዥ` (get)
- **Description**: The `ያዥ` syntax binds an object property to a function that will be called when that property is looked up. It's often used to compute a property's value dynamically or to provide access control.
- **JavaScript Equivalent**: `get`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር {
      የመጀመሪያ_ስም: "አበበ",
      የአባት_ስም: "ከበደ",
      ያዥ ሙሉ_ስም() {
        መልስ ይህ.የመጀመሪያ_ስም + " " + ይህ.የአባት_ስም፤
      }
    }፤
    ያትም(ነገር.ሙሉ_ስም)፤ // Output: አበበ ከበደ
    ```

### `አስቀማጭ` (set)
- **Description**: The `አስቀማጭ` syntax binds an object property to a function to be executed when that property is assigned to. It's often used for validation or side effects when a property changes.
- **JavaScript Equivalent**: `set`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር {
      _ዕድሜ: 0,
      አስቀማጭ ዕድሜ(አዲስ_ዕድሜ) {
        ከሆነ (አዲስ_ዕድሜ >= 0) {
          ይህ._ዕድሜ = አዲስ_ዕድሜ፤
        }
      },
      ያዥ ዕድሜ() {
        መልስ ይህ._ዕድሜ፤
      }
    }፤
    ነገር.ዕድሜ = 25፤
    ያትም(ነገር.ዕድሜ)፤ // Output: 25
    ```

## 16. Async Timing

Functions for scheduling code execution asynchronously.

### `ቆይ` (setTimeout)
- **Description**: The `ቆይ` global function sets a timer which executes a function or specified piece of code once the timer expires.
- **JavaScript Equivalent**: `setTimeout`
- **Example**:
    ```jano
    ቆይ( ተግባር() {
      ያትም("ይህ ከ 2 ሰከንድ በኋላ ይታያል።")፤
    }, 2000)፤
    ```

### `ክፈት` (setInterval)
- **Description**: The `ክፈት` global function repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
- **JavaScript Equivalent**: `setInterval`
- **Example**:
    ```jano
    ይሁን ቆጣሪ = 0፤
    ቋሚ ጊዜ_መቁጠርያ = ክፈት( ተግባር() {
      ያትም("ሰላም " + ቆጣሪ++ + "!")፤
      ከሆነ (ቆጣሪ === 3) {
        አፅዳ_ክፈት(ጊዜ_መቁጠርያ)፤ // Stop the interval
      }
    }, 1000)፤ // Every 1 second
    ```

## 17. Context & Meta

Keywords for understanding execution context and advanced object manipulation.

### `ሁላቀፍ` (global)
- **Description**: (Node.js specific) A global namespace object, similar to `window` in browsers. It is available in all modules.
- **JavaScript Equivalent**: `global` (Node.js)
- **Example**:
    ```jano
    // Node.js context
    ያትም(ሁላቀፍ.process.cwd())፤
    ```

### `ባህሪ` (property)
- **Description**: Refers to a characteristic of an object, often a key-value pair.
- **JavaScript Equivalent**: `property` (conceptual)
- **Example (conceptual usage)**:
    ```jano
    ቋሚ ነገር = ነገር { ስም: "ዋጋ" }፤
    // 'ስም' የነገሩ ባህሪ ነው።
    ```

### `ቀዳማይ` (prototype)
- **Description**: The mechanism by which JavaScript objects inherit features from one another. Every object has a `prototype` property that refers to another object.
- **JavaScript Equivalent**: `prototype`
- **Example**:
    ```jano
    ተግባር ሰው(ስም) {
      ይህ.ስም = ስም፤
    }
    ሰው.ቀዳማይ.ሰላምታ = ተግባር() {
      ያትም("ሰላም, " + ይህ.ስም)፤
    }
    ቋሚ አዲስ_ሰው = አዲስ ሰው("አበበ")፤
    አዲስ_ሰው.ሰላምታ()፤ // Output: ሰላም, አበበ
    ```

### `ሁላቀፍ_ነው` (globalThis)
- **Description**: A global property that contains the global `this` value, regardless of the environment (browser or Node.js). It provides a standard way to access the global object.
- **JavaScript Equivalent**: `globalThis`
- **Example**:
    ```jano
    ያትም(ሁላቀፍ_ነው === window)፤ // In browser: እውነት
    ያትም(ሁላቀፍ_ነው === global)፤ // In Node.js: እውነት
    ```

### `ባህሪ_ግለጽ` (defineProperty)
- **Description**: The static method `ነገር.ባህሪ_ግለጽ()` adds the named property described by a given descriptor to an object, or modifies an existing property. This allows for fine-grained control over property attributes (writable, enumerable, configurable).
- **JavaScript Equivalent**: `Object.defineProperty`
- **Example**:
    ```jano
    ቋሚ ነገር = {}፤
    ነገር.ባህሪ_ግለጽ(ነገር, 'አዲስ_ቁልፍ', {
      ዋጋ፡ 10,
      መጻፍ_ይቻላል፡ ሐሰት
    })፤
    ነገር.አዲስ_ቁልፍ = 20፤ // Ignored in strict mode, error in non-strict
    ያትም(ነገር.አዲስ_ቁልፍ)፤ // Output: 10
    ```

### `መግለጫ` (descriptor)
- **Description**: An object that describes the configuration and attributes of an object property (e.g., `value`, `writable`, `enumerable`, `configurable`). Used with `ባህሪ_ግለጽ`.
- **JavaScript Equivalent**: `descriptor` (conceptual)
- **Example**: See `ባህሪ_ግለጽ` example above.

## 18. Console Levels

Methods of the `ያትም` (console) object for logging messages with different severities.

### `አስጠንቅቅ` (warn)
- **Description**: Outputs a warning message to the console. Typically displayed with a yellow background or icon to indicate a non-critical issue.
- **JavaScript Equivalent**: `console.warn`
- **Example**:
    ```jano
    ያትም.አስጠንቅቅ("ይህ ማስጠንቀቂያ ነው!")፤
    ```

### `አሳብቅ` (error)
- **Description**: Outputs an error message to the console. Typically displayed with a red background or icon to indicate a critical issue.
- **JavaScript Equivalent**: `console.error`
- **Example**:
    ```jano
    ያትም.አሳብቅ("ስህተት ተከስቷል!")፤
    ```

### `ሰንጠረዥ` (console.table)
- **Description**: Displays tabular data as a table in the console. Useful for inspecting arrays of objects or nested objects.
- **JavaScript Equivalent**: `console.table`
- **Example**:
    ```jano
    ቋሚ ሰዎች = ዝርዝር(
      ነገር { ስም: "አበበ", ዕድሜ: 30 },
      ነገር { ስም: "ከበደ", ዕድሜ: 25 }
    )፤
    ያትም.ሰንጠረዥ(ሰዎች)፤
    ```

### `አፅዳ` (console.clear)
- **Description**: Clears the console. This will remove all previously logged messages from the console's history.
- **JavaScript Equivalent**: `console.clear`
- **Example**:
    ```jano
    ያትም.አፅዳ()፤
    ```

### `ቡድን` (group)
- **Description**: Creates a new inline group in the web console, indenting all subsequent output by one level until `ቡድን_ጨርስ` is called.
- **JavaScript Equivalent**: `console.group`
- **Example**:
    ```jano
    ያትም.ቡድን("የመጀመሪያ ቡድን")፤
    ያትም("ቡድን ውስጥ መልእክት")፤
    ያትም.ቡድን_ጨርስ()፤
    ```

### `ቡድን_ጨርስ` (groupEnd)
- **Description**: Exits the current inline group in the web console.
- **JavaScript Equivalent**: `console.groupEnd`
- **Example**: See `ቡድን` example above.

## 19. Structural

Keywords for managing function invocation and context.

### `ተግብር` (apply)
- **Description**: Calls a function with a given `this` value, and `ግብዓቶች` (arguments) provided as an array (or an array-like object).
- **JavaScript Equivalent**: `apply`
- **Example**:
    ```jano
    ተግባር ሰላምታ(ሀገር, ከተማ) {
      ያትም("ሰላም ከ " + ከተማ + ", " + ሀገር + "!");
    }
    ቋሚ ውሂብ = ዝርዝር("ኢትዮጵያ", "አዲስ አበባ")፤
    ሰላምታ.ተግብር(ባዶ, ውሂብ)፤ // Output: ሰላም ከ አዲስ አበባ, ኢትዮጵያ!
    ```

### `ጥራ` (call)
- **Description**: Calls a function with a given `this` value and `ግብዓቶች` (arguments) provided individually.
- **JavaScript Equivalent**: `call`
- **Example**:
    ```jano
    ተግባር ሰላምታ(ሀገር, ከተማ) {
      ያትም("ሰላም ከ " + ከተማ + ", " + ሀገር + "!");
    }
    ሰላምታ.ጥራ(ባዶ, "ኢትዮጵያ", "አዲስ አበባ")፤ // Output: ሰላም ከ አዲስ አበባ, ኢትዮጵያ!
    ```

### `እሰር` (bind)
- **Description**: Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- **JavaScript Equivalent**: `bind`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር {
      x: 42,
      የባህሪ_ተግባር: ተግባር() {
        ያትም(ይህ.x)፤
      }
    }፤
    ቋሚ ተግብር_ተግባር = ነገር.የባህሪ_ተግባር.እሰር(ነገር)፤
    ተግብር_ተግባር()፤ // Output: 42
    ```

## 20. Text Manipulation

Methods for working with and transforming strings.

### `ሰንጥቅ` (split)
- **Description**: The `ሰንጥቅ` method divides a `ጽሁፍ` (String) into an ordered list of substrings by searching for a pattern; puts these substrings into an array, and returns the array.
- **JavaScript Equivalent**: `split`
- **Example**:
    ```jano
    ቋሚ ዓረፍተ_ነገር = "እንኳን ደህና መጣችሁ"፤
    ቋሚ ቃላት = ዓረፍተ_ነገር.ሰንጥቅ(" ")፤
    ያትም(ቃላት)፤ // Output: ["እንኳን", "ደህና", "መጣችሁ"]
    ```

### `ቁረጥ` (slice)
- **Description**: The `ቁረጥ` method extracts a section of a string and returns it as a new string, without modifying the original string.
- **JavaScript Equivalent**: `slice`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "ጃኖ ፊደል"፤
    ቋሚ የተቆረጠ = ጽሁፍ.ቁረጥ(0, 4)፤
    ያትም(የተቆረጠ)፤ // Output: ጃኖ
    ```

### `ተካ` (replace)
- **Description**: The `ተካ` method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The pattern can be a string or a `መደበኛ_መግለጫ` (RegExp).
- **JavaScript Equivalent**: `replace`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "ሰላም አለም!"፤
    ቋሚ አዲስ_ጽሁፍ = ጽሁፍ.ተካ("አለም", "ኢትዮጵያ")፤
    ያትም(አዲስ_ጽሁፍ)፤ // Output: ሰላም ኢትዮጵያ!
    ```

### `በትልቅ` (toUpperCase)
- **Description**: Converts a string to uppercase letters.
- **JavaScript Equivalent**: `toUpperCase`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "hello"፤
    ያትም(ጽሁፍ.በትልቅ())፤ // Output: HELLO
    ```

### `በትንሽ` (toLowerCase)
- **Description**: Converts a string to lowercase letters.
- **JavaScript Equivalent**: `toLowerCase`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "HELLO"፤
    ያትም(ጽሁፍ.በትንሽ())፤ // Output: hello
    ```

### `አሳጥር` (trim)
- **Description**: Removes whitespace from both ends of a string.
- **JavaScript Equivalent**: `trim`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "  ሰላም  "፤
    ያትም(ጽሁፍ.አሳጥር())፤ // Output: "ሰላም"
    ```

### `ይጀምራል` (startsWith)
- **Description**: Determines whether a string begins with the characters of a specified string.
- **JavaScript Equivalent**: `startsWith`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "ጃኖ ፊደል"፤
    ያትም(ጽሁፍ.ይጀምራል("ጃኖ"))፤ // Output: እውነት
    ```

### `ይጨርሳል` (endsWith)
- **Description**: Determines whether a string ends with the characters of a specified string.
- **JavaScript Equivalent**: `endsWith`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "ጃኖ ፊደል"፤
    ያትም(ጽሁፍ.ይጨርሳል("ፊደል"))፤ // Output: እውነት
    ```

## 21. State Check

Methods for inspecting the state of objects and values.

### `አለው` (hasOwnProperty)
- **Description**: The `አለው` method returns a boolean indicating whether the object has the specified property as its own direct property (not inherited).
- **JavaScript Equivalent**: `hasOwnProperty`
- **Example**:
    ```jano
    ቋሚ ሰው = ነገር { ስም: "አበበ" }፤
    ያትም(ሰው.አለው('ስም'))፤ // Output: እውነት
    ያትም(ሰው.አለው('toString'))፤ // Output: ሐሰት (inherited)
    ```

### `ባዶ_ነው?` (isEmpty)
- **Description**: (Conceptual/Utility function) A common utility to check if a collection (like an array or object) is empty. Not a native JavaScript keyword.
- **JavaScript Equivalent**: `isEmpty` (conceptual)
- **Example (conceptual)**:
    ```jano
    ቋሚ ዝርዝር = ዝርዝር()፤
    ከሆነ (ዝርዝር.ባዶ_ነው?()) {
      ያትም("ዝርዝሩ ባዶ ነው።")፤
    }
    ```

### `እኩል_ነው?` (isEqual)
- **Description**: (Conceptual/Utility function) A common utility to perform a deep comparison between two values (objects, arrays, primitives) to determine if they are structurally equivalent. Not a native JavaScript keyword.
- **JavaScript Equivalent**: `isEqual` (conceptual)
- **Example (conceptual)**:
    ```jano
    ቋሚ ነገር1 = ነገር { ሀ: 1 }፤
    ቋሚ ነገር2 = ነገር { ሀ: 1 }፤
    ያትም(ነገር1.እኩል_ነው?(ነገር2))፤ // Output: እውነት
    ```

## 22. Math Constants

Special numeric values accessible through Jano Fidel.

### `ቁጥር_አይደለም` (NaN)
- **Description**: Represents a value that is Not-a-Number. It is a property of the global object.
- **JavaScript Equivalent**: `NaN`
- **Example**:
    ```jano
    ያትም(0 / 0)፤ // Output: ቁጥር_አይደለም
    ```

### `ወሰን_የለሽ` (Infinity)
- **Description**: A numeric value representing infinity. It is a property of the global object.
- **JavaScript Equivalent**: `Infinity`
- **Example**:
    ```jano
    ያትም(1 / 0)፤ // Output: ወሰን_የለሽ
    ```

## 23. Object & State Management

Keywords for controlling the mutability and extensibility of objects.

### `ቆልፍ` (freeze)
- **Description**: The static method `ነገር.ቆልፍ()` freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
- **JavaScript Equivalent**: `Object.freeze`
- **Example**:
    ```jano
    ቋሚ ነገር = ነገር { ቁልፍ: "ዋጋ" }፤
    ነገር.ቆልፍ(ነገር)፤
    ነገር.ቁልፍ = "አዲስ_ዋጋ"፤ // Ignored in strict mode
    ያትም(ነገር.ቁልፍ)፤ // Output: ዋጋ
    ```

### `ታሸገ` (isFrozen)
- **Description**: The static method `ነገር.ታሸገ()` determines if an object is frozen.
- **JavaScript Equivalent**: `Object.isFrozen`
- **Example**:
    ```jano
    ቋሚ ነገር = {}፤
    ነገር.ቆልፍ(ነገር)፤
    ያትም(ነገር.ታሸገ(ነገር))፤ // Output: እውነት
    ```

## 24. Network & Modern APIs

Keywords for interacting with web APIs and network resources.

### `ጨልፍ` (fetch)
- **Description**: Provides an interface for fetching resources (e.g., across the network). It returns a `ቃልኪዳን` (Promise) that resolves to a `ምላሽ` (Response) object.
- **JavaScript Equivalent**: `fetch`
- **Example**:
    ```jano
    ጊዜጠባቂ ተግባር ውሂብ_አግኝ() {
      ቋሚ ምላሽ = ጠብቅ ጨልፍ('https://api.example.com/data')፤
      ቋሚ ውሂብ = ጠብቅ ምላሽ.ጃነማ()፤
      ያትም(ውሂብ)፤
    }
    ውሂብ_አግኝ()፤
    ```

### `አድራሻ` (URL)
- **Description**: The global `URL` object provides static methods and properties for parsing, constructing, normalizing, and encoding URLs.
- **JavaScript Equivalent**: `URL`
- **Example**:
    ```jano
    ቋሚ የኔ_አድራሻ = አዲስ አድራሻ('https://example.com/path?query=1')፤
    ያትም(የኔ_አድራሻ.hostname)፤ // Output: example.com
    ```

### `ራስ` (header)
- **Description**: (Contextual) Refers to HTTP headers, which are key-value pairs of metadata sent with HTTP requests and responses. The `Headers` interface can be used to manipulate them.
- **JavaScript Equivalent**: `header` (conceptual)
- **Example**:
    ```jano
    // Fetch request with headers
    ጨልፍ(URL, ነገር {
      ራስ፡ ነገር {
        'Content-Type'፡ 'application/json'
      }
    })፤
    ```

## 25. Search & Check

Utilities for searching within data structures and performing equality checks.

### `ይጀምራል` (startsWith)
- **Description**: Determines whether a string begins with the characters of a specified string.
- **JavaScript Equivalent**: `startsWith`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "እንደምን አደርክ"፤
    ያትም(ጽሁፍ.ይጀምራል("እንደምን"))፤ // Output: እውነት
    ```

### `ይጨርሳል` (endsWith)
- **Description**: Determines whether a string ends with the characters of a specified string.
- **JavaScript Equivalent**: `endsWith`
- **Example**:
    ```jano
    ቋሚ ጽሁፍ = "እንደምን አደርክ"፤
    ያትም(ጽሁፍ.ይጨርሳል("አደርክ"))፤ // Output: እውነት
    ```

## 26. Date & Time

Keywords for working with dates and times.

### `ቀን` (Date)
- **Description**: The global `Date` object is a constructor for date and time objects.
- **JavaScript Equivalent**: `Date`
- **Example**:
    ```jano
    ቋሚ አሁን = አዲስ ቀን()፤
    ያትም(አሁን)፤ // Output: Current date and time
    ```

### `አሁን` (now)
- **Description**: A static method of the `ቀን` (Date) object that returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC (Unix Epoch).
- **JavaScript Equivalent**: `Date.now`
- **Example**:
    ```jano
    ያትም(ቀን.አሁን())፤ // Output: Milliseconds since epoch
    ```

## 27. Regular Expressions

Keywords for working with regular expressions.

### `መደበኛ_መግለጫ` (RegExp)
- **Description**: The global `RegExp` object is used for matching text with patterns.
- **JavaScript Equivalent**: `RegExp`
- **Example**:
    ```jano
    ቋሚ ስርዓተ_ጥለት = አዲስ መደበኛ_መግለጫ('abc')፤
    ቋሚ ጽሁፍ = "abcdef"፤
    ያትም(ስርዓተ_ጥለት.ፈትሽ(ጽሁፍ))፤ // Output: እውነት
    ```

### `ፈትሽ` (test)
- **Description**: The `ፈትሽ` method of `መደበኛ_መግለጫ` (RegExp) instances executes a search for a match between a regular expression and a specified string. Returns `እውነት` or `ሐሰት`.
- **JavaScript Equivalent**: `RegExp.prototype.test`
- **Example**: See `መደበኛ_መግለጫ` example above.

## 28. Performance & Debugging

Tools for measuring performance and aiding in debugging.

### `አፈጻጸም` (performance)
- **Description**: The global `performance` object provides access to performance-related information for the current page. It's part of the High Resolution Time API.
- **JavaScript Equivalent**: `performance`
- **Example**:
    ```jano
    ያትም(አፈጻጸም.አሁን())፤ // Current time in milliseconds
    ```

### `ጊዜ_ጀምር` (time)
- **Description**: A method of the `ያትም` (console) object that starts a timer in the console. Useful for measuring the duration of an operation.
- **JavaScript Equivalent**: `console.time`
- **Example**:
    ```jano
    ያትም.ጊዜ_ጀምር('ስሌት')፤
    // አንዳንድ ከባድ ስሌት
    ያትም.ጊዜ_አብቃ('ስሌት')፤
    ```

### `ጊዜ_አብቃ` (timeEnd)
- **Description**: A method of the `ያትም` (console) object that stops a timer that was previously started by `ጊዜ_ጀምር()` and logs the elapsed time.
- **JavaScript Equivalent**: `console.timeEnd`
- **Example**: See `ጊዜ_ጀምር` example above.

## 29. Binary Data & Buffer

Keywords for handling binary data, especially relevant in Node.js or low-level operations.

### `መረብ` (buffer)
- **Description**: (Node.js specific) The `Buffer` class in Node.js is a global type for dealing with binary data directly. It represents a raw memory allocation outside the V8 heap.
- **JavaScript Equivalent**: `Buffer` (Node.js)
- **Example (Node.js)**:
    ```jano
    ቋሚ ቢት_ውሂብ = አዲስ መረብ('ሰላም', 'utf8')፤
    ያትም(ቢት_ውሂብ)፤ // Output: <Buffer ...>
    ```

### `ውሂብ_እይታ` (DataView)
- **Description**: The `ውሂብ_እይታ` (DataView) provides a low-level interface for reading and writing multiple number types in an `ArrayBuffer` without caring about the platform's endianness.
- **JavaScript Equivalent**: `DataView`
- **Example**:
    ```jano
    ቋሚ የባይት_መያዣ = አዲስ ArrayBuffer(16)፤
    ቋሚ መያዣ_እይታ = አዲስ ውሂብ_እይታ(የባይት_መያዣ)፤
    መያዣ_እይታ.setInt8(0, 127)፤
    ያትም(መያዣ_እይታ.getInt8(0))፤ // Output: 127
    ```

## 30. Reflect & Proxy

Keywords for advanced meta-programming capabilities.

### `አንጸባርቅ` (Reflect)
- **Description**: The `አንጸባርቅ` global object provides static methods for interceptable JavaScript operations. These methods are the same as those of proxy handlers and are useful for meta-programming.
- **JavaScript Equivalent**: `Reflect`
- **Example**:
    ```jano
    ቋሚ ሰው = {}፤
    አንጸባርቅ.ባህሪ_ግለጽ(ሰው, 'ስም', { ዋጋ: 'አበበ' })፤
    ያትም(ሰው.ስም)፤ // Output: አበበ
    ```

### `ወኪል` (Proxy)
- **Description**: The `ወኪል` (Proxy) object allows you to create an object that can be used in place of another object, but which may intercede in fundamental operations for the target object (e.g., property lookup, assignment, enumeration, function invocation, etc.).
- **JavaScript Equivalent**: `Proxy`
- **Example**:
    ```jano
    ቋሚ ኢላማ = {}፤
    ቋሚ ወኪል_ተቆጣጣሪ = ነገር {
      ያዥ(ኢላማ_ነገር, ቁልፍ) {
        ያትም("የተጠየቀው ቁልፍ: " + ቁልፍ)፤
        መልስ ኢላማ_ነገር[ቁልፍ]፤
      }
    }፤
    ቋሚ የተከለለ_ነገር = አዲስ ወኪል(ኢላማ, ወኪል_ተቆጣጣሪ)፤
    የተከለለ_ነገር.ስም = "አበበ"፤ // 'set' trap will be invoked
    ያትም(የተከለለ_ነገር.ስም)፤ // 'get' trap will be invoked
    ```

### `ጥለፍ` (trap)
- **Description**: (Contextual) In the context of `ወኪል` (Proxy) objects, "trap" refers to the handler methods (e.g., `get`, `set`, `apply`) that intercept operations on the target object.
- **JavaScript Equivalent**: `trap` (conceptual)
- **Example**: See `ወኪል` example above.

## 31. Miscellaneous

Various other keywords and concepts.

### `ስም_አልባ` (anonymous)
- **Description**: (Conceptual) Refers to a function that is not named. Often used for callbacks or immediately invoked function expressions.
- **JavaScript Equivalent**: `anonymous` (conceptual)
- **Example**:
    ```jano
    // ስም_አልባ ተግባር
    (ተግባር() {
      ያትም("ይህ ስም_አልባ ተግባር ነው።")፤
    })()፤
    ```

### `ተጠቀም` (use)
- **Description**: (Contextual) Refers to the `use strict` directive, which enables strict mode in JavaScript, causing code to be executed in a "strict" operating context.
- **JavaScript Equivalent**: `use` (as in `'use strict'`)
- **Example**:
    ```jano
    "ተጠቀም ጥብቅ"፤
    ```

### `ቅንብር` (template)
- **Description**: (Contextual) Refers to template literals (backticks `` ` ``), which allow for embedded expressions, multi-line strings, and string interpolation.
- **JavaScript Equivalent**: `template` (conceptual)
- **Example**:
    ```jano
    ቋሚ ስም = "አበበ"፤
    ቋሚ ሰላምታ = ቅንብር `ሰላም, ${ስም}!`፤
    ያትም(ሰላምታ)፤ // Output: ሰላም, አበበ!
    ```
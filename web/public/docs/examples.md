# Jano Fidel Examples

This section provides a collection of code examples to help you understand how to use Jano Fidel for various tasks. The examples are categorized by their functionality.

## 1. Basic Examples

### Hello World!

A simple program to print a greeting.

```amharic
ያትም("ሰላም, ዓለም!")፤

```
### Variables and Data Types

Demonstrates declaring variables with `ቋሚ` (const) and `ይሁን` (let) and using different data types.

```jano
ቋሚ ስም = "አበበ"፤ // String (ጽሁፍ)
ይሁን ዕድሜ = ፴፤ // Number (ቁጥር)
ቋሚ ተማሪ_ነው = እውነት፤ // Boolean (እውነት)
ይሁን ዝርዝር = አዲስ ድልድል("ፖም", "ብርቱካን", "ሙዝ")፤ // Array (ድልድል)

ይሁን ሰው = {
  ሙሉ_ስም: ስም,
  ዕድሜ: ዕድሜ
}፤ // Object (መዝገብ)

ያትም(ስም)፤
ያትም(ዕድሜ)፤
ያትም(ተማሪ_ነው)፤
ያትም(ዝርዝር[፟])፤ // Accessing index 0 (፟)
ያትም(ሰው።ሙሉ_ስም)፤ // Accessing property using Dot Operator (።)
```

## 2. Control Flow

### Conditional Statements (ከሆነ / ካልሆነ)

Using `if` and `else` to execute code based on conditions.

```jano
ይሁን ቁጥር = ፲፤

ከሆነ (ቁጥር > ፟) {
  ያትም("ቁጥሩ አዎንታዊ ነው")፤
} ካልሆነ (ቁጥር < ፟) {
  ያትም("ቁጥሩ አሉታዊ ነው")፤
} ካልሆነ {
  ያትም("ቁጥሩ ዜሮ ነው")፤
}
```

### Loops (እስኪሆን / ለእያንዳንዱ)

Demonstrates `while` and `for...of` loops.

#### While Loop (እስኪሆን)

```jano
ተለዋዋጭ ቆጣሪ = 0፤
እስኪሆን (ቆጣሪ < 5) {
  ጻፍ("ቆጣሪ: " + ቆጣሪ)፤
  ቆጣሪ = ቆጣሪ + 1፤
}
```

#### For-Each Loop (ለእያንዳንዱ)

```jano
ቋሚ ፍራፍሬዎች = አዲስ ድልድል("ፖም", "ብርቱካን", "ሙዝ")፤

ለእያንዳንዱ (ይሁን ፍሬ የ ፍራፍሬዎች) {
  ያትም("ፍሬ: " + ፍሬ)፤
}
```

## 3. Functions

### Simple Function

Defines a function to add two numbers and return the result.

```jano
ተግባር ድምር(ቁጥር፩, ቁጥር፪) {
  መልስ ቁጥር፩ + ቁጥር፪፤
}

ያትም("፪ እና ፫ ድምር: " + ድምር(፪, ፫))፤ // Output: ፭
```

### Recursive Functions

#### Factorial

This example calculates the factorial of a number using recursion.

```jano
ተግባር ፋክቶሪያል(ቁጥር) {
  ከሆነ (ቁጥር <= ፩) {
    መልስ ፩፤
  } ካልሆነ {
    መልስ ቁጥር * ፋክቶሪያል(ቁጥር - ፩)፤
  }
}

ያትም("የ ፭ ፋክቶሪያል: " + ፋክቶሪያል(፭))፤ // Output: ፻፳
```

#### Fibonacci

This example generates the nth Fibonacci number using recursion.

```jano
ተግባር ፊቦናቺ(ቁጥር) {
  ከሆነ (ቁጥር <= ፩) {
    መልስ ቁጥር፤
  } ካልሆነ {
    መልስ ፊቦናቺ(ቁጥር - ፩) + ፊቦናቺ(ቁጥር - ፪)፤
  }
}

ያትም("፲ኛው ፊቦናቺ ቁጥር: " + ፊቦናቺ(፲))፤ // Output: ፶፭
```

## 4. Classic Problems

### FizzBuzz

This example implements the classic FizzBuzz problem.

```jano
ተግባር fizzBuzz(ቁጥር) {
  ከሆነ (ቁጥር % ፲፭ == ፟) {
    ያትም("FizzBuzz")፤
  } ካልሆነ (ቁጥር % ፫ == ፟) {
    ያትም("Fizz")፤
  } ካልሆነ (ቁጥር % ፭ == ፟) {
    ያትም("Buzz")፤
  } ካልሆነ {
    ያትም(ቁጥር)፤
  }
}

ያትም("FizzBuzz ምሳሌዎች:")፤
fizzBuzz(፲፭)፤ // Output: FizzBuzz
fizzBuzz(፫)፤  // Output: Fizz
fizzBuzz(፭)፤  // Output: Buzz
```
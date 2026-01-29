# Jano Fidel Cheat Sheet (ጃኖ ፊደል ማጠቃለያ)

This cheat sheet provides a quick reference for the Jano Fidel programming language syntax and commands, mapped to the official JanoFidel Dictionary.

## Basic Syntax & Keywords

| Amharic Keyword | JavaScript Equivalent | Description | Example |
| :--- | :--- | :--- | :--- |
| `ቋሚ` | `const` | Declares an immutable constant variable. | `ቋሚ ዕድሜ = ፴፤` |
| `ይሁን` | `let` | Declares a block-scoped mutable variable. | `ይሁን ስም = "አበበ"፤` |
| `ተለዋጭ` | `var` | Declares a traditional variable. | `ተለዋጭ ዋጋ = ፻፤` |
| `ያትም` | `console.log` | Prints data to the console. | `ያትም("ሰላም ዓለም!")፤` |
| `ተግባር` | `function` | Defines a reusable block of code. | `ተግባር ድምር(x, y) { መልስ x + y፤ }` |
| `መልስ` | `return` | Specifies the value returned by a function. | `መልስ እውነት፤` |
| `ከሆነ` | `if` | Conditional execution logic. | `ከሆነ (x > y) { ያትም(x)፤ }` |
| `ካልሆነ` | `else` | Fallback logic for `ከሆነ`. | `ካልሆነ { ያትም(y)፤ }` |
| `እስከ` | `while` | Loop that runs while a condition is true. | `እስከ (ቆጣሪ < ፭) { ... }` |
| `ለእያንዳንዱ` | `for` | Standard loop for iteration. | `ለእያንዳንዱ (ይሁን i=፟፤ i<፲፤ i++)` |
| `ውጣ` | `break` | Terminates the current loop or switch. | `ከሆነ (i == ፫) { ውጣ፤ }` |
| `ቀጥል` | `continue` | Skips to the next iteration of a loop. | `ከሆነ (i == ፩) { ቀጥል፤ }` |
| `እውነት` | `true` | Boolean truth value. | `ቋሚ ዝግጁ = እውነት፤` |
| `ሀሰት` | `false` | Boolean false value. | `ቋሚ ስህተት = ሀሰት፤` |
| `ባዶ` | `null` | Represents intentional absence of value. | `ይሁን ዳታ = ባዶ፤` |
| `አልተወሰነም` | `undefined` | Variable has not been assigned a value. | `ይሁን x = አልተወሰነም፤` |
| `አዲስ` | `new` | Creates an instance of a class/object. | `ቋሚ ዛሬ = አዲስ ቀን()፤` |
| `መደብ` | `class` | Declares a class. | `መደብ ተማሪ { ... }` |
| `ይህ` | `this` | Refers to the current context/object. | `ያትም(ይህ።ስም)፤` |



## Data Types & Objects

| Jano Keyword | JS Equivalent | Description |
| :--- | :--- | :--- |
| `ቁጥር` | `Number` | Numeric data (e.g., ፩, ፪, ፲). |
| `ጽሁፍ` | `String` | Textual data. |
| `ድልድል` | `Array` | Ordered collection of values. |
| `ቃልኪዳን` | `Promise` | Represents an asynchronous operation. |
| `ጃነማ` | `JSON` | Jano Object Notation (ጃኖ ነገር ማስታወሻ). |
| `ሒሳብ` | `Math` | Mathematical constants and functions. |

## Punctuation & Operators

| Jano Symbol | Meaning | Role in JanoFidel |
| :--- | :--- | :--- |
| `።` | `.` | Dot Operator (e.g., `ሒሳብ።ዘፈቀደ()`) |
| `፤` | `;` | Statement Terminator |
| `፡` or `፦` | `:` | Colon / Key-Value separator |
| `፣` | `,` | Comma / List separator |
| `እና` | `&&` | Logical AND |
| `ወይም` | `||` | Logical OR |
| `አይደለም` | `!` | Logical NOT |

## Example Program

This program demonstrates the corrected syntax using your official dictionary mapping.

```amharic
// ተግባር: የሁለት ቁጥሮች ድምርን የሚመልስ
ተግባር ድምርን_አግኝ(ቁጥር፩, ቁጥር፪) {
  መልስ ቁጥር፩ + ቁጥር፪፤
}

// ቁጥሮችን አስቀድሞ መወሰን (Using Ethiopic Numerals)
ቋሚ የመጀመሪያ_ቁጥር = ፲፤
ቋሚ ሁለተኛ_ቁጥር = ፭፤

// ተግባርን መጠቀም
ይሁን ውጤት = ድምርን_አግኝ(የመጀመሪያ_ቁጥር, ሁለተኛ_ቁጥር)፤

// ውጤቱን ማተም (Using ያትም and Dot operator)
ያትም("የሁለቱ ቁጥሮች ድምር: " + ውጤት)፤

// ሁኔታዊ መግለጫ (Logic Flow)
ከሆነ (ውጤት > ፲) {
  ያትም("ድምሩ ከ፲ ይበልጣል!")፤
} ካልሆነ (ውጤት === ፲) {
  ያትም("ድምሩ ፲ ነው!")፤
} ካልሆነ {
  ያትም("ድምሩ ከ፲ ያነሰ ነው!")፤
}

// ምልልስ (Loop using 'እስከ')
ያትም("ከ፟ እስከ ፬ ያሉ ቁጥሮች:")፤
ይሁን ቆጣሪ = ፟፤
እስከ (ቆጣሪ < ፭) {
  ያትም(ቆጣሪ)፤
  ቆጣሪ = ቆጣሪ + ፩፤
}
```
This program demonstrates variable declaration, function definition and invocation, arithmetic operations, conditional statements, and a while loop in Jano Fidel. It calculates the sum of two numbers, checks if the sum is greater than, equal to, or less than 10, and then prints numbers from 0 to 4.
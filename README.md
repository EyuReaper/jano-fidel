
---

![ጃኖ ፊደል (Jano Fidel)](asset/logo.png)

**A Native Amharic Programming Language built on Node.js.**

ጃኖ ፊደል (Jano Fidel) is a high-level programming language that allows developers to write full-scale applications using the Ethiopic (Ge'ez) script. It transpiles directly to JavaScript, giving you the power of the Node.js ecosystem with a completely native writing experience.

## ✨ ዋና ዋና ባህሪያት (Features)

* **Native Keywords**: Use `ይሁን` (let), `ተግባር` (function), and `ከሆነ` (if) instead of English equivalents.
* **Ethiopic Numerals**: Full support for Ge'ez numbers (፩, ፪, ፲፪...) with a built-in conversion engine.
* **Amharic Built-ins**: Native aliases for common objects like `ሒሳብ` (Math), `ቀን` (Date), and `ያትም` (console.log).
* **Asynchronous Support**: Full `ጊዜጠባቂ` (async) and `ጠብቅ` (await) support for modern development.
* **CLI Tool**: Run your code globally with the `jano` command.

---

## 🚀 አጀማመር (Quick Start)

### 1. Installation

Clone the repository and link it to your global path:

```bash
cd JanoFidel
npm install
sudo npm link

```

### 2. Writing your first Jano file (`ሰላምታ.jf`)

```javascript
ተግባር ሰላምታ_ስጥ(ስም) {
    መልስ "ሰላም " + ስም + " እንኳን ወደ ጃኖ ፊደል መጣህ!"፤
}

ያትም(ሰላምታ_ስጥ("ዮናስ"))፤

// Math with Ge'ez numbers
ይሁን ውጤት = ፲፪ + ፰፤
ያትም("፲፪ + ፰ = " + ውጤት)፤

```

### 3. Running the code

```bash
jano ሰላምታ.jf

```

---

## 📚 የቋንቋው መዝገበ-ቃላት (Dictionary Mapping)

| Jano (ጃኖ) | JavaScript Equivalent |
| --- | --- |
| `ይሁን` | `let` / `var` |
| `ቋሚ` | `const` |
| `ተግባር` | `function` |
| `መደብ` | `class` |
| `ከሆነ` | `if` |
| `ካልሆነ` | `else` |
| `መልስ` | `return` |
| `ያትም` | `console.log` |
| `።` | `.` (Dot operator) |

---

## 🛠️ የቴክኒክ መዋቅር (Architecture)

1. **Lexer**: Scans `.jf` files for Ethiopic characters and tokens.
2. **Number Engine**: Converts additive Ethiopic numerals () into Arabic numerals for JavaScript.
3. **Prelude**: A standard library injected at runtime to provide prototype aliases (e.g., adding `.ርዝመት` to Arrays).
4. **Transpiler**: Maps the tokens to valid JavaScript and executes via the Node.js VM.

---

## 🤝 ማበረታቻ (Contributing)

We welcome contributions! If you want to add more keywords to the `dictionary.js` or expand the `prelude.js` standard library, feel free to open a Pull Request.

---

## 📄 ፈቃድ (License)

This project is licensed under the **MIT License**.

---

### What to do next:

1. **Push to GitHub**: Initialize a git repo (`git init`), add your files, and push it to a new repository.
2. **Screenshot**: Take a screenshot of your terminal running `jano ዋና.jf` and add it to the README to show it off!

**Would you like me to help you draft the `git` commands to push this to GitHub for the first time?**
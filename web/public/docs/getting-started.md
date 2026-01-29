# Getting Started

This guide will walk you through setting up your local environment and writing your first Jano Fidel program.

## Running the Web Application Locally

While you can use the online playground at [JanoFidel.com](https://jano-fidel.com), you can also run the Jano Fidel web application on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (v16 or later)
*   [npm](https://www.npmjs.com/)


### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jano-fidel/Jano-Fidel.git
    ```

2.  **Navigate to the web directory:**

    ```bash
    cd Jano-Fidel/web
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

Once the installation is complete, you can start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`. You can now use the playground to write and execute Jano Fidel code.

## Your First Jano Fidel Program: Hello, World!

Let's start with a classic "Hello, World!" program.

1.  Navigate to the playground section of the web application.
2.  In the editor, type the following code:

    ```jano
    ያትም("ሰላም, ዓለም!")፤
    ```
    
    Here, `ያትም` (which means "write" or "say") is the command to print text to the console.

3.  Click the "Run" button.

You should see "ሰላም, ዓለም!" printed in the output console.

Congratulations! You have successfully written and executed your first Jano Fidel program.

## What's Next?

Now that you have a basic understanding of how to write and run Jano Fidel code, you can explore the following resources to learn more:

*   **Cheatsheet**: A quick reference for Jano Fidel syntax and commands.
*   **Examples**: A collection of code examples to help you understand how to use Jano Fidel for various tasks.
*   **API Reference**: A reference for the available Jano Fidel keywords and their JavaScript equivalents.
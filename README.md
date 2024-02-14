# Personal Website

![https://badend.is-a.dev/](https://raw.githubusercontent.com/BadEnd777/Personal-Website/main/.github/assets/preview.png)

Welcome to my personal website project! This repository contains the code for my personal website, where I showcase my portfolio, projects, and other information about myself.

The website is built using [Next.js](https://nextjs.org/) as the build tool, [Shadcn UI](https://ui.shadcn.com/) as the JavaScript library for building user interfaces, [Tailwind CSS](https://tailwindcss.com/) for styling, and [TypeScript](https://www.typescriptlang.org/) for type checking and improved developer experience.

The website is hosted on [https://badend.is-a.dev/](https://badend.is-a.dev/), and you can visit it to see the live version.

[![CodeQL](https://github.com/BadEnd777/Personal-Website/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/BadEnd777/Personal-Website/actions/workflows/github-code-scanning/codeql)
[![🛡️ GitGuardian scan](https://github.com/BadEnd777/Personal-Website/actions/workflows/gitguardian.yml/badge.svg)](https://github.com/BadEnd777/Personal-Website/actions/workflows/gitguardian.yml)

## Table of Contents

-   [Personal Website](#personal-website)
    -   [Table of Contents](#table-of-contents)
    -   [Prerequisites](#prerequisites)
    -   [Technologies Used](#technologies-used)
    -   [Usage](#usage)
        -   [Development](#development)
        -   [Production](#production)
    -   [Project Structure](#project-structure)
    -   [Contributing](#contributing)
    -   [License](#license)
    -   [Contact](#contact)

## Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (Or other package manager of your choice)
-   [Git](https://git-scm.com/) (Optional, but recommended)

## Technologies Used

-   [Next.js](https://nextjs.org/) — The React framework for production
-   [shadcn/ui](https://ui.shadcn.com/) — Beautiful design components for modern web applications
-   [Tailwind CSS](https://tailwindcss.com/) — A utility-first CSS framework for rapid UI development
-   [TypeScript](https://www.typescriptlang.org/) — A typed superset of JavaScript that compiles to plain JavaScript

## Usage

### Development

To work on the project locally, ensure you have Node.js installed on your machine.

-   Clone the repository:

```bash
git clone https://github.com/BadEnd777/Personal-Website.git
```

> Alternatively, you can [download the ZIP file](https://github.com/BadEnd777/Personal-Website/archive/refs/heads/main.zip) and extract it to a directory of your choice.

-   Navigate to the project directory:

```bash
cd Personal-Website # or open the directory in your file explorer
```

-   Install dependencies:

```bash
npm install  # or `pnpm install` if you prefer pnpm
```

-   Start the development server:

```bash
npm run dev  # or `pnpm run dev` if you prefer pnpm
```

-   Open your browser and visit [`http://localhost:3000`](http://localhost:3000) to view the website locally.

### Production

To build the project for production deployment, run:

```bash
npm run build  # or `pnpm run build` if you prefer pnpm
```

The optimized production-ready assets will be generated in the `dist` directory. You can then host these files on a web server to make the website accessible online.

## Project Structure

The project structure is as follows:

-   `public`: Stores static assets like images, and icons.
-   `src`: Contains the source files for the website.
    -   `app`: Contains the Next.js pages for the website.
    -   `components`: Contains the React components used in the website.
    -   `data`: Contains the data files for the website.
    -   `lib`: Contains the utility functions and helper modules for the website.
    -   `styles`: Contains the Tailwind CSS styles for the website.
-   `components.json`: Shadcn-solid components configuration.
-   `postcss.config.js`: PostCSS configuration.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `tsconfig.json`: TypeScript configuration.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Feel free to contact me at [badend777@proton.me](mailto:badend777@proton.me) for any questions or inquiries.

Happy coding! 🚀

---

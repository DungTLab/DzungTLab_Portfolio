🚀 DzungTLab's Personal Portfolio

Welcome to the official repository of DzungTLab's (Dung Le) personal portfolio website. I am a passionate Software Engineering student eager to build modern, efficient, and robust web systems.

This is my debut portfolio project, fully redesigned and enhanced using Bootstrap 5.3 coupled with custom CSS styles and clean, optimized Vanilla JavaScript.

🌟 Key Features

Bootstrap 5.3 Native Dark/Light Theme: Seamlessly transitions between dark and light modes by leveraging Bootstrap 5.3's native theme properties. It persists the user's preferred theme choice across sessions via localStorage.

Dynamic Typewriter Effect: Features an automated typing animation that gracefully cycles through custom professional titles on the hero section to keep the landing page highly engaging.

Mock IDE Terminal Simulator: Includes a beautifully styled fake C++ compilation terminal widget, showcasing a programming-themed "Vibe Coding" environment.

Scroll Reveal Animations: Powered by the modern IntersectionObserver API instead of heavy scroll event listeners, guaranteeing smooth, hardware-accelerated fade-in and slide-up transitions as the user scrolls.

Custom ScrollSpy Integration: Tracks the user's scroll position dynamically to automatically highlight the corresponding navigation link on the header.

Fully Responsive Design: Perfectly optimized for all form factors—from massive desktop monitors down to ultra-compact mobile displays—utilizing Bootstrap's flexbox and grid utilities.

Auto-Collapsing Mobile Menu: Automatically collapses the mobile navigation drawer after selecting a menu item, avoiding unnecessary clicks and optimizing the mobile user flow.

🛠️ Tech Stack

This project is built using modern client-side technologies:

HTML5 & CSS3 (For structural semantic layout, transitions, and native CSS custom properties).

Bootstrap v5.3.3 (For responsive grid system, ready-to-use components, utility helper classes, and native theme properties).

Bootstrap Icons v1.11.3 (For clean, scalable vector icon badges).

JavaScript (ES6+) (For application logic, scroll-reveal triggers, and local storage state persistence).

Google Fonts (Featuring Inter for global body copy and Fira Code for monospace/code typography).

📂 Project Directory Structure

DzungTLab-Portfolio/
├── assets/
│   └── images/
│       ├── Avt.jpg                   # Personal profile picture (About Section)
│       └── image_webPortfolio.png    # Preview thumbnail for the main portfolio project
├── index.html                        # Main HTML5 skeleton & Bootstrap integrations
├── style.css                         # Custom overrides, animations, and color tokens
└── script.js                         # Logic for theme toggle, ScrollSpy, and typewriter effects


⚙️ Installation & Usage Guide

1. Clone the repository

You can download the project source files directly or clone the repository via Git:

git clone [https://github.com/DungTLab/DzungTLab_Portfolio.git](https://github.com/DungTLab/DzungTLab_Portfolio.git)


2. Run locally

The quick way: Simply double-click the index.html file in your file explorer to launch it instantly in any web browser.

The professional way: We highly recommend utilizing the Live Server extension in Visual Studio Code. This sets up a local node with hot-reloading, so your changes update in real-time as you code.

🔧 Customization & Configuration

Updating Text Content: Modify the textual descriptions within index.html under the relevant tag blocks (such as <h1>, <p>, and <h3> tags).

Customizing Typewriter Phrases: Open script.js and edit the array named phrases inside the typewriter configuration block:

const phrases = ["Software Engineer", "Problem Solver", "Tech Enthusiast"];


Changing Your Profile Avatar: Place your new avatar image in the /assets/images/ directory under the name Avt.jpg, or simply update the path in the <img> tag under the #about section in index.html.

📬 Contact & Connect

Email: Dungletiense@gmail.com

LinkedIn: Dũng Lê

GitHub: @DungTLab

Created with ☕, Passion and Bootstrap 5.

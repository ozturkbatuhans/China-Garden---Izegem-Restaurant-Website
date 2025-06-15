# China-Garden---Izegem-Restaurant-Website


A **simple educational project** for building a static restaurant website using Node.js and Handlebars. This project was developed as a **group assignment** by students learning backend and templating basics.

---

##  Overview

**China Garden** is a fictional restaurant website built to present restaurant info, menu details, contact form, and location via a simple Node.js application. The project focuses on routing, layout templating, and static content rendering using Express and Handlebars.

---

##  Purpose

This was one of our **first Node.js projects**, created as a team assignment. The goal was not perfection in design but to learn:

- Routing with Express.js
- Using Handlebars templates and layouts
- Organizing views and partials
- Simulating form handling
- Reusing content dynamically without a database

---

##  Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- HTML & CSS (basic styling only)
- Body-parser (form handling)

---


##  Pages and Features

| Page         | Path        | Description                                                 |
|--------------|-------------|-------------------------------------------------------------|
| Home         | `/`         | Banner, CTA, quick links to menu/location/reservation      |
| Menu         | `/menu`     | Displays all menu items using dynamic arrays               |
| About        | `/about`    | Info about the restaurant and its values                   |
| Location     | `/location` | Google Maps embedded iframe                                |
| Contact      | `/contact`  | A simple contact/reservation form                          |
| Form Sent    | `/contact/form-sent` | Confirmation after submitting the form        |
| 404 / 500    | -           | Custom error pages for improved user experience            |

---

##  Out of Scope

This project is static and **does not include**:
- No database or dynamic admin dashboard
- No form processing backend (email or storage)
- No design system or responsive CSS framework

---

##  Team Members

- Sybren  
- Batuhan  
- Ke  
- Pavel  
- Aleksandra  

---

##  How to Run

```bash
# Clone the project
git clone <your-repo-url>

# Install dependencies
npm install

# Start the server
node app.js

# Visit in browser
http://localhost:3000



# DevOps Engineer Internship Week 1 Assignment

This repository contains a responsive one-page portfolio website, along with the GitHub, Vercel, DNS, environment variable, and DevOps research work required for the Week 1 assignment.

## Project Overview

The portfolio is a simple static website built with HTML, CSS, and JavaScript. It includes:
- a responsive layout
- a light/dark mode toggle
- a typewriter-style hero section
- project and contact sections
- a CV button that opens the resume PDF in a new tab

## Live Project

- GitHub Repository: https://github.com/omar2004khaled/Portfolio
- Vercel Live URL: https://portfolio-chi-orcin-82.vercel.app/

## Task 1 – Portfolio Website

The portfolio was built locally and tested by opening the page in a browser. It runs without build tools or package installation.

## Task 2 – GitHub Repository and Branches

The project was pushed to GitHub and the following branches were created:
- main
- development
- production/staging

## Task 3 – Vercel Deployment

The project was deployed on Vercel successfully. The live URL is working and returns an HTTP 200 response.

## Task 4 – DNS Research

A custom domain was not purchased for this assignment, so the project was deployed using the free Vercel URL.

If a custom domain is owned later, the DNS records required by Vercel would typically be:
- A Record: host `@` → `76.76.21.21`
- CNAME Record: host `www` → `cname.vercel-dns.com`
- TXT Record: used for domain ownership verification, with the exact value provided by Vercel

Screenshots to include for submission:
1. Vercel project domain page
2. DNS settings page from the domain provider
3. Verified domain status in Vercel

## Task 5 – Environment Variables

A sample environment file was created as [.env.example](.env.example).

Why `.env` should never be committed:
- it may contain secret keys and private credentials
- it can expose sensitive information publicly
- it can create security risks if the repository is shared

The real `.env` file is ignored by [.gitignore](.gitignore).

## Task 6 – DevOps Research

### GitHub
GitHub is a platform for storing Git repositories online. It is used for version control, collaboration, and managing branches.

### Vercel
Vercel is a cloud platform for deploying web applications. It connects with GitHub and publishes projects automatically.

### DNS
DNS translates domain names into IP addresses so browsers can find websites.

### Domains
Domains are the website addresses users enter, such as `example.com`.

### .gitignore
`.gitignore` tells Git which files should not be uploaded to the repository. It is commonly used for local files, build folders, and environment files.

### Build Command
The build command is used to prepare a project for deployment. For this portfolio, no build step was needed because it is a static HTML/CSS/JS website.

### Install Command
The install command is used to install project dependencies. For this portfolio, no package installation was required.

### Environment Variables
Environment variables store configuration values such as API keys and secrets outside the source code.

## Task 7 – AI Learning Summary

Using ChatGPT/Cursor, I learned how to deploy an application on Ubuntu with Nginx and PM2.

The main steps include:
1. update the Ubuntu server
2. install Node.js and npm
3. install Nginx
4. install PM2
5. upload the app to the server
6. start the app with PM2
7. configure Nginx as a reverse proxy
8. verify the deployment in the browser

This learning experience helped me understand how to combine GitHub, deployment platforms, and server configuration in a practical DevOps workflow.

## How to Run Locally

Open [index.html](index.html) in a browser, or use a live server extension such as Live Server in VS Code.

## Notes

This assignment was completed as a self-learning DevOps project using Git, GitHub, Vercel, and AI-assisted development tools.

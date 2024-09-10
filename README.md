# NgxDesktop

![NgxDesktop Demo](src/assets/files/readme_video.gif)

## Purpose

I created this project with the intention of creating an atypical portfolio and to practice various Angular functionalities such as Custom Directives, Content Projection, Signals, etc.

Some of the main features are:

- OnPush Strategy for most of the components.
- Styles in host components.
- Tailwind and CSS for styling.
- Angular Material for UI components (dialogs)
- Angular Grid Layout for desktop grid: https://github.com/katoid/angular-grid-layout
- Tanstack for data fetching and cache.

## Installation

To get started with NgxDesktop, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/borjamrd/desktop-rocket.git
   ```

2. Navigate to the project directory:

   ```
   cd desktop-rocket
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   ng serve
   ```

5. Open your browser and visit `http://localhost:4200` to view the application.

## Main sections

### Folders, dialogs and system files.

- Draggable folders
- Draggable and resizable desktop widgets
- CRUD actions with folders
- Draggable and resizable dialog-modals

### Notion data API

This is perhaps my favorite section.

Currently, there isn't (to my knowledge) a library in Angular that can render Notion content as a CMS (with React, there's a library called react-notion-x: https://github.com/NotionX/react-notion-x)

👷‍♂️ If you'd like to create a library, contact me.

The original page from my personal Notion site is this:

https://borjamruizdana.notion.site/e9c95945794e462d92fe07e34d26b368?v=302c8ad947144ce8b36f2d48d9acce71

### Medium POSTS

Funny component that renders posts from demanded Medium profile

### Global search bar

- Global search of system files/folders

### Email

- Right now it's only visual 😥

## Next steps

- [x] Implement global search functionality
- [x] Enhance Notion API integration
- [x] Implement dark mode toggle
- [x] Develop email component
- [x] Improve folder and file management system
- [ ] Desktop widgets: notes, calendar...
- [ ] Allow send emails.
- [ ] More system-elements: calculator
- [ ] Multilanguage
- [ ] Optimize performance for large datasets
- [ ] Implement user authentication and authorization only for demo purposes
- [ ] Add unit tests

Please, give it a Github starm if you enjoyed it!🚀

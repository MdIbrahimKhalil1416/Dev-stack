# Dev Stack — Build Your Ideal Development Stack

> Explore, compare, and pick the tools that fit your next project.

**Live Site:** (add link here)

---

## About the Project

Dev Stack is a single-page React app that lets developers browse a curated list of frontend, backend, database, language, styling, and DevOps technologies. Each technology card shows its category, difficulty, rating, and a short description. You can add technologies to a personal "Your Stack" panel, remove them one by one, or clear the whole stack at once.

---

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![React-Toastify](https://img.shields.io/badge/React--Toastify-FF6B35?style=for-the-badge)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

- **React** — component-based UI
- **TypeScript** — type-safe components and data
- **Vite** — fast dev server and build tool
- **Tailwind CSS v4** — utility-first styling
- **DaisyUI** — dropdown menu and loading spinner
- **React-Toastify** — toast notifications
- **JSON** — local technology data

---

## Key Features

1. **Add to your stack** — add technologies to a personal stack with duplicate protection and toast alerts.
2. **Manage your stack** — remove single items or clear the whole stack at once.
3. **Responsive design** — a fully responsive layout with a single shared brand gradient theme.

---

## Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/MdIbrahimKhalil1416/Dev-stack.git

# 2. Go into the project folder
cd Dev-stack

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. For example, `return <h1>Dev Stack</h1>` in a component. React uses JSX because it makes the UI easy to read and write, and we can put JavaScript values inside it with curly braces, like `{technology.name}`. Vite converts JSX into normal JavaScript before the browser runs it.

### 2. What is the difference between props and state?

Props are values a parent component passes to a child, like arguments to a function. The child can only read them, not change them. For example, `TechnologyCard` gets one `technology` object as a prop. State is data that a component owns and can change over time. When state changes, React re-renders the component. For example, `stack` in `App` is state, because it changes when the user adds or removes a technology.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates a piece of state and gives back two things: the current value and a function to update it. I used it three times in `App.tsx`: `technologies` (the list loaded from the JSON file), `loading` (true until the data is loaded, so the spinner shows), and `stack` (the technologies the user selected).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component appears on the screen. With an empty dependency array `[]`, it runs only once. Loading the JSON file is a side effect that takes time, so it should not run during rendering. Inside `useEffect` I load `technologies.json` with a dynamic `import()`. When it finishes, I save the data with `setTechnologies` and set `loading` to `false`, so the spinner is replaced by the cards.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to know which item is which when the list changes. With a unique key, React can update, add, or remove only the correct item instead of redrawing everything or mixing items up. I used `key={tech.id}` for the cards and stack items, because each technology has a unique id that never changes, unlike the array index.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition. In `StackSidebar.tsx`, if the stack is empty I show "Your stack is empty.", otherwise I show the list of selected technologies: `isEmpty ? <empty message> : <list>`. I also show the "Remove All" button only when the stack is not empty with `{!isEmpty && <button>...}`, and the card button shows "✓ Added to Stack" when `isAdded` is true.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child with props. For example, `App` passes `stack` to `TechnologySection`, which passes it on to `StackSidebar`. A child cannot change the parent's state directly, so the parent also passes a function as a prop. The child calls that function to send something back. For example, `App` passes `handleAdd` as `onAdd`, and `TechnologyCard` calls `onAdd(technology)` when the button is clicked. Then `App` updates the `stack` state.

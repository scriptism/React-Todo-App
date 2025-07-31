# Modern Todo App  

![Todo App Preview](https://i.imgur.com/J5q6![facebooky](https://github.com/user-attachments/assets/a549e408-5b5b-4508-a073-e41968fe9bab)
W7A.png) *← Add your screenshot URL here*

A sleek, responsive todo application built with **React** and **Tailwind CSS**.

## Features  

✔️ Add, edit, and delete tasks  
✔️ Toggle task completion  
✔️ Persistent storage (localStorage)  
✔️ Smooth animations  
✔️ Mobile-friendly design  

## Tech  

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React_Icons-FF4154?logo=react" alt="React Icons">
</p>

## Usage  

1. Type tasks in the input field  
2. Click ✅ to mark complete  
3. Click ✏️ to edit or 🗑️ to delete  

```javascript
// Example component code
<TodoItem 
  task={task} 
  onToggle={toggleComplete} 
/>

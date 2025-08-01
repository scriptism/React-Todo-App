# Modern Todo App  
A sleek, responsive todo application built with **React** and **Tailwind CSS**.

## Features  

✔️ Add, edit, and delete tasks  
✔️ Toggle task completion  
✔️ Persistent storage (localStorage)  
✔️ Smooth animations  
✔️ Mobile-friendly design  
<img src="https://github.com/user-attachments/assets/b2d89f0f-6d04-4642-9c8c-fc5e970b9090" width="300" alt="Todo App Preview" style="float: right; margin-left: 10px;">
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

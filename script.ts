interface User {
    id: number;
    name: string;
    email: string;
  }
  
  async function fetchUsers(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = `${user.name} (${user.email})`;
      userList?.appendChild(userItem);
    });
  }
  
  window.addEventListener('load', fetchUsers);
  
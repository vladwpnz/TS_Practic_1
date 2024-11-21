// modules/dom.ts
import { User } from '../types/types';

export function renderUserList(users: User[]): void {
    const userList = document.getElementById('user-list');
    if (!userList) return;

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(userItem);
    });
}

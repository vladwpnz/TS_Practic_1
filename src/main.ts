// main.ts
import { fetchUsers } from './modules/api';
import { renderUserList } from './modules/dom';

window.addEventListener('load', async () => {
    const users = await fetchUsers();
    renderUserList(users);
});

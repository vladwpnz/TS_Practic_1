export function renderUserList(users) {
    const userList = document.getElementById('user-list');
    if (!userList)
        return;
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(userItem);
    });
}

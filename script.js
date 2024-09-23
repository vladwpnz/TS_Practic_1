"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        const users = yield response.json();
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = `${user.name} (${user.email})`;
            userList === null || userList === void 0 ? void 0 : userList.appendChild(userItem);
        });
    });
}
window.addEventListener('load', fetchUsers);

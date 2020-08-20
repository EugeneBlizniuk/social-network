import * as axious from 'axios';

const instance = axious.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "00662f5d-210d-45bf-921b-aaa41d417c74"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page${currentPage}&count${pageSize}`)
        .then (response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`);
    }
}
function loginWithPassword(username, password) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: "u1", username }), 500);
    });
}

function loadProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId, name: "Jane Doe", has_interests: true }), 500);
    });
}

function loadInterests(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["hiking", "coding", "chess"]), 500);
    });
}

function loadFriends(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Alice", "Bob"]), 500);
    });
}

const state = { loading: false };

function login(username, password) {
    state.loading = true;
    const result = {};

    return loginWithPassword(username, password)
        .then((user) => {
            result.user = user;
            return loadProfile(user.id);
        })
        .then((profile) => {
            result.profile = profile;
            return profile.has_interests ? loadInterests(result.user.id) : null;
        })
        .then((interests) => {
            result.interests = interests;
            return loadFriends(result.user.id);
        })
        .then((friends) => {
            result.friends = friends;
            return result;
        })
        .finally(() => {
            state.loading = false;
        });-
}

login("jane", "secret").then((result) => {
    console.log("Profile:", result.profile);
    console.log("Interests:", result.interests);
    console.log("Friends:", result.friends);
});

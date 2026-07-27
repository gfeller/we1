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
    let userRef;
    let profileRef;
    let interestsRef;

    return loginWithPassword(username, password)
        .then((user) => {
            userRef = user;
            return loadProfile(user.id);
        })
        .then((profile) => {
            profileRef = profile;
            return profile.has_interests ? loadInterests(userRef.id) : null;
        })
        .then((interests) => {
            interestsRef = interests;
            return loadFriends(userRef.id);
        })
        .then((friends) => {
            return { profile: profileRef, interests: interestsRef, friends };
        })
        .finally(() => {
            state.loading = false;
        });
}

login("jane", "secret").then((result) => {
    console.log("Profile:", result.profile);
    console.log("Interests:", result.interests);
    console.log("Friends:", result.friends);
});

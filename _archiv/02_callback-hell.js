function loginWithPassword(username, password, cb) {
    setTimeout(() => cb({ id: "u1", username }), 500);
}

function loadProfile(userId, cb) {
    setTimeout(() => cb({ userId, name: "Jane Doe", has_interests: true }), 500);
}

function loadInterests(userId, cb) {
    setTimeout(() => cb(["hiking", "coding", "chess"]), 500);
}

function loadFriends(userId, cb) {
    setTimeout(() => cb(["Alice", "Bob"]), 500);
}

const state = { loading: false };

function login(username, password, cb) {
    state.loading = true;

    loginWithPassword(username, password, (user) => {
        loadProfile(user.id, (profile) => {
            if (profile.has_interests) {
                loadInterests(user.id, (interests) => {
                    loadFriends(user.id, (friends) => {
                        cb({ profile, interests, friends });
                        state.loading = false;
                    });
                });
            } else {
                loadFriends(user.id, (friends) => {
                    cb({ profile, friends });
                    state.loading = false;
                });
            }
        });
    });
}


login("jane", "secret", (result) => {
    console.log("Profile:", result.profile);
    console.log("Interests:", result.interests);
    console.log("Friends:", result.friends);
});

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

async function login(username, password) {
    state.loading = true;

    try {
        const user = await loginWithPassword(username, password);
        const profile = await loadProfile(user.id);
        const interests = profile.has_interests ? await loadInterests(user.id) : null;
        const friends = await loadFriends(user.id);

        return { profile, interests, friends };
    } finally {
        state.loading = false;
    }
}

login("jane", "secret").then((result) => {
    console.log("Profile:", result.profile);
    console.log("Interests:", result.interests);
    console.log("Friends:", result.friends);
});

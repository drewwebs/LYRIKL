export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
);

const USERS = [ 
    "silver_snoopy",
    "tswift_number_one_fan",
    "kanye_west",
    "baby_yoda",
    "gizmo_the_bernedoodle"
];

export const loginDemo = () => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { 
            user: {
                name: USERS[Math.floor(Math.random() * USERS.length)],
                password: "hunter12"
            }
        }
    })
);
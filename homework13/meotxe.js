let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (i = 0; i < users.length; i++){
    if (users[i].status == true) {
        console.log(users[i]);
    }
}
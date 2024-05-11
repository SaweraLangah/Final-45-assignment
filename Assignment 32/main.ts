//Assignment # 32

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["user1", "user6", "admin", "user9"];

new_users.forEach((newUsers) => {
  if (
    current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUsers.toLowerCase()
    )
  ) {
    console.log(`${newUsers} will need to enter a new username.`);

  } else {
    console.log(`${newUsers} is available.`);
  }
});


const users = ['Daisy', 'Donald', 'Beatrix', 'Fifi', 'Belinda'];
/* other way
const finalCheck = users.find(function(username) {
  return username.substring(0, 2) === 'Be';
});
console.log(finalCheck);*/

const finalCheck = users.find(function(usernames) {
  return username[0] === 'B' && username[1] === 'e';
});
/* other way
const finalCheck = users.find(function(username) {
    return username.startsWith('Be')
})
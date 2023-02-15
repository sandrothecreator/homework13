let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if (user.age < 18 && user.studentstatus == 'active') {
    console.log('Hello');
}
else if (user.name == 'levani'){
    console.log('Hello Levani')
}
else if(user.studentstatus == 'active' || user.age < 25){
    console.log('Hello world')
}
else{
    console.log('ERROR')
}
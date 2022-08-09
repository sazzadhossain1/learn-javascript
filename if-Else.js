const age = 15;

if (age >= 18) {
  console.log("sarah can start driving license");
} else {
  const yearLeft = 18 - age; // ---> ai khane age take dynamic vabe access korar jonno alada akta variable niye nilam.And age ke (-) korlam 18 er shathe.....
  console.log(`Sara is to young.Wait another ${yearLeft} years`);
}

const name = "Sarah";
if (age >= 18) {
  console.log(`${name} is get driving license`);
} else {
  const waitYears = 18 - age;
  console.log(`${name} is to young.Wait another ${waitYears} years`);
}

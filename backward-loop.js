//Here we gonna learn how to loop backwards in array. It means that we keep on printing the elements of the array starting from the last one to the first one.

const Shishiranjan = ['Shishi', 'Thakur', 2021-1997, 'Software developer', ['Randhir', 'Suraj', 'Abishec'], true];

for(let i = Shishiranjan.length; i >= 0; i--)
    {
        console.log(i, Shishiranjan[i]);
    }

// We can also be able to insert a loop inside the loop. The example of doing so is given below.

for(let exercise = 1; exercise < 4; exercise++)
    {
        console.log(`----------STARTING EXERCISE------- ${exercise}`);
    }

for(let rep= 1; rep< 6; rep++)
    {
        console.log(`----------LIFTING WEIGHT REPITITION--------- ${rep}`);
    }
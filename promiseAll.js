//async function always returns a promise

console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket');


//using promise.all()
const preMovie = async ()=> {
    const promiseWifeBringingTicks =new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    })
    const getPopCorn = new Promise ((resolve, reject)=> resolve(`popcorn`))
    
    const addButter = new Promise ((resolve, reject)=> resolve(`Butter`))

    const getColdDrinks = new Promise((resolve, reject)=> resolve(`coke`))

    let ticket = await promiseWifeBringingTicks;
    
    let [popcorn, candy, coke] = await Promise.all([getPopCorn,addButter,getColdDrinks]);
    console.log(`${popcorn}, ${candy}, ${coke}`)
    return ticket;
};

preMovie().then((m)=> console.log(`person 3: shows ${m}`))


console.log('Person 4: shows ticket');
console.log('Person 5: shows ticket');




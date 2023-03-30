//async function always returns a promise

console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket');



const preMovie = async ()=> {
    const promiseWifeBringingTicks =new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    })
    const getPopCorn = new Promise ((resolve, reject)=> resolve(`popcorn`))
    
    const addButter = new Promise ((resolve, reject)=> resolve(`Butter`))

    const getColdDrinks = new Promise((resolve, reject)=> resolve(`coke`))

    let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log('Husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopCorn;

    console.log(`Husband: i got some ${popcorn}`);
    console.log('Husband: we should go in');
    console.log('wife: i need butter in my popcorn');

    let butter = await addButter
    
    console.log(`Husband: i got some ${butter} on popcorn`);
    

    let coldDrinks = await getColdDrinks;
    console.log(`Husband: i got  ${coldDrinks}`);
    console.log('Husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('Husband: thankyou for the reminder *grins*');
   
    return ticket;
};


preMovie().then((m)=> console.log(`person 3: shows ${m}`))


console.log('Person 4: shows ticket');
console.log('Person 5: shows ticket');

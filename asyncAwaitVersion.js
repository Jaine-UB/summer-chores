function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(name);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const notTired = Math.random() > 0.5;
            if (notTired){
                console.leg(`${name} finished using the weedeater.`);
                resolve(name);
            }
            else {
                reject(`${name} fell asleep after mowing the yard.`);
                }
        }, 1500);
    });
}

function trimHedges (name) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const notTired = Math.random() > 0.6;
            if (notTired){
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
            }
            else {
                reject(`${name} fell asleep after weedeating the yard.`)
            }
        }, 1000);
    });
}


function collectWood(name) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
            const notTired = Math.random() > 0.7;
            if (notTired){
                console.log(`${name} finished collecting the wood.`);
                resolve(name);
                }
            else {
                reject(`${name} fell asleep after trimming the hedges.`)
                }
        }, 2500);
    });
}
        
function waterGarden(name) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const notTired = Math.random() > 0.8;
            if (notTired){
                console.log(`${name} finished watering the garden.`);
                resolve(`${name} finished all their chores!`);
                }
            else {
                reject(`${name} fell asleep after collecting the wood.`)
                }
        }, 500);
    });
}

async function doSummerChores(name){
        try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all summer chores!`);
        } 
         catch (error){
            console.log('Error occured!');
        }
}       

doSummerChores("Mike");
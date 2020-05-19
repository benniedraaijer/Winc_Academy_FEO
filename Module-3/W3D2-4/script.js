document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", add50Promises);
});

const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    while (i <= 50) {
        let id = i;
        allPromises.push({id});
        consumePromise(allPromises, id);
        i++;
    }
};

const consumePromise = (allPromises, id) => {
    getRandomSucceedingOrFailingPromise(id)
        .then(resolved => {
            console.log(`msg: ${resolved}`);
            allPromises[id].state = "resolved";
            showPromises(allPromises);
        })
        .catch(error => {
            console.log(`msg: ${error}`);
            allPromises[id].state = "errored";
            showPromises(allPromises);
        });
};

const getRandomSucceedingOrFailingPromise = id => {
    const randomMillisecond = Math.round(Math.random() * 5000);
    if (Math.random() >= 0.5) {
        return getSucceedingPromise(`Promise ${id} succeeded in ${randomMillisecond} ms.`, randomMillisecond);
    } else {
        return getFailingPromise(`Promise ${id} failed in ${randomMillisecond} ms.`, randomMillisecond);
    }
};

const showPromises = promises => {
    console.log("I get called every time a Promise rejects or resolves")
    document.querySelector(".promises").innerHTML = "";
    promises.map(createPromiseElement).forEach(element => document.querySelector(".promises").appendChild(element));
};

const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
};

const getSucceedingPromise = (message, ms) => {
    return new Promise((resolve, reject) => {setTimeout(() => { resolve(message)}, ms)});
};

const getFailingPromise = (message, ms) => {
    return new Promise((resolve, reject) => {setTimeout(() => {reject(message)}, ms)})
};
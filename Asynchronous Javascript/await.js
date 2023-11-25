function getData() {
    return Promise.resolve('Some data');
};

async function abc() {
    const data = await getData();
    console.log(data);
};
abc();
console.log("1");


async function x() {
    try {
        await Promise.reject("Rejected!!")
    } catch (e) {
        console.log(e)
    }
}
x();
function updateInventory(arr1, arr2) {
    const tempObj = {};
    let currentItem = null;
    const finalInventory = [];

    // Iterate on the current inventory
    for (let i = 0; i < arr1.length; i++) {
        currentItem = arr1[i];
        tempObj[currentItem[1]] = currentItem[0];
    }

    // Iterate on the new invetory
    for (let x = 0; x < arr2.length; x++) {
        currentItem = arr2[x];

        if (tempObj[currentItem[1]]) {
            tempObj[currentItem[1]] += currentItem[0];
            continue;
        }

        tempObj[currentItem[1]] = currentItem[0];
    }

    for (const item in tempObj) {
        finalInventory.push([tempObj[item], item]);
    }

    return finalInventory.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
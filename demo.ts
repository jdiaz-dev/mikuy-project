const nums = [{ value1: 1, value2: 2 }, 6, 7, 8, 9];

const result = nums.reduce((first: any) => {
    let { value1, ...rest } = first;
    return rest;
});
result;

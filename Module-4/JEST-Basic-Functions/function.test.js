const functions = require('./functions.js')

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.isNull()).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    const user = {
        firstName: "Brad",
        lastName: "Traversy"
    }
    expect(functions.createUser()).toMatchObject(user)
});

test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
});

test('There is no I in team', () => {
    expect('team').not.toContain('I')
});

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toEqual(expect.arrayContaining(['admin']))
});
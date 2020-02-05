export const enterWorld = entry => ({
    type: 'ENTER_WORLD', // type of action
    entry,               // payload
});

export const exitWorld = () => ({
    type: 'EXIT_WORLD',
});

const { getGreeting, timeOfDay } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});


test('time check', () => {
  expect(timeOfDay('1:54')).toBe("It is 1:54");
});

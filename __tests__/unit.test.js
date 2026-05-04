// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('invalid phone number 1', () => {
  expect(isPhoneNumber("12345")).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber("hello world")).toBe(false);
});




// isEmail
test('valid email 1', () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail("user123@yahoo.com")).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail("test@")).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail("hello.com")).toBe(false);
});




// isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword("password")).toBe(true);
});

test('strong password 2', () => {
  expect(isStrongPassword("abcdefg")).toBe(true);
});

test('weak password 1', () => {
  expect(isStrongPassword("123")).toBe(false);
});

test('weak password 2', () => {
  expect(isStrongPassword("a")).toBe(false);
});


// isDate
test('valid date 1', () => {
  expect(isDate("01/01/2024")).toBe(true);
});

test('valid date 2', () => {
  expect(isDate("31/12/1999")).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate("2024-01-01")).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate("not-a-date")).toBe(false);
});



// isHexColor
test('valid hex color 1', () => {
  expect(isHexColor("#ffffff")).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor("blue")).toBe(false);
});

test('invalid hex color 2', () => {
  expect(isHexColor("#123abz")).toBe(false);
});

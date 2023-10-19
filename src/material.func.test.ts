import material from './material.func'

test('Test Case 1', () => {
  const input = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]
  const expected = 83
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 2', () => {
  const input = [6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0]
  const expected = 50
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 3', () => {
  const input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
  const expected = 0
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 4', () => {
  const input = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 11]
  const expected = 45
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 5', () => {
  const input = [6, 7, 8, 9, 4, 5, 2, 3, 1, 0]
  const expected = 2
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 6', () => {
  const input = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 11, 12, 13]
  const expected = 45
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 7', () => {
  const input = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10, 11, 12]
  const expected = 36
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 8', () => {
  const input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
  const expected = 0
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 9', () => {
  const input = [135, 130, 145, 150, 115, 110, 115, 110, 95, 106, 105, 5, 103, 110, 65, 66, 70, 50, 45, 40, 35, 100, 25, 20, 15, 16]
  const expected = 476
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 10', () => {
  const input = [7, 5, 19, 10, 11, 13, 20, 55, 55, 50, 50, 100, 50, 85, 91, 97, 103, 109]
  const expected = 112
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 11', () => {
  const input = [12, 7, 32, 18, 5, 9, 25, 14, 8, 21, 11, 28, 17, 6, 23, 15, 10, 30, 19, 4, 13, 22, 16, 27, 20]
  const expected = 276
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 12', () => {
  const input = [8, 43, 12, 67, 31, 15, 72, 25, 4, 38, 19, 91, 10, 53, 29, 64, 7, 48, 21, 81, 35, 16, 61, 9, 46, 23, 78, 40, 13, 57, 32, 89, 6, 49, 27, 73, 37, 18, 63, 20, 75, 42, 11, 68, 30, 86, 5, 50, 26, 69, 34, 14, 62, 24, 79, 45, 17, 80, 39, 87, 2, 55, 33, 74, 36, 3, 60, 22, 76, 41, 1, 58, 28, 82, 47, 92, 51, 96, 7, 90, 44, 77, 52, 28, 83, 54, 99, 56, 23, 70, 19, 84, 59, 8, 65, 14, 71, 4, 66, 25]
  const expected = 4130
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 13', () => {
  const input = [39, 12, 78, 21, 56, 8, 43, 67, 29, 64, 15, 91, 7, 32, 54, 9, 28, 81, 35, 10, 47, 61, 26, 49, 17, 83, 40, 13, 72, 36, 89, 5, 60, 23, 68, 31, 84, 19, 74, 45, 16, 53, 37, 18, 76, 2, 58, 22, 66, 30, 79, 51, 25, 80, 42, 14, 67, 34, 99, 57, 3, 46, 11, 86, 41, 1, 55, 27, 71, 4, 62, 20, 75, 44, 88, 6, 63, 24, 70, 50, 65, 38, 82, 52, 96, 69, 33, 77, 93, 59, 90, 95, 98, 73, 85, 94, 97, 92, 87, 100]
  const expected = 4147
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 14', () => {
  const input = [1, 2, 5, 3, 2, 5, 4, 6, 7, 5, 6]
  const expected = 7
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

test('Test Case 15', () => {
  const input = [4, 3, 5, 2, 3, 5, 7, 1, 3, 5, 6, 7, 8, 3, 4, 5, 1, 2, 4, 7]
  const expected = 42
  const result = material(input)
    .map(({ amount }) => amount)
    .reduce((acc, elem) => acc + elem, 0)
  expect(result).toBe(expected)
})

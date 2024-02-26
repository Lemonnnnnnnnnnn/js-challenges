const Son = require('./reflect-extend')

test("reflect extends" , () => { 
  const son = new Son("liming", 20);

  expect(Son.getAge).toBe(undefined)
  expect(Son.getName).toBe(undefined)
  expect(son.getAge()).toBe(20)
  expect(son.getName()).toBe("liming")
})

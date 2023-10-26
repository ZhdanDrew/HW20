function sol(obj) {
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          Object.defineProperty(obj, key, {
              writable: false
          });
      }
  }
}

const obj = {
  name: "Igor",
  age: 24
};

sol(obj);


obj.name = "John"; 

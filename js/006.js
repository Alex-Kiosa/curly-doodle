function accesingNestedObj() {
  // Only change code below this line

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];

  return gloveBoxContents;

  // Only change code above this line
}

console.log(accesingNestedObj());
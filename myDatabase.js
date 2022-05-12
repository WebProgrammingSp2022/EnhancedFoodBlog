const Data = require('./Data');

let myDatabase = function() {
    this.data = [];
}

let dataIndex = 0;

myDatabase.prototype.displayData = function() {
    for (let i=0;i<this.data.length;i++) {
        console.log(this.data[i]);
    }
}

myDatabase.prototype.postData = function(_data) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && this.data[i].id == _data.id) {
      return false;
    }
  }
  this.data[dataIndex++] =
  new Data(_data.id,_data.name,_data.ingredients,_data.instructions,_data.allergies,_data.diet,_data.filename2);
  return true;
}

myDatabase.prototype.getData = function(id) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && id == this.data[i].id)
    {
      return(new Data(this.data[i].id,this.data[i].name,this.data[i].ingredients,this.data[i].instructions,this.data[i].allergies,this.data[i].diet,this.data[i].filename2));
    }
  }
  return null;
}

/*
myDatabase.prototype.putData = function(_data) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && this.data[i].id == _data.id) {
      this.data[i] =
      new Data(_data.id,_data.name,_data.ingredients,_data.instructions,_data.allergies,_data.diet);
      return true;
    }
  }
  return false;
}
*/
/*
myDatabase.prototype.deleteData = function(id) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && id == this.data[i].id) {
        let tempPtr = this.data[i];
        this.data[i] = undefined;
        return tempPtr;
    }
  }
  return null;
}
*/
//this is a test
module.exports = myDatabase;

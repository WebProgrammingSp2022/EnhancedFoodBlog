
let Data = function(id,name,ingredients,instructions,allergies,diet,filename2) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.allergies = allergies;
    this.diet = diet;
    this.filename2 = filename2;

    console.log(allergies)
    console.log(diet)
}

module.exports = Data;

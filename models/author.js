const mongoose = require("mongoose");
const {DateTime} = require("luxon")

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

// Virtual for bookinstance formatted due back date
AuthorSchema.virtual("lifespan").get(function () {
  if (!this.date_of_birth) return ""
  else {
    const dob = DateTime.fromJSDate(this.date_of_birth).toFormat('dd LLL yyyy');
    const dod = this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toFormat('dd LLL yyyy') : "";
    return `${dob} - ${dod}`
  }
});

// Virtual for author date of birth format to 'YYYY-MM-DD'
AuthorSchema.virtual("dob").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); 
});

// Virtual for author date of death format to 'YYYY-MM-DD'
AuthorSchema.virtual("dod").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate(); 
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);

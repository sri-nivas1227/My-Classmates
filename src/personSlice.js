import { createSlice } from "@reduxjs/toolkit";

/*

Data structure for a person object
The slug itself is a unique identifier for the person
{
    id: "john-doe",
    name: "John Doe",
    favoriteColor: "blue",
    favoriteFood: "pizza",
    likes: 0,
}

*/

export const personSlice = createSlice({
  name: "person",
  initialState: {
    people: [
      {
        id: "delete-me",
        name: "Example Person",
        favoriteColor: "Delete Me",
        favoriteFood: "-",
        likes: 0,
      },
    ],
  },
  reducers: {
    addPerson: (state, action) => {
      const personData = action.payload;
      const slug = createSlug(personData.name);
      personData.id = slug;
      personData.likes = 0;
      state.people.push(personData);
    },
    personLike: (state, action) => {
      const id = action.payload.id;
      const option = action.payload.option;
      let data = state.people;
      data = data.map((person) => {
        if (person.id === id) {
          if (option === "like") {
            person.likes += 1;
          } else {
            person.likes = person.likes > 0 ? person.likes - 1 : 0;
          }
        }
        return person;
      });
      state.people = data;
    },
    deletePerson: (state, action) => {
      let data = state.people;
      data = data.filter((person) => person.id !== action.payload.id);
      state.people = data;
      // return state.people.filter((person) => person.id !== action.payload);
    },
    editPerson: (state, action) => {
      console.log("here in slice");
      const personData = action.payload;
      const id = personData.id;

      console.log(personData, id);
      let data = state.people;
      data = data.map((person) => {
        if (person.id === id) {
          if (personData.name !== person.name) {
            person.id = createSlug(personData.name);
          }
          person.name = personData.name;
          person.favoriteColor = personData.favoriteColor;
          person.favoriteFood = personData.favoriteFood;
        }
        return person;
      });
      console.log(data);
      state.people = data;
    },
  },
});

const createSlug = (name) => {
  // trim the name and replace multiple spaces with a single space and then replace the space with a hyphen
  return name.toLowerCase().trim().replace(/\s+/g, "-");
};

// const { actions, reducer } = personSlice;
export const { addPerson, personLike, deletePerson, editPerson } =
  personSlice.actions;

export const people = (state) => state.person.people;
export default personSlice.reducer;

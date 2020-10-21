const mentors = [
  {
    name: "Abed Sujan",
    subjects: ["JS", "HTML", "CSS", "NODEJS"],
    yearOfExperience: 4,
  },
  {
    name: "Ahmed Magdy",
    subjects: ["JS", "Database", "CSS"],
    yearOfExperience: 1,
  },
  {
    name: "Alicia Gonzales",
    subjects: ["DB", "HTML", "NODEJS"],
    yearOfExperience: 8,
  },
  {
    name: "allan Thraen",
    subjects: ["REACT", "HTML", "CSS"],
    yearOfExperience: 3,
  },
  {
    name: "Anders Ravn",
    subjects: ["JS", "HTML", "NODEJS"],
    yearOfExperience: 2,
  },
  {
    name: "Daniel Fernandes",
    subjects: ["Database", "HTML", "CSS"],
    yearOfExperience: 9,
  },
];
// print name of mentors
console.log(mentors);
mentors.forEach((mentor) => {
  console.log(mentor.name);
});

//print first 3 mentor's name
for (let i = 0; i < 3; i++) {
  let mentor = mentors[i].name;
  console.log(mentor);
}
//print the subjects
mentors.forEach((subject) => {
  console.log(subject.subjects);
});

//print mentor_name and subject
mentors.forEach((mentor) => {
  console.log(mentor.name);
  mentor.subjects.forEach((subject) => {
    console.log(subject);
  });
});
// map function
const mentorName = mentors.map((mentor) => {
  console.log(
    `Name ${mentor.name} and ${mentor.yearOfExperience} of experience`
  );
});
// Filter function
const experiencedMentor = mentors.filter((mentor) => {
  if (mentor.yearOfExperience > 7) {
    //console.log(mentor.name);
    return true;
  } else {
    return false;
  }
});
console.log(experiencedMentor);

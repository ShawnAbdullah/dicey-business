let firstName = "Shawn";
let lastName = "Abdullah";

let fullName = [firstName.toUpperCase() + " " + lastName.toUpperCase()];

console.log("Name: " + fullName);

const occupation = "Field: Full Stack Web Developer";
const description =
  "Description: I kick ass and write code - and I'm all out of code";

console.log(occupation);
console.log(description);

let experience = "Previous Experience:";
console.log(experience);

function displayPosition(company, job, description) {
  console.log("Company: " && company);
  console.log("Job: " && job);
  console.log("Description: " && description);
}
displayPosition("Innovate Birmingham", "Student", "Full Stack Development");
displayPosition(
  "BJ Food Mart",
  "Associate Manager, Marketing and Tech Support",
  "Establish business social media presence, reach out to clients about services provided, establish and maintain a scan data system, and provide technical assistance as necessary"
);
displayPosition(
  "StudyTact LLC",
  "Content Writer",
  "Writing innovative blogs and articles and facilitating content review with tutors."
);

function displaySkill(isCool, skill) {
  if (isCool == true) {
    console.log("BAM " + skill);
  } else if (isCool == false) {
    console.log(skill);
  }
}
displaySkill(true, "Fluent in HTML, CSS, and JavaScript");
displaySkill(true, "Commitment to community outreach");
displaySkill(true, "Fluent in four languages - English, Spanish, Hindi, Gujrati");
displaySkill( "", "Team player with ability to effectively establish rapport and positive work relationships");

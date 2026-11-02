// Q2. Multi-Type Data Summary
// Shows a value of each data type and detects its type.

// typeof says "object" for arrays and null, so we handle those two cases first.
function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  const userName = $("userName").value.trim();                 // string
  const userAge = Number($("userAge").value);                  // number
  const isStudent = $("isStudent").checked;                    // boolean
  const subjects = $("subjects").value.split(",")
    .map((s) => s.trim()).filter(Boolean);                     // array
  const student = { id: 101, course: $("course").value.trim() }; // object
  const middleName = null;                                     // null
  let phoneNumber;                                             // undefined

  // One report row per variable: label + value + type
  const report = [
    { Label: "userName", Value: userName, Type: getType(userName) },
    { Label: "userAge", Value: userAge, Type: getType(userAge) },
    { Label: "isStudent", Value: isStudent, Type: getType(isStudent) },
    { Label: "subjects", Value: subjects.join(", "), Type: getType(subjects) },
    { Label: "student", Value: JSON.stringify(student), Type: getType(student) },
    { Label: "middleName", Value: middleName, Type: getType(middleName) },
    { Label: "phoneNumber", Value: phoneNumber, Type: getType(phoneNumber) }
  ];

  // The single console.table() statement (also drawn on the page)
  Output.table(report);
});

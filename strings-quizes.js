//Write a JavaScript function to check whether an `input` is a string or not

const is_string = (str) => {
  return typeof str === "string" ? true : false;
};

// Write a JavaScript function to check whether a string is blank or not

const is_Blank = (str) => !!str;

//Write a JavaScript function to split a string and convert it into an array of words

const string_to_array = (str) => str.trim().split(" ");

//Write a JavaScript function to extract a specified number of characters from a string

const truncate_string = (str, t) => str.slice(0, t);

//Write a JavaScript function to convert a string in abbreviated form

const abbrev_name = (str) => {
  let abbreviated = str.trim().split(" ");

  return `${abbreviated[0].charAt(0)}${abbreviated[1].charAt(0)}`;
};

// Write a JavaScript function to hide email addresses to protect from unauthorized user

const protect_email = (user_email) => {
  let avg, splitted, part1, part2, dots;

  dots = "...@";

  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;

  part1 = part1.substring(0, part1.length - avg);

  part2 = splitted[1];

  return part1 + dots + part2;
};

// return half of the string

const half_string = (str) => {
  let halfString = str.length / 2;

  let halfed = str.substring(0, (str.length = halfString));

  return halfed;
};

const string_parameterize = (str) => {
  return str.trim().toLowerCase().replace(/\s/g, "-");
};

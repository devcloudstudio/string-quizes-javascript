//Write a JavaScript function to check whether an `input` is a string or not.

const is_string = (str) => (typeof str === "string" ? true : false);

//Write a JavaScript function to check whether a string is blank or not
const is_blank = (str) => !!str;

//Write a JavaScript function to split a string and convert it into an array of words
const string_to_array = (str) => str.trim().split(" ");

// Write a JavaScript function to extract a specified number of characters from a string

const truncate_string = (str, t) => str.slice(0, t);

//Write a JavaScript function to convert a string in abbreviated form

const abbrev_name = (str) => {
  let splitted = str.trim().split(" ");
  return `${splitted[0]} ${splitted[1].charAt(0)}`;
};

//Write a JavaScript function to hide email addresses to protect from unauthorized use

const protect_email = (user_email) => {
  let avg, splitted, part1, part2, dots;
  dots = "...@";
  splitted = user_email.split("@");
  part1 = splitted[0];
  part2 = splitted[1];

  avg = part1.length / 2;

  part1 = part1.substring(0, avg);

  return `${part1}${dots}${part2}`;
};

//Write a JavaScript function to parameterize a string

const string_parameterize = (str) => {
  return str.toLowerCase().replace(/\s/g, "-");
};

//Write a JavaScript function to capitalize the first letter of a string

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//Write a JavaScript function to capitalize the first letter of each word in a string

const capitalize_words = (str) => {
  let splitted = str.trim().split(" ");

  return splitted
    .map((char) => {
      return char.charAt(0).toUpperCase() + char.slice(1);
    })
    .join(" ");
};
//Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case

const swapcase = (str) => {
  let splitted = str.trim().split("");

  return splitted
    .map((char) => {
      if (char == char.toUpperCase()) {
        return char.toLowerCase();
      }
      if (char == char.toLowerCase()) {
        return char.toUpperCase();
      }
    })
    .join("");
};

//Write a JavaScript function to convert a string into camel case
const camelize = (str) => {
  return str.replace(/\W+(.)/g, function (match, char) {
    return char.toUpperCase();
  });
};

//Write a JavaScript function to concatenates a given string n times (default is 1

const repeat_string = (str, n) => str.repeat(n);

//Write a JavaScript function to insert a string within a string at a particular position

const insert = (main_str, insert_str, pos) => {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof insert_str === "undefined") {
    insert_str = "";
  }
  return main_str.slice(0, pos) + insert_str + main_str.slice(pos);
};

//Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th

const humanize_format = (n) => {
  if (typeof n === "undefined") return;

  if (n % 100 >= 11 && n % 100 <= 13) {
    return n + "th";

    switch (n % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  }
  return n + "th";
};
//Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters

const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }

  if (ending == null) {
    ending = "...";
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

//Write a JavaScript function to chop a string into chunks of a given length

const string_chop = function (str, size) {
  if (str == null) return [];
  str = String(str);
  size = ~~size;
  return size > 0 ? str.match(new RegExp(".{1," + size + "}", "g")) : [str];
};
//Write a JavaScript function to count the occurrence of a substring in a string

const count = (str, word) => {
  return str.split(word).length - 1;
};

//Write a JavaScript function to escape a HTML string
const escape_html = (html_str) => {
  return html_str.replace(/[&<>"]/g, function (tag) {
    var chars_to_replace = {
      "&": "&",
      "<": "<",
      ">": ">",
      '"': '"',
    };

    return chars_to_replace[tag] || tag;
  });
};

//Write a JavaScript function to strip leading and trailing spaces from a string

const strip = (str) => str.trim();
//Write a JavaScript function to truncate a string to a certain number of words

const truncate = (str, n) => {
  return str.split(" ").splice(0, n).join(" ");
};

//Write a JavaScript function to alphabetize a given string

const alphabetize_string = (str) => {
  return str.split("").sort().join("");
};
//Write a JavaScript function to remove the first occurrence of a given 'search string' from a string

const remove_first_occurence = (str, search_char) => {
  let index = str.indexOf(search_char);

  if (index === -1) return str;

  return str.slice(0, index) + str.slice(index + search_char.length);
};

//Write a JavaScript function to convert ASCII to Hexadecimal format

const ascii_to_hexa = (str) => {
  let arr1 = [];

  for (let i = 0, l = str.length; i < l; i++) {
    let hex = Number(str.charCodeAt(i)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
};
//Write a JavaScript function to find a word within a string.

const searchWord = (text, word) => {
  let count = 0;
  text.split(" ").map((t) => {
    if (t === word) {
      count++;
    }
  });

  return `${word} was found ${count} times`;
};

console.log(searchWord("The quick brown fox and then fox", "fox"));

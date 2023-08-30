// Exercício 200
function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

// Testes
console.log(isValidEmail("example@email.com")); // true
console.log(isValidEmail("invalid.email@")); // false

// Exercício 201
function extractUrls(text) {
  const regex = /(https?:\/\/[^\s]+)/g;
  return text.match(regex) || [];
}

// Testes
console.log(
  extractUrls("Veja estes links https://www.example.com e http://test.com")
); // ["https://www.example.com", "http://test.com"]

// Exercício 202
function isValidDate(date) {
  // Verificar formato da data
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!regex.test(date)) {
    return false;
  }

  // Verificar datas não existentes
  const [day, month, year] = date.split("/").map(Number);
  const testDate = new Date(year, month - 1, day);
  return testDate.getDate() === day && testDate.getMonth() + 1 === month;
}

// Testes
console.log(isValidDate("25/12/2020")); // true
console.log(isValidDate("31/02/2020")); // false

// Exercício 203
function replaceHtmlTags(text) {
  const regex = /<(\w+)>(.*?)<\/\1>/g;
  return text.replace(regex, "[$1]$2[/$1]");
}

// Testes
console.log(replaceHtmlTags("<div>Hello</div>")); // [div]Hello[/div]

// Exercício 204
function extractPhoneNumbers(text) {
  const regex = /\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}/g;
  return text.match(regex) || [];
}

// Testes
console.log(extractPhoneNumbers("Contact at (12) 34567-8901 or 12-3456-7890.")); // ["(12) 34567-8901", "12-3456-7890"]

// Exercício 205
function isValidPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return regex.test(password);
}

// Testes
console.log(isValidPassword("StrongPass1!")); // true
console.log(isValidPassword("weakpass")); // false

// Exercício 206
function removeHtmlComments(text) {
  const regex = /<!--[\s\S]*?-->/g;
  return text.replace(regex, "");
}

// Testes
console.log(removeHtmlComments("Hello <!-- This is a comment --> World")); // "Hello  World"

// Exercício 207
function validateCEP(cep) {
  const cepRegex = /^\d{5}-?\d{3}$/;
  return cepRegex.test(cep);
}

// Testes:
console.log(validateCEP("12345-678")); // true
console.log(validateCEP("12345678")); // true
console.log(validateCEP("1234")); // false

// Exercício 208
function extractTagsAndContent(html) {
  const regex = /<(\w+)>([^<]+)<\/\1>/g;
  let match;
  const result = {};

  while ((match = regex.exec(html)) !== null) {
    result[match[1]] = match[2];
  }
  return result;
}

// Testes
console.log(extractTagsAndContent("<div>Hello</div><p>World</p>"));
// {
//  div: "Hello",
//  p: "World"
// }

// Exercício 209
function hasConsecutiveRepeats(text) {
  const regex = /\b(\w+)\b\s+\b\1\b/i;
  return regex.test(text);
}

// Testes
console.log(hasConsecutiveRepeats("Hello hello world")); // true
console.log(hasConsecutiveRepeats("Hello world")); // false

// Exercício 210
function extractDomain(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
  const match = url.match(regex);
  return match ? match[1] : "";
}

// Testes
console.log(extractDomain("https://www.example.com/page")); // "example.com"

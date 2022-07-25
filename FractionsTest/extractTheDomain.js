/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url) {
  let substring = url;

  if (url.includes('://')) {
    substring = url.substring(url.indexOf('://') + 3);
  }
  if (url.includes('www.')) {
    substring = url.substring(url.indexOf('www.') + 4);
  }
  if (substring.includes('.')) {
    substring = substring.split('.')[0];
  }
  return substring;
}

// Refactored

function domainName(url) {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
}

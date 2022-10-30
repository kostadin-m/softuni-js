function extract(content) {
  let contentElement = document.querySelector("#content");
  pattern = /\(([^(]+)\)/g;
  let matches = contentElement.textContent.matchAll(pattern);
  result = [];
  for (const match of matches) {
    result.push(match[1]);
  }
  return result.join("; ");
}

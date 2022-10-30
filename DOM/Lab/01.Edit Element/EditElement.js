function editDOM(ref, match, replace) {
  while (ref.textContent.includes(match)) {
    ref.textContent = ref.textContent.replace(match, replace);
  }
}

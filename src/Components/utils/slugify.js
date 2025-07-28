export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-")     // spaces to dashes
    .trim();
}

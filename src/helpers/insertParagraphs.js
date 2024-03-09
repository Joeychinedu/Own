export default function insertParagraphs(content) {
  // Split the content into paragraphs based on newline characters ("\n")
  const paragraphs = content.split("\n");

  // Create a new array to hold the paragraphs with <p> tags
  const paragraphsWithTags = paragraphs.map(
    (paragraph) => `<p>${paragraph}</p><br>`
  );

  // Join the paragraphs with <p> tags back into a single string
  return paragraphsWithTags.join("");
}

// 1. Count words in paragraphs
function countWordsInParagraphs(children) {
  return children.reduce((count, child) => {
    if (child.tagName.toLowerCase() === "p") {
      count += child.innerText.split(/\s+/).length;
    }
    return count;
  }, 0);
}

// 2. Truncate content
function truncateContent(box, children) {
  const MAX_WORDS = parseInt(box.dataset.wordLimit, 10) || 80; // default truncation is 80 words
  let totalWords = 0;
  const truncatedContent = [];

  for (const child of children) {
    if (totalWords >= MAX_WORDS) break;

    if (child.tagName.toLowerCase() === "p") {
      const words = child.innerText.split(/\s+/);
      if (totalWords + words.length > MAX_WORDS) {
        const wordsToKeep = words.slice(0, MAX_WORDS - totalWords);
        const newParagraph = document.createElement("p");
        newParagraph.innerText = wordsToKeep.join(" ") + "...";
        truncatedContent.push(newParagraph.outerHTML);
        break;
      } else {
        totalWords += words.length;
      }
    }
    truncatedContent.push(child.outerHTML);
  }

  box.dataset.collapsed = "true"; // Initialize as collapsed
  return truncatedContent.join("");
}

// 4. Create expand icon
function createExpandIcon(box) {
  if (!box.querySelector(".expand-icon")) {
    const expandDiv = document.createElement("div");
    expandDiv.classList.add("expand-icon");
    // Set the initial icon to the down-right arrow for a collapsed box
    expandDiv.innerHTML = '<i class="bi bi-box-arrow-down-right"></i>';
    box.appendChild(expandDiv);
    return expandDiv;
  }
  return null;
}

// 5 & 6. Clicking on the div - Setup interaction
function setupBoxInteraction(box, originalContent, truncatedContent) {
  const expandDiv = createExpandIcon(box);
  if (expandDiv) {
    expandDiv.addEventListener("click", () => {
      const isCollapsed = box.dataset.collapsed === "true";
      toggleContentDisplay(box, originalContent, truncatedContent);
      expandDiv.querySelector("i").className = isCollapsed // after collapsed flag is changed to reflect its current state, icon changes
        ? "bi bi-box-arrow-down-right"
        : "bi bi-box-arrow-up-left";
    });
  }
}

// 3. Toggle content display
function toggleContentDisplay(box, originalContent, truncatedContent) {
  const isCollapsed = box.dataset.collapsed === "true"; // boolean determining if collapsed = true
  box.querySelector(
    ".callout-box-body .field--name-field-callout-body"
  ).innerHTML = isCollapsed ? truncatedContent : originalContent; // displays content based on whether box is collapsed or not
  box.dataset.collapsed = isCollapsed ? "false" : "true"; // switches the collapsed flag to indicate its current state.
}

function initializeCalloutBoxes() {
  console.log("initializeCalloutBoxes triggered");

  const allCalloutBoxes = document.querySelectorAll(".callout-box");
  allCalloutBoxes.forEach((box) => {
    if (box.closest(".view-id-complete_guide")) {
      return; // Skip this box as it is within the specified div
    }

    const contentContainer = box.querySelector(
      ".callout-box-body .field--name-field-callout-body"
    );
    if (!contentContainer) return;

    const originalContent = contentContainer.innerHTML;
    const children = Array.from(contentContainer.children);

    // Get the total word count in the box
    const totalWordCount = countWordsInParagraphs(children);

    const wordLimit = box.dataset.wordLimit
      ? parseInt(box.dataset.wordLimit, 10)
      : 200;

    // If totalWordCount > wordLimit, then proceed to truncateContent, if <= wordLimit, do nothing
    if (totalWordCount > wordLimit) {
      const truncatedContent = truncateContent(box, children);

      // Display truncated content initially
      contentContainer.innerHTML = truncatedContent;

      setupBoxInteraction(box, originalContent, truncatedContent);
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeCalloutBoxes);

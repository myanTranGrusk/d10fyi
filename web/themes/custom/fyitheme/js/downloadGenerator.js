// initiates download from attached Google Drive documents

function generateDownloadLinks() {
  const downloadButtons = document.querySelectorAll(
    ".callout-download-resource .btn-download"
  );

  downloadButtons.forEach((button) => {
    const originalUrl = button.getAttribute("onclick").match(/'(.*?)'/)[1];
    let downloadUrl = originalUrl;

    if (originalUrl.includes("docs.google.com/document")) {
      downloadUrl = originalUrl.replace(
        "/edit?usp=sharing",
        "/export?format=pdf"
      );
    } else if (originalUrl.includes("docs.google.com/spreadsheets")) {
      downloadUrl = originalUrl.replace(
        "/edit?usp=sharing",
        "/export?format=xlsx"
      );
    }

    button.setAttribute("onclick", `window.open('${downloadUrl}', '_blank')`);
  });
}

document.addEventListener("DOMContentLoaded", generateDownloadLinks);

// function expandMenu() {
//   const subMenus = document.querySelectorAll("li.nav-item > ul");

//   // Initially hide submenus
//   subMenus.forEach((ele) => {
//     ele.style.display = "none";
//   });

//   const toggles = document.querySelectorAll(
//     "#block-fyitheme-guidenavigation .nav-item .dropdown-toggle"
//   );

//   // Click event to toggle mini-menu
//   toggles.forEach(function (toggle) {
//     toggle.addEventListener("click", function (event) {
//       var parentItem = this.closest(".nav-item");
//       if (parentItem) {
//         const subMenu = parentItem.querySelector("ul");

//         // Check if this nav-item is a descendant of an expanded styled-parent
//         const isDescendantOfExpandedParent =
//           parentItem.closest(".nav-item.expanded.styled-parent") !== null;

//         if (subMenu) {
//           const isSubMenuHidden = subMenu.style.display === "none";

//           // If the nav-item is a descendant of an expanded styled-parent and its submenu is hidden
//           if (isDescendantOfExpandedParent && isSubMenuHidden) {
//             // Navigate to the link instead of toggling the submenu
//             const link = parentItem.querySelector("a");
//             if (link && link.getAttribute("href")) {
//               window.location.href = link.getAttribute("href");
//             }
//           } else {
//             // Otherwise, toggle the submenu
//             event.preventDefault();
//             parentItem.classList.toggle("expanded");
//             subMenu.style.display =
//               subMenu.style.display === "block" ? "none" : "block";
//           }
//         } else {
//           // If no submenu, follow the link normally
//           const link = parentItem.querySelector("a");
//           if (link && link.getAttribute("href")) {
//             window.location.href = link.getAttribute("href");
//           }
//         }
//       }
//     });
//   });

//   // Highlight current page and expand menu
//   const currentPath = window.location.pathname;
//   const links = document.querySelectorAll("#block-fbloops-guidenavigation a");
//   links.forEach((link) => {
//     if (link.getAttribute("href") === currentPath) {
//       let parentItem = link.closest(".nav-item");
//       while (parentItem) {
//         parentItem.classList.add("expanded");
//         parentItem.classList.add("styled-parent");
//         const subMenu = parentItem.querySelector("ul");
//         if (subMenu) {
//           subMenu.style.display = "block"; // Ensure visible if part of the current path
//         }
//         parentItem = parentItem.parentElement.closest(".nav-item");
//       }
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", expandMenu);

// // v2.0

// function addBridgeClass() {
//   const navItems = document.querySelectorAll("li.nav-item");

//   navItems.forEach((item) => {
//     // Check if the nav-item has a child <ul>
//     const subMenu = item.querySelector("ul");

//     // Check if the nav-item itself is a child of another nav-item
//     const parentNavItem = item.closest("li.nav-item > ul");

//     if (subMenu && parentNavItem) {
//       item.classList.add("bridge");

//       // Add click event listener for bridge items
//       item.addEventListener("click", function (event) {
//         // Check if the submenu is hidden
//         if (subMenu.style.display === "none") {
//           // Prevent the default toggle behavior
//           event.preventDefault();

//           // Find the <a> element within the bridge item
//           const link = item.querySelector("a");

//           // Navigate to the href of the <a> element
//           if (link && link.getAttribute("href")) {
//             window.location.href = link.getAttribute("href");
//           }
//         }
//       });
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", addBridgeClass);

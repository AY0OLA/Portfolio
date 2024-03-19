const handleShowSidebar = () => {
  console.log("open");
  const navItem = document.querySelector(".navItem");
  navItem.classList.add("active");

  const body = document.querySelector("body");
  console.log("body");
  body.classList.add("unstrollbody");
};
const handleRemoveSidebar = () => {
  console.log("close");
  const navItem = document.querySelector(".navItem");
  navItem.classList.remove("active");

  const body = document.querySelector("body");
  body.classList.remove("unstrollbody");
};

const remove = () => {
  const navItem = document.querySelector(".navItem");
  navItem.classList.remove("active");

  const body = document.querySelector("body");
  body.classList.remove("unstrollbody");
};

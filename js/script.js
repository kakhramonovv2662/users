const USERS = data.splice(0, 160);

let page = 1;

let limit = 8;

let allWrapper = findElement(".js-list", document);

let formSelect = findElement(".js-form-select", document);
let formSortSelect = findElement(".js-sort-select", document);
let formFilterSelect = findElement(".js-filter-select", document);

let leftBtn = findElement(".js-left-btn", document);
let rightBtn = findElement(".js-right-btn", document);

let template = findElement(".js-template").content;

function createElement(user) {
  let templateClone = template.cloneNode(true);

  let userItem = findElement(".user-item", templateClone);
  let userImg = findElement(".user-img", templateClone);
  let userEmail = findElement(".user-email", templateClone);
  let userAbout = findElement(".user-about", templateClone);
  let userName = findElement(".user-name", templateClone);
  let userYears = findElement(".user-years", templateClone);
  let userData = findElement(".user-data", templateClone);
  let userTime = findElement(".user-time", templateClone);
  let userPriority = findElement(".js-priority", templateClone);

  userImg.src = user.ava;
  userEmail.textContent = user.address;
  userAbout.textContent = user.date_of_register;
  userName.textContent = user.name;
  userYears.textContent = user.phone;
  userData.textContent = user.date_of_onliine;
  userTime.textContent = user.time;
  userPriority.textContent = user.priority;

  if (user.priority === "normal") {
    userPriority.style.border = "#fff";
    userPriority.style.background = "#29CC97";
  } else if (user.priority === "low") {
    userPriority.style.border = "#fff";
    userPriority.style.background = "#FEC400";
  }

  allWrapper.append(templateClone);
}

function renderMovies(user) {
  user.slice(0, limit).forEach((user) => {
    createElement(user);
  });
}

renderMovies(USERS);

function handleSelects() {
  const userPriority = formFilterSelect.value;
  const userSortPriority = formSortSelect.value;


  let renderUsers = []

  if (userPriority !== 'filter') {
    renderUsers = USERS.filter((user) =>
    user.priority.includes(userPriority)
  ).sort(obj[formSortSelect.value])
  }else{
    renderUsers = USERS
  }
    pagination()
    
    allWrapper.innerHTML = null

  renderMovies(renderUsers)
}

formSelect.addEventListener("change", handleSelects);

function disabletLeftBtn() {
  if (page === 1) {
    leftBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
  }
}

function disabledRightBtn() {
  let lathPage = Math.ceil(USERS.length / limit);
  if (page === lathPage) {
    rightBtn.disabled = true;
  } else {
    rightBtn.disabled = false;
  }
}

function pagination() {
  USERS.slice((page - 1) * limit, page * limit).forEach((user) =>
    createElement(user)
  );
}

function handleRightBtn() {
  allWrapper.innerHTML = null;
  page = page + 1;

  pagination();
  disabletLeftBtn();
  disabledRightBtn();
}

function handleLeftBtn() {
  allWrapper.innerHTML = null;
  page = page - 1;

  pagination();
  disabletLeftBtn();
  disabledRightBtn();
}

disabletLeftBtn();
disabledRightBtn();

rightBtn.addEventListener("click", handleRightBtn);
leftBtn.addEventListener("click", handleLeftBtn);

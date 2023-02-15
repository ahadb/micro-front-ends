import faker from "faker";

// when running this app in isolation we know that dev-products is available
// when running through the container app there is no guarantee that the id
// will be available, CONTAINER app can be owned by another engineering team

const mount = (el) => {
  let myUserList = "";
  myUserList += `<div id="header">MFE App Two (Users)</div><br />`;

  const style = document.createElement('style');
  style.innerHTML = `
      #header {
        width:160px;
        font-weight:bold;
      }
    `;

  for (let i = 0; i < 10; i++) {
    const name = faker.name.firstName() + ', ' + faker.name.lastName();
    myUserList += `<div>${name}</div>`;
  }


  myUserList += `<br /><button>Find User</button>`;
  document.head.appendChild(style);
  // ReactDOM.render(<app>, el)
  el.innerHTML = myUserList;
};

// 1. we are using our app in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-appTwo");

  // container does not have id with dev-products
  if (el) {
    // we are likely running in isolation
    mount(el);
  }
}

//document.querySelector('#dev-products').innerHTML = products;

// 2. export this so our container can decide when to show this mfe
export { mount };





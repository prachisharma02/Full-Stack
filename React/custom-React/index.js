// craeting custom react code from scartch by basic javascript

const root = document.querySelector("#root");
const element = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  value: "click on the page",
};

function customrender(element, container) {
  const tag = document.createElement(element.type);
  tag.innerHTML = element.value;
  // if multiple attribute there will be an issue
  tag.setAttribute("href", element.props.href);
  tag.setAttribute("target", element.props.target);
  //so
  for (const prop in element.props) {
    if (prop == "children") continue;
    tag.setAttribute(prop,element.props[prop]);
  }
  container.appendChild(tag);
}
customrender(element, root);

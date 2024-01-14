// const heading = React.createElement("h1", {id: "heading", xyz:"abc"}, "Hellow world from React!")

// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// console.log(typeof(root))

const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", { id: "child1"},[
    React.createElement("h1", {}, "I am an h1 tag!"),
    React.createElement("h2", {}, "I am an h2 tag!"),
]),
    React.createElement("div", { id: "child2"},[
    React.createElement("h1", {}, "I am an h1 tag!"),
    React.createElement("h2", {}, "I am an h2 tag!"),
]),
]);
const root = ReactDOM.createRoot(document.getElementById("header"))
root.render(parent)
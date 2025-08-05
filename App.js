const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement(
        "div",
        {id: "child"}, [

        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
         React.createElement("h3", {}, "I am an h3 tag"),
          React.createElement("h4", {}, "I am an h4 tag"),
           React.createElement("h5", {}, "I am an h5 tag"),
            React.createElement("h6", {}, "I am an h6 tag"),
    ]
    )
);

//JSX 
// const heading =  React.createElement(
//     "h1",
//     {id: "heading" , xyz:"abc" } ,
//     "Hello World from React!");

    console.log(parent); // object

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(parent); 

console.log('are we here');
// const h1 = React.createElement("h1", {}, "Hello!")

// <div>
//   <h1>
//    content
//   </h1>
//   <p> hello </p>
// </div>

// <div class="ui inverted green menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="bug icon"></i>
//         <div class="content">
//           Bugger
//         </div>
//       </h2>
//     </a>
//   </div>

const navbar = (color, icon, title) => {
  return React.createElement('div', {className: `ui inverted ${color} menu`},
    // React.createElement()
  )
}

const article = (title, text) => {
  return React.createElement(
    "div",
    {className: "article"}, [
    React.createElement("h1", {}, title),
    React.createElement("p", {}, text)
  ])
}

ReactDOM.render(
  navbar(),
  document.getElementById('container')
)

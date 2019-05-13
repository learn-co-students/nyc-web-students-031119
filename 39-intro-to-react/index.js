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

const navbar = (props) => {
  return React.createElement('div', {className: `ui inverted ${props.color} menu`},
    React.createElement('a', {className: 'item'},
      React.createElement('h2', {className: 'ui header'}, [
        React.createElement('i', {className: `${props.icon} icon`}, null),
        React.createElement('div', {className: 'content'}, props.title),
      ])
    )
  )
}

// const article = (title, text) => {
//   return React.createElement(
//     "div",
//     {className: "article"}, [
//     React.createElement("h1", {}, title),
//     React.createElement("p", {}, text)
//   ])
// }

const Article = (props) => {
  // console.log('Article is called', title, text);
  return (
    <div>
      <h1> {props.title}</h1>
      <p> {props.text} </p>
    </div>
  )
}

const Navbar = (props) => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
        <a className='item'>
          <h2 className="ui header">
            <i className={`${props.icon} icon`}></i>
            <div className="content">
              {props.title}
            </div>
          </h2>
        </a>
      </div>
  )
}



const app = (color, icon, title, articleTitle, articleText) => {
  return React.createElement('div', {}, [
    navbar(color, icon, title),
    article(articleTitle, articleText)
  ])
}

const App = (props) => {
  return (
    <div>
      <Navbar color="red" icon="bug" title={props.appTitle} />
      <Article title="Sunburnt Forever!" text="westchesterlyfe" />
    </div>
  )
}

ReactDOM.render(
  <App appTitle="Bugged In!"/>,
  // navbar({color: 'pink', icon: 'bug', title: 'bugged out!'}),
  document.getElementById('container')
)

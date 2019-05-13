import React from 'react';
import paintings from './artworks'
import Navbar from './Navbar'
import PaintingList from './PaintingList'

// const App = (props) => {
//   return (
//     <div className="App">
//       {props.title}
//     </div>
//   );
// }


class App extends React.Component {
  render() {
    console.log('app is rendering', paintings);

    return (
      <div className="App">
        <Navbar title={this.props.title} icon="paint brush"/>
        <PaintingList paintings={paintings}/>
      </div>
    )
  }
}

export default App;

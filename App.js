import './App.css';
import Demo from './Demo';
import ClassComp from './ClassComp';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className='react'>
        Namaste React_^_
      </div>
      <Demo />
      <ClassComp />
    </div>
  );
}
function MainDemo() {
  return (
    <div className='demo'>
      main demo
    </div>
  )
}

function SubDemo() {
  return (
    <div className='sub-demo'>
      sub demo
    </div>
  )
}

function MyDemo() {
  return (
    <div className='my-demo'>
      my-demo
    </div>
  )
}

export default App;
export { MainDemo, SubDemo,MyDemo };
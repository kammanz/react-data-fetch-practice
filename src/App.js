import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <List /> */}
      <QuestionList />
    </div>
  );
}

export default App;

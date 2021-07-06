import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="send.php" method='post'>

        <input type="email" name='email' placeholder="Your Email"/>
          <input type="text-area" placeholder='Your Message' name='message'/>
          <button type='submit'>Отправить</button>
      </form>
    </div>
  );
}

export default App;

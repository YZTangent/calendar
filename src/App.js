import './App.css';
import DatePicker from 'sassy-datepicker';

function App() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <DatePicker onChange={onChange} />
  );
}
export default App;

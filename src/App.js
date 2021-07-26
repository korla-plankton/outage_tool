import Status from './components/Status.js'

function App() {
  // code to store results of Current Outages from Jira
  return (
    <div className="App">
      {/*
        The below tags are for demonstration
        In reality we need to iterate over the 
        communities and current outages
      */}
      <Status state="normal"/>
      <Status state="degraded"/>
      <Status state="outage"/>
    </div>
  );
}

export default App;

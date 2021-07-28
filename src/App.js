import CommunityStatus from './components/CommunityStatus.js'
import LoginForm from './components/LoginForm.js'

const communities = [
  "Arctic Bay",
  "Arviat",
  "Baker Lake",
  "Cambrige Bay",
  "Cape Dorset",
  "Chesterfield Inlet",
  "Clyde River",
  "Coral Harbour",
  "Gjoa Haven",
  "Hall Beach",
  "Igloolik",
  "Iqaluit",
]

const request = new XMLHttpRequest();
const url = 'https://jira.ssimicro.com/rest/auth/1/session';
request.open("POST", url);
request.send();
console.log(request.response)

function App() {
  // code to store results of Current Outages from Jira
  return (
    <div className="App">
      <LoginForm />
      {communities.map((community,index) => (
        <CommunityStatus key={index} community={community} />
      ))}
    </div>
  );
}

export default App;

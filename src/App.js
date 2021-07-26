import CommunityStatus from './components/CommunityStatus.js'

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

function App() {
  // code to store results of Current Outages from Jira
  return (
    <div className="App">
      {communities.map((community,index) => (
        <CommunityStatus key={index} community={community} />
      ))}
    </div>
  );
}

export default App;

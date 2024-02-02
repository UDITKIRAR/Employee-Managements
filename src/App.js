import LoggedinState from './Components/ContextAPI/Loggedin';
import ProfileState from './Components/ContextAPI/ProfileState';
import EidState from './Components/ContextAPI/EidState';
import Interface from './Components/Interface';


function App() {
  return (
    <>
      <LoggedinState>
        <ProfileState>
          <EidState>
            <Interface />
          </EidState>
        </ProfileState>
      </LoggedinState>
    </>
  );
}

export default App;

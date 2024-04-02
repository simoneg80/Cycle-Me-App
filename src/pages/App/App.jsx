import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import CalendarPage from "../CalendarPage/CalendarPage";
import JournalPage from "../JournalPage/JournalPage";
import LoginPage from "../LoginPage/LoginPage";
import "./App.css";



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     <NavBar user={ user } setUser={ setUser }/>
      { user ? (
        <>
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </>
       ):(
        <>
        <Routes>
          <Route path="/AuthPage" element={<AuthPage setUser={setUser} />}/>
          <Route path="/LoginPage" element={<LoginPage user={user} setUser={setUser} />}/>
        </Routes>
        </>

       





        // <AuthPage setUser={ setUser } />
      )}
    </main>
  );
}

// export default App;

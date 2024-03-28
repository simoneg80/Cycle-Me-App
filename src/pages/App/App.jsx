import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/*nav tag goes here */}
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            {/* <Route path="/calendar" element={<CalendarHomePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser } />
      }
    </main>
  );
}

// export default App;

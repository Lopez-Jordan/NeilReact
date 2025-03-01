import { useEffect } from 'react';
import { StudentProvider } from './utils/StudentContext';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const title = 'Activity 2: Providers';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="app">
      <h1>22.1 State</h1>
      <h4 style={{ color: 'lightseagreen' }}>{title}</h4>
      {/* Provider wraps all the logic that handles/updates our state */}
      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;

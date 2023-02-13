import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import Error from './components/error/Error';
import Loading from './components/loading/Loading';
import StudentList from './components/studentsList/StudentList';

const API_URL = "http://localhost:8888"

function App() {
  const [ studentData, setStudentData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");
  
  useEffect(()=> {
    async function fetchData() {
      try {
        // Remove any errors from previous attempts
        setError("");
        // Show the user we're loading...
        setLoading(true);
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        const { data, error } = json;
        // data.split()  // ===> just for Error testing PURPOSE
        if(response.ok) {
          // handle success
          setStudentData(data);
          // Stoping showing the user the loading UI...
          setLoading(false);
        } else {
          // handle error
          setError(error);
          setLoading(false);
        }
      } catch (error) {
        console.log(`<App /> useEffect error: ${error.message}`);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  /* If loading, render <Loading />
    else if error, render <Error error={error} />
    else render <StudentList />
  */
  const renderContent = () => {
    if(loading) {
      return <Loading />;
    } else if(error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };
 
  return (
    <div className="App">
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
    
  );
}

export default App;

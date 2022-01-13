import './App.css';
import itSkillsList from './api/Api';
import { useState, useEffect } from 'react';
import { Skill } from './interface/Interface';
import FindBar from './components/findBar/FindBar';
import OneBarSkills from './components/oneBarSkill/OneBarSkill';

function App() {
  const [skills, setSkills] = useState<Skill[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await itSkillsList();
      console.log(data.data)
      setSkills(data.data)
    }
    getData();
  }, [])

 

  return (
    <div className="App">
      skill
      <FindBar />
      <OneBarSkills/>
    </div>
  );
}

export default App;

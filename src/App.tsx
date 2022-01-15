import './App.css';
import itSkillsList from './api/Api';
import { useState, useEffect } from 'react';
import { Skill } from './interface/Interface';
import FindBar from './components/findBar/FindBar';
import OneBarSkills from './components/oneBarSkill/OneBarSkill';
import { SlowBuffer } from 'buffer';

function App() {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	const [skillsToShow, setSkillsToShow] = useState<Skill[]>([]);

	useEffect(() => {
		const getData = async () => {
			const data = await itSkillsList();
			setSkills(data.data);
		};
		getData();
	}, []);

	useEffect(() => {
		setSkillsToShow(skills);
	}, [skills]);

	const handleSelectSkill = (skill: string): void => {
		selectedSkills && setSelectedSkills(prev => [...prev, skill]);
		setSkillsToShow(prev => prev.filter(el => el.name !== skill));
	};

	const handleDeleteSkill = (skillToDelete: string): void => {
		const deletedSkill = skills?.find((skill: Skill): boolean => skill.name === skillToDelete) || [];
		console.log(deletedSkill)
		setSkillsToShow(prev => ([...prev].concat(deletedSkill)).sort((a,b) => a.skill_id > b.skill_id? 1 : -1));
		setSelectedSkills(prev => prev.filter(skill => skill !== skillToDelete));
	};

	const handleFindSkillsInput = (charsToFind: string): void => {
		const findedSkill =
			skills?.filter(
				(skill: Skill): boolean =>
					skill.name.toUpperCase().includes(charsToFind.toUpperCase()) &&
					!selectedSkills.includes(skill.name)
			) || [];
		setSkillsToShow(findedSkill);
	};

	return (
		<div className='App'>
			skill
			<FindBar
				selectedSkills={selectedSkills}
				onHandleFindSkillsInput={handleFindSkillsInput}
				onHandleDeleteSkill={handleDeleteSkill}
			/>
			<ul>
			{skillsToShow ? (
				skillsToShow.sort().map(skill => (
					<OneBarSkills
						key={skill.skill_id}
						skill={skill}
						onHandleSelectSkill={handleSelectSkill}
					/>
				))
			) : (
				<div>wczytuje strone</div>
			)}
			</ul>
		</div>
	);
}

export default App;

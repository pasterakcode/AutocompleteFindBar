import './App.css';
import itSkillsList from './api/Api';
import { useState, useEffect } from 'react';
import { Skill } from './interface/Interface';
import FindBar from './components/findBar/FindBar';
import OneBarSkills from './components/oneBarSkill/OneBarSkill';
import { SlowBuffer } from 'buffer';

function App() {
	const [skills, setSkills] = useState<Skill[] | null>(null);
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	const [skillsToShow, setSkillsToShow] = useState<Skill[] | null>(null);

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
		if (skillsToShow) {
			const newToShow = skillsToShow.filter(el => el.name !== skill);
			setSkillsToShow(newToShow);
		}
	};

	const handleDeleteSkill = (skillToDelete: string): void => {
		const selectedWithoutToDelete = selectedSkills.filter(
			skill => skill !== skillToDelete
		);
		setSelectedSkills(selectedWithoutToDelete);
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
			{skillsToShow ? (
				skillsToShow.map(skill => (
					<OneBarSkills
						key={skill.skill_id}
						skill={skill}
						onHandleSelectSkill={handleSelectSkill}
					/>
				))
			) : (
				<div>wczytuje strone</div>
			)}
		</div>
	);
}

export default App;

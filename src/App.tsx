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
	const [focusedSkill, setFocusedSkill] = useState<Skill | null>(null);
	const [skillsToShow, setSkillsToShow] = useState<Skill[]>([]);
	const [inputFindIsEmpty, setInputFindIsEmpty] = useState<boolean>(true);

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

	useEffect(() => {
		handleFocusedSkill();
	}, [skillsToShow]);

	const handleSelectSkill = (skill: string): void => {
		selectedSkills && setSelectedSkills(prev => [...prev, skill]);
		setSkillsToShow(prev => prev.filter(el => el.name !== skill));
	};

	const handleInputFindIsEmpty = (status: boolean): void => {
		if (inputFindIsEmpty !== status) setInputFindIsEmpty(status);
	};
	const handleFocusedSkill = (direction: number = 0): void => {
		if (inputFindIsEmpty) {
			setFocusedSkill(null);
		} else {
			if (direction != 0 && focusedSkill) {
				const currentIndex = skillsToShow.indexOf(focusedSkill);
				const newFocus = skillsToShow[currentIndex + direction]
					? skillsToShow[currentIndex + direction]
					: skillsToShow[currentIndex];
				setFocusedSkill(newFocus);
			} else {
				setFocusedSkill(skillsToShow[0]);
			}
		}
	};
	const handleDeleteSkill = (skillToDelete: string): void => {
		const deletedSkill =
			skills?.find((skill: Skill): boolean => skill.name === skillToDelete) ||
			[];
		setSkillsToShow(prev =>
			[...prev]
				.concat(deletedSkill)
				.sort((a, b) => (a.skill_id > b.skill_id ? 1 : -1))
		);
		setSelectedSkills(prev => prev.filter(skill => skill !== skillToDelete));
	};

	const handleFindSkillsInput = (charsToFind: string): void => {
		setSkillsToShow(
			skills?.filter(
				skill =>
					skill.name.slice(0, charsToFind.length).toUpperCase() ===
						charsToFind.toUpperCase() && !selectedSkills.includes(skill.name)
			)
		);
	};

	return (
		<div className='App'>
			<div className='Dropdown'>
				<FindBar
					focusedSkill={focusedSkill}
					selectedSkills={selectedSkills}
					onHandleFindSkillsInput={handleFindSkillsInput}
					onHandleDeleteSkill={handleDeleteSkill}
					onHandleSelectSkill={handleSelectSkill}
					onHandleFocusedSkill={handleFocusedSkill}
					onHandleInputFindIsEmpty={handleInputFindIsEmpty}
				/>
				<div className='Sugestions'>
					{skillsToShow.length > 0 ? (
						skillsToShow
							.sort()
							.map(skill => (
								<OneBarSkills
									key={skill.skill_id}
									skill={skill}
									onHandleSelectSkill={handleSelectSkill}
									focusedSkill={focusedSkill}
								/>
							))
					) : (
						<div>wczytuje strone</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;

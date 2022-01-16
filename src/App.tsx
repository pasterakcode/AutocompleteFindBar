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
	const [focusedSkill, setFocusedSkill] = useState<Skill | null>(null)
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

	useEffect(() => {
		handleFocusedSkill();
	}, [skillsToShow])

	const handleSelectSkill = (skill: string): void => {
		selectedSkills && setSelectedSkills(prev => [...prev, skill]);
		setSkillsToShow(prev => prev.filter(el => el.name !== skill));
	};

	const handleFocusedSkill = ( direction: number = 0, toClear: boolean = false ): void => {
		if (toClear){
			setFocusedSkill(null)
			console.log('czyszcze focused')
		} else {
			if (direction != 0 && focusedSkill){
				console.log('ustawiam 1 focused')
				const currentIndex: number = skillsToShow.indexOf(focusedSkill);
				const newFocus = skillsToShow[currentIndex + direction]? skillsToShow[currentIndex + direction] : skillsToShow[currentIndex]
				setFocusedSkill(newFocus)
			} else {
				if(skillsToShow.length != skills.length){
					console.log('ustawiam 2 focused . Na 0')
					setFocusedSkill(skillsToShow[0])
				}
			}
		}
	}
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
					skill.name.slice(0, charsToFind.length).toUpperCase() === charsToFind.toUpperCase() &&
					!selectedSkills.includes(skill.name)
			)
		);
		if (charsToFind === ''){
			handleFocusedSkill(0, true);
		}
	};

	return (
		<div className='App'>
			skill
			<FindBar
				focusedSkill={focusedSkill}
				selectedSkills={selectedSkills}
				onHandleFindSkillsInput={handleFindSkillsInput}
				onHandleDeleteSkill={handleDeleteSkill}
				onHandleSelectSkill={handleSelectSkill}
				onHandleFocusedSkill={handleFocusedSkill}
			/>
			<ul>
				{skillsToShow ? (
					skillsToShow
						.sort()
						.map(skill => (
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

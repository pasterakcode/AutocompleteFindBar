import { Skill } from '../../interface/Interface';
import { useState, useEffect } from 'react';
import { toEditorSettings } from 'typescript';
import OneSelectedSkill from './oneSelectedSkill/OneSelectedSkill';

interface FindBarProps {
    focusedSkill: Skill | null;
	selectedSkills: string[];
	onHandleFindSkillsInput: Function;
	onHandleDeleteSkill: Function;
	onHandleSelectSkill: Function;
	onHandleFocusedSkill: Function;
}

const FindBar = ({
    focusedSkill,
	selectedSkills,
	onHandleFindSkillsInput,
	onHandleDeleteSkill,
	onHandleSelectSkill,
	onHandleFocusedSkill,
}: FindBarProps) => {
	const [inputValue, setInputValue] = useState<string>('');

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const toFind = e.target.value;
		setInputValue(toFind);
		onHandleFindSkillsInput(toFind);
	};
    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.code === "ArrowUp"){
			onHandleFocusedSkill(-1)
		}
		if (e.code === "ArrowDown"){
			onHandleFocusedSkill(1)
		}
        if (e.code === "Enter" && inputValue != '') {
            onHandleSelectSkill(focusedSkill? focusedSkill.name : inputValue)
			setInputValue('');
			onHandleFindSkillsInput('');
        }
		if (e.code === 'Backspace' && inputValue.length === 1){
			setInputValue('');
			onHandleFindSkillsInput('');
		}
    }
	return (
		<div>
			{selectedSkills?.map((skill: string, index: number) => (
				<OneSelectedSkill
					key={index}
					skillName={skill}
					onHandleDeleteSkill={onHandleDeleteSkill}
				/>
			))}
			<p>{focusedSkill?.name}</p>
			<input
				type='text'
				placeholder='find...'
				value={inputValue}
				onChange={e => handleChangeInput(e)}
                onKeyDown={e => handleInputKeyPress(e)}	
			/>
		</div>
	);
};
export default FindBar;

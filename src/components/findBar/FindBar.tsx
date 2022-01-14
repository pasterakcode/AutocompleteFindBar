import { Skill } from "../../interface/Interface";
import { useState, useEffect } from 'react';
import { toEditorSettings } from "typescript";
import OneSelectedSkill from "./oneSelectedSkill/OneSelectedSkill";

interface FindBarProps {
    selectedSkills: string[],
    onHandleFindSkillsInput: Function,
    onHandleDeleteSkill: Function,
}

const FindBar = ( { selectedSkills, onHandleFindSkillsInput, onHandleDeleteSkill }: FindBarProps ) => {
    const [inputValue, setInputValue] = useState<string>()

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const toFind = e.target.value;
        setInputValue(toFind);
        onHandleFindSkillsInput(toFind)
    }
    return (
        <div>
            {selectedSkills?.map( ( skill: string, index: number ) => <OneSelectedSkill key={index} skillName={skill} onHandleDeleteSkill={onHandleDeleteSkill}/>)}
            <input type="text" placeholder="find..." value={inputValue} onChange={e => handleChangeInput(e)}/>
        </div>
    )
}
export default FindBar;
import { Skill } from "../../interface/Interface";
import styles from './OneBarSkill.module.css'

interface OneBarSkillsProps {
	skill: Skill;
    onHandleSelectSkill: Function,
    focusedSkill: Skill | null;
}

const fastStyle = {
    'backgroundColor': 'rgb(223, 223, 223)',
}

const OneBarSkills = ( { skill, onHandleSelectSkill, focusedSkill }:OneBarSkillsProps ) => {
    const handleClickOnSkill = (e: React.MouseEvent<HTMLDivElement>): void => {
        onHandleSelectSkill(skill.name);
    }
    
    return (
        <div style={skill.name === focusedSkill?.name? fastStyle : {}} className={styles.oneBar} onClick={handleClickOnSkill}>
           {skill.name}
        </div>
    )
}
export default OneBarSkills;
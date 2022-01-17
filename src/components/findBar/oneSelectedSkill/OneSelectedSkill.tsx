import styles from './OneSelectedSkill.module.css'

interface OneSelectedSkillProps {
    skillName: string,
    onHandleDeleteSkill: Function,
}
const OneSelectedSkill = ( { skillName, onHandleDeleteSkill }:OneSelectedSkillProps ) => {
    const handleClickToDeleteSkill = () => {
        onHandleDeleteSkill(skillName)
    }
    return (
        <div className={styles.oneSkill}>
            {skillName} <button onClick={handleClickToDeleteSkill}>{'\u2715'}</button>
        </div>
    )
}
export default OneSelectedSkill;
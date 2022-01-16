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
            {skillName} <button onClick={handleClickToDeleteSkill}>x</button>
        </div>
    )
}
export default OneSelectedSkill;
import { FaCss3, FaDatabase, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import Button from '../Button/button';
import styles from './Card.module.css';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
// import Image from 'next/image';

type Card = {
    title: string,
    src: string,
    alt: string,
    href: string,
    skills: string[];
    iconSize?: number | string;
}

export default function Card({title, src, alt, skills, href}: Card) {
    const titleButton = {title: "Git Hub"};

    const renderSkillIcon = (skill: string) => {
        switch (skill.toLowerCase()) {
            case 'react':
                return <FaReact title='React' color="#7950F2" size={32}/>;
            case 'nodejs':
                return <FaNodeJs title="Node.js" color="#7950F2" size={32} />;
            case 'database':
                return <FaDatabase title="Database" color="#7950F2" size={32} />;
            case 'html':
                return <FaHtml5 title="Html" color='#7950F2' size={32} />;
            case "css":
                return <FaCss3 title="Css" color='#7950F2' size={32}/>;
            case "next":
               return  <RiNextjsFill title="Next" color='#7950F2' size={32}/>
            case "javascript":
                return  <RiJavascriptFill title="Javascript" color='#7950F2' size={32}/>
            case 'typescript':
                return <BiLogoTypescript title="Typescript" color='#7950F2' size={32}/>
            default:
                return null;;
        }
    }

    return (
        <section className={styles.card}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <img src={src} alt={alt} />
                <div className={styles.skill}>
                    {skills.map(skill => renderSkillIcon(skill))}
                </div>
                <div className={styles.button}>
                    <a href={href} target='_blank' rel='noopener noreferrer'>
                        <Button title={titleButton.title}/>
                    </a>
                </div>
            </div>
        </section>
    )
}
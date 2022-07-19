import React, { Component } from "react";

class About extends Component {
    render() {
        const skills = ['JavaScript', 'Jest', 'CSS', 'HTML'] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li key={skill}>{skill}</li>) // cria um array de tags <li>
        const result = (
            <div>
                <h1>João Victor Braga</h1>
                <h2>MINHAS HABILIDADES</h2>
                <div>
                    <ul>{jsxSkills}</ul>
                </div>
                <p>Salve, jotinha na voz!</p>
            </div>
        )
        return result;
    }
}

export default About;
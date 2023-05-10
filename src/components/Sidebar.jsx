import { Link } from "react-router-dom"


export default function Sidebar() {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <link to="Inicio"/>
                </li>
                <li>
                    <link to="Docentes"/>
                </li>
                <li>
                    <link to="Alumnos"/>
                </li>
                <li>
                    <link to="Cursos"/>
                </li>
            </ul>
        </div>
    )
}                                                                                                               
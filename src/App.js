import React, { Component } from "react"
import GeneralInfo from "./components/GeneralInfo"
import WorkExperiences from "./components/WorkExperiences"
import Education from "./components/Education"
import Skills from "./components/Skills"

export default class App extends Component {
    render() {
        return (
            <>
            <header>
                <h1>CV Maker</h1>
            </header>
            <div className="container">
                <GeneralInfo />
                <WorkExperiences />
                <Education />
                <Skills />
            </div>
            <footer>
                kkgarcia
            </footer>
            </>
        )
    }
}
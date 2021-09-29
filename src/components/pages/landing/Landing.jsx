import React from 'react';

import { SectionWrapper, CardWrapper, ProjectCard } from '../../utils';
import { projects } from '../../../utils/seed';

const Landing = (props) => {

    const {
        activeProject,
        setActiveProject,
        modalVisibility,
        setModalVisibility
    
    } = props;

/* Handler for making a modal visible: */
    const handleModalVisibility = (id) => {
        setModalVisibility(!modalVisibility);
        setActiveProject(projects.find(
            project => project.id === id
        )
            
        )
    };



    return (
        <div>
<h1>Greetings from Landing</h1>

        {/* This renders the main project cards on the Landing Page: */}
            <SectionWrapper 
                id="projects"
                content={
                    <CardWrapper>
                        {projects.map( project => {
                            return (
                                <ProjectCard 
                                    loading="lazy"
                                    onClick={ () => 
                                    handleModalVisibility(project.id)}
                                    key={project.id}
                                    title={project.title}
                                    tech={project.tech}
                                    cardCoverText={project.cardCoverText}
                                    svgImg={project.svgImg}
                                    img={project.img}
                                />
                            )
                        })}
                    </CardWrapper>
                }
            />

        {/* The modal that appears when clicking a project card: */}




        </div>
    );
};

export default Landing;
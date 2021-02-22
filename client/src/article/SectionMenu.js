import React from 'react';
import './Article.css';

import dummyCourses from './dummyArticle.json';

/**
 * A single item of the section dropdown menu 
 * @param {*} props 
 */
function SectionItem(props) {
    const { sectionID, updateSelectedID } = props;
    return (
        <div className="section-item" onClick={() => updateSelectedID(sectionID)} >
            {props.children}
        </div>
    );
}

/**
 * Section dropdown selection menu 
 * @param {*} props 
 */
function SectionMenu(props) {

    const { updateSelectedSection } = props;


    function updateSelectedID(sectionID) {
        for (let index = 0; index < dummyCourses[0].sections.length; index++) {
            const element = dummyCourses[0].sections[index];
            if (element.class === sectionID) {
                updateSelectedSection(element);
                break;
            }
        }
    }

    return (
        <div className="section-dropdown">
            {dummyCourses[0].sections.map((section) => (
                <SectionItem sectionID={section.class} updateSelectedID={updateSelectedID}>
                    {`${section.professor}  ${section.letter}`}
                </SectionItem>
            ))}
        </div>
    );
}

export default SectionMenu

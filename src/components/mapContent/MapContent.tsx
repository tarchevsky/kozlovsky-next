'use client'

import ImgText from '@/components/imgText/ImgText'
import {MapContentProps} from '@/types'

const MapContent = ({projectsData, reverse}: MapContentProps) => {
    return (
        <>
            {projectsData.map((project, index) => (
                <ImgText
                    key={index}
                    link={project.link}
                    src={project.src}
                    alt={project.alt}
                    description={project.description}
                    projectName={project.projectName}
                    reverse={reverse}
                />
            ))}
        </>
    )
}

export default MapContent

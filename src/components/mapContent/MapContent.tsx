'use client'

import ImgText from '@/components/imgText/ImgText'
import {MapContentProps} from '@/types'

const MapContent = ({ projectsData, reverse }: MapContentProps) => {
    return (
        <>
            {projectsData.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${row.columns}, 1fr)`,
                        gap: '16px',
                    }}
                >
                    {row.items.map((project, index) => (
                        <ImgText
                            key={index}
                            link={project.link}
                            src={project.src}
                            alt={project.alt}
                            description={project.description}
                            projectName={project.projectName}
                            className='object-cover h-full'
                            reverse={reverse}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default MapContent;
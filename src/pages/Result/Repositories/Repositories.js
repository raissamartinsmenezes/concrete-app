import React from 'react'
import './Repositories.scss'
import IconText from '../../../components/IconText/IconText'
import Description from '../../../components/Description/Description'
import starIcon from '../../../assets/icons/star-icon.svg'

const Repositories = (props) => {
    return (
        <div>
            <div className='repositories-box'>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                    classTitle='repositories-title'
                    classParagraph='repositories-paragraph'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                    classIcon='icon-repositories'
                >The Galactic Empire</IconText>
            </div>
            <div className='repositories-box'>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                    classTitle='repositories-title'
                    classParagraph='repositories-paragraph'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                    classIcon='icon-repositories'
                >The Galactic Empire</IconText>
            </div>
            <div className='repositories-box'>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                    classTitle='repositories-title'
                    classParagraph='repositories-paragraph'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                    classIcon='icon-repositories'
                >The Galactic Empire</IconText>
            </div>
        </div>
    )
}

export default Repositories
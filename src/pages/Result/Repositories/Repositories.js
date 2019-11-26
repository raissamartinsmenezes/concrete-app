import React from 'react'
import IconText from '../../../components/IconText/IconText'
import Description from '../../../components/Description/Description'
import starIcon from '../../../assets/icons/star-icon.svg'

const Repositories = (props) => {
    return (
        <div>
            <div>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                >The Galactic Empire</IconText>
            </div>
            <div>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                >The Galactic Empire</IconText>
            </div>
            <div>
                <Description
                    title='Título do babado'
                    description='Descrição do babado'
                ></Description>
                <IconText
                    icon={starIcon}
                    alt='organization icon'
                >The Galactic Empire</IconText>
            </div>
        </div>
    )
}

export default Repositories
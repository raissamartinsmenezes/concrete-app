import React from 'react'
import './Repositories.scss'
import IconText from '../../../components/IconText/IconText'
import Description from '../../../components/Description/Description'
import starIcon from '../../../assets/icons/star-icon.svg'

const Repositories = (props) => {
    return (
        <div>
            {props.repos.map(repo => (
                <div className='repositories-box'>
                    <Description
                        title={repo.name}
                        description={repo.description}
                        classTitle='repositories-title'
                        classParagraph='repositories-paragraph'
                    ></Description>
                    <IconText
                        icon={starIcon}
                        alt='organization icon'
                        classIcon='icon-repositories'
                    >{repo.stargazers_count}</IconText>
                </div>
            ))}
        </div>
    )
}

export default Repositories
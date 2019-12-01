import React from 'react'
import './Profile.scss'
import UserPhoto from '../../../components/UserPhoto/UserPhoto'
import IconText from '../../../components/IconText/IconText'
import Description from '../../../components/Description/Description'
import organizationIcon from '../../../assets/icons/organization-icon.svg'
import locationIcon from '../../../assets/icons/location-icon.svg'
import starIcon from '../../../assets/icons/star-icon.svg'
import repositorieIcon from '../../../assets/icons/repositorie-icon.svg'
import followersIcon from '../../../assets/icons/followers-icon.svg'

const Profile = (props) => {
    return (
        <div>
            {/* {props.user.map(user => ( */}
                <div>
                    <UserPhoto 
                        avatar_url={props.avatar_url}
                    />
                    <Description
                        title={props.name}
                        description={props.bio}
                        classTitle='profile-title'
                        classParagraph='profile-paragraph'
                    />
                    <div className='icon-box'>
                        <IconText
                            icon={organizationIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >{props.company}</IconText>
                        <IconText
                            icon={locationIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >{props.location}</IconText>
                        {/* <IconText
                            icon={starIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >1.000.000</IconText> */}
                        <IconText
                            icon={repositorieIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >{props.public_repos}</IconText>
                        <IconText
                            icon={followersIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >{props.followers}</IconText>
                    </div>
                </div>
            {/* ))} */}
        </div>
    )
}

export default Profile
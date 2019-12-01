import React from 'react'
import './Profile.css'
import UserPhoto from '../../../../components/UserPhoto/UserPhoto'
import IconText from '../../../../components/IconText/IconText'
import Description from '../../../../components/Description/Description'
import organizationIcon from '../../../../assets/icons/organization-icon.svg'
import locationIcon from '../../../../assets/icons/location-icon.svg'
// import starIcon from '../../../../assets/icons/star-icon.svg'
import repositorieIcon from '../../../../assets/icons/repositorie-icon.svg'
import followersIcon from '../../../../assets/icons/followers-icon.svg'

const Profile = (props) => {
    const { avatar_url, name, bio, company, location, public_repos, followers, following } = props
    return (
        <div>
            <UserPhoto
                avatar_url={avatar_url}
            />
            <Description
                title={name}
                description={bio}
                classTitle='profile-title'
                classParagraph='profile-paragraph'
            />
            <div className='icon-box'>
                {company ?
                    <IconText
                        icon={organizationIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{company}</IconText> :
                    null}
                {location ?
                    <IconText
                        icon={locationIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{location}</IconText> :
                    null}
                {/* {props.following ?
                    <IconText
                        icon={starIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{props.following}</IconText> :
                    null} */}
                {public_repos ?
                    <IconText
                        icon={repositorieIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{public_repos}</IconText> :
                    null}
                {followers ?
                    <IconText
                        icon={followersIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{followers}</IconText> :
                    null}
                {following ?
                    <IconText
                        icon={followersIcon}
                        alt='organization icon'
                        classIcon='icon'
                    >{following}</IconText> :
                    null}
            </div>
        </div>
    )
}

export default Profile
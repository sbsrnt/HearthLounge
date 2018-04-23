import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Icon from "../../components/icon";

const EntryNode = ({activeUser, handleSignOut}) =>{
  const {username, avatar, authenticated, rank} = activeUser;
  const isAuthenticated = (activeUser && authenticated);

  const entryLabel = () =>{
    if(isAuthenticated) {
      return (
          <div className="nav__list--labelWrapper">
            <div className="nav__list--aboutUser">
              <p className="aboutUser__username">{username}</p>
              <p className="aboutUser__rank">{rank}</p>
            </div>

            <div className="nav__list--logout" onClick={handleSignOut}>
              <Icon name="login"/>
              <p>Logout</p>
            </div>
          </div>
      )
    }
    return <div>Sign In</div>
  };

  return (
      <li className="nav__list--item login">
        <Link className="nav__list--linkContainer" to={(activeUser && authenticated) ? '/dashboard' : '/sign-in'}>
          <div className="nav__list--link">
            {(activeUser && avatar && authenticated)
                ? <div className="nav__list--imageWrapper">
                    <img src={avatar} alt={`${username}'s profile`}/>
                  </div>
                : <Icon name="login"/>}
            {entryLabel()}
          </div>
        </Link>
      </li>
  )
};

export default EntryNode;

EntryNode.propTypes = {
  activeUser: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string
  }),
  handleSignOut: PropTypes.func.isRequired
};
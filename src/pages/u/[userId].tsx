// - Import react components

import withStyles from '@material-ui/core/styles/withStyles';
import StringAPI from '~/api/StringAPI';
import ImgCover from '~/components/imgCover';
import UserActivity from '~/components/userActivity';
import { ServerRequestType } from '~/constants/serverRequestType';
import { User } from '~/core/domain/users';
import { Map } from 'immutable';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import { connect } from 'react-redux';
import config from '~/config';
import * as postActions from '~/store/actions/postActions';
import * as userActions from '~/store/actions/userActions';
import { postSelector } from '~/store/reducers/posts';
import { userSelector } from '~/store/reducers/users/userSelector';
import HomeComponent from '~/containers/home/HomeComponent';

import PostStreamComponent from '~/containers/postStream/PostStreamComponent';
import { IProfileComponentProps } from '~/containers/profile/IProfileComponentProps';
import { IProfileComponentState } from '~/containers/profile/IProfileComponentState';
import { profileStyles } from '~/containers/profile/profileStyles';
import { globalActions } from '~/store/actions';
import { withRouter } from 'next/router';

/**
 * Create component class
 */
export class ProfileComponent extends Component<IProfileComponentProps, IProfileComponentState> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  
  historyUnlisten: any = null
  static propTypes = {

  }

  /**
   * Component constructor
   *
   */
  constructor(props: IProfileComponentProps) {
    super(props)

    // Defaul state
    this.state = {

    }

    // Binding functions to `this`

  }

  componentDidMount() {
    const {history, users} = this.props
    this.props.loadUserInfo()
    if (!this.historyUnlisten && users) {
      this.historyUnlisten =  history.listen((location: any, action: any) => {
        const userId = (location.pathname as string).replace('/','')
        const displayName = users.getIn([userId, 'fullName'],'')
        this.props.setHeaderTitle(displayName)
       
      })
    }
    this.props.setHeaderTitle(this.props.name)
    
  }

  componentWillUnmount() {
    if (this.historyUnlisten) {
      this.historyUnlisten()
    }
  }

  /**
   * Reneder component DOM
   * 
   */
  render() {

    const { loadPosts, hasMorePosts, t, classes, profile, isCurrentUser, posts, postRequestId, userId } = this.props

    return (
      <HomeComponent>
        <div className={classes.bannerContainer}>

          <ImgCover height={'384px'} width={'100%'} className={classes.banner}
            src={(profile && profile.banner) ? profile.banner : config.settings.defaultProfileCover} />
        </div>
        <UserActivity profile={profile!} isCurrentUser={isCurrentUser} />
        <div style={{ height: '24px' }}></div>
          {/* <ProfileAlbumComponent userId={userId} isOwner={isCurrentUser}/> */}
        <div>
          {
            !posts.isEmpty()
              ? (
                <div className='profile__title'>
                  {t!('profile.headPostsLabel', { userName: this.props.name })}
                </div>
              )
              : ''
          }
          <div style={{ height: '24px' }}></div>

          <PostStreamComponent
            posts={posts}
            requestId={postRequestId}
            loadStream={loadPosts}
            hasMorePosts={hasMorePosts}
            displayWriting={false} />
        </div>

      </HomeComponent>
    )
  }
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch: any, ownProps: IProfileComponentProps) => {
  const { userId } = ownProps.router.query
  return {
    loadPosts: (page: number) => dispatch(postActions.dbGetPostsByUserId(userId, page)),
    loadUserInfo: () => dispatch(userActions.dbGetUserInfoByUserId(userId, 'header')),
    setHeaderTitle : (title: string) => dispatch(globalActions.setHeaderTitle(title))

  }
}

/**
 * Map state to props
 */
const mapStateToProps = (state: Map<string, any>, ownProps: IProfileComponentProps) => {
  const { userId } = ownProps.router.query
  const postRequestId = StringAPI.createServerRequestId(ServerRequestType.ProfileGetPosts, userId)
  const uid = state.getIn(['authorize', 'uid'], 0)
  const hasMorePosts = state.getIn(['user', 'post', userId, 'hasMoreData'], true)
  const selectProfilePosts = postSelector.selectProfilePosts()
  const posts = selectProfilePosts(state, { userId })
  
  const userProfile = userSelector.getUserProfileById(state, { userId: userId }).toJS() as User
  const users = userSelector.getUsers(state)
  return {
    
    avatar: userProfile.avatar,
    name: userProfile.fullName,
    banner: userProfile.banner,
    tagLine: userProfile.tagLine,
    userId,
    users,
    posts,
    hasMorePosts,
    postRequestId,
    profile: userProfile,
    isCurrentUser: userId === uid

  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(ProfileComponent as any)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(profileStyles as any)(translateWrapper as any) as any) as any)
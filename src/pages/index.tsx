// - Import react components
import { grey } from '@material-ui/core/colors';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import PostStreamComponent from '~/containers/postStream';

import { connectStream } from '~/containers/stream/connectStream';
import { IStreamComponentProps } from '~/containers/stream/IStreamComponentProps';
import { IStreamComponentState } from '~/containers/stream/IStreamComponentState';
import { streamStyles } from '~/containers/stream/streamStyles';
import HomeComponent from '~/containers/home/HomeComponent';
export class StreamComponent extends Component<IStreamComponentProps, IStreamComponentState> {
  static async getInitialProps({req, store, isServer} : any) {
  
   
    return {
      namespacesRequired: ['common'],
    }
  }
  

  static propTypes = {
    /**
     * A list of post
     */
    posts: PropTypes.object,

    /**
     * The title of home header
     */
    homeTitle: PropTypes.string

  }

  styles = {
    postWritePrimaryText: {
      color: grey[400],
      cursor: 'text'
    },
    postWtireItem: {
      fontWeight: '200'
    }
  }

  /**
   * Component constructor
   *
   */
  constructor(props: IStreamComponentProps) {
    super(props)

    this.state = {
    }

    // Binding functions to `this`
    this.loadPosts = this.loadPosts.bind(this)

  }
  componentDidMount() {
    const { setHomeTitle, t } = this.props
    setHomeTitle!(t!('header.home'))
  }

  /**
   * Load posts
   */
  loadPosts() {
    const {loadStream, page, increasePage} = this.props
    if (loadStream && page !== undefined && increasePage) {
      loadStream!(page)
      increasePage()
    }
  }
  /**
   * Reneder component DOM
   * 
   */
  render() {

    const { hasMorePosts, posts, requestId, currentUser} = this.props

    return (
      <div className='stream-root'>
        <PostStreamComponent homeTitle={currentUser ? currentUser.fullName : ''} requestId={requestId} posts={posts} loadStream={this.loadPosts} hasMorePosts={hasMorePosts} displayWriting />
      </div>
    )
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(StreamComponent as any)
const connectComponent = connectStream(withStyles(streamStyles)(translateWrapper as any) as any);
(connectComponent as any).getLayout = (page: Component) => {
  return <HomeComponent>{page}</HomeComponent>
}
export default connectComponent
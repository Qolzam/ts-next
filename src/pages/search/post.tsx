// - Import react components
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import { withRouter } from 'next/router';

import PostStreamComponent from '~/containers/postStream';
import SearchComponent from '~/containers/search';
import { connectSearchPost } from '~/containers/searchPost/connectSearchPost';
import { ISearchPostProps } from '~/containers/searchPost/ISearchPostProps';
import { ISearchPostState } from '~/containers/searchPost/ISearchPostState';
import { searchPostStyles } from '~/containers/searchPost/searchPostStyles';
import HomeComponent from '~/containers/home';
import { getLayout } from '~/containers/home/HomeComponent';

// - Material-UI
// - Import actions
/**
 * Create component class
 */
export class SearchPostComponent extends Component<ISearchPostProps, ISearchPostState> {
  static async getInitialProps(props: any) {
    return {
      namespacesRequired: ['common'],
    }
  }
    
  /**
   * Fields
   */
  currentPage = 0

  /**
   * Component constructor
   *
   */
  constructor(props: ISearchPostProps) {
    super(props)

    // Defaul state
    this.state = {

    }

    // Binding functions to `this`
    this.searchQuery = this.searchQuery.bind(this)
    this.executeSearch = this.executeSearch.bind(this)
    this.searchParam = this.searchParam.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)

  }

  searchQuery() {
   this.executeSearch()
  }

  executeSearch() {
    const {search} = this.props
    const searchQuery = this.props.router.query.q || ''
    search!(searchQuery, this.currentPage, 10)
    this.currentPage++
  }

  searchParam = () => {
    const searchQuery = this.props.router.query.q || ''
    return searchQuery
  }

  handleRouteChange = (url: string) => {
    
    this.currentPage = 0
    this.executeSearch()
  }
  

  
  componentDidMount() {
    const {router} = this.props

    router.events.on('routeChangeStart', this.handleRouteChange)
    this.searchQuery()
  }

  componentWillUnmount() {
    const {router} = this.props

    router.events.off('routeChangeStart', this.handleRouteChange)
  }

  /**
   * Reneder component DOM
   * 
   */
  render() {

    const { t, classes, posts, hasMorePosts, requestId} = this.props

    return (

      <SearchComponent tab='posts'>
      <div id="stream-parent" className={classNames({[classes.noDisplay]: posts!.isEmpty() })}>
      <PostStreamComponent
          posts={posts}
          requestId={requestId}
          loadStream={this.searchQuery}
          hasMorePosts={hasMorePosts}
          displayWriting={false} />
      </div>
      <div className={classNames({[classes.noDisplay]: !posts!.isEmpty() })}>
        <Typography className={classes.notFound}>
           {t!('search.notFoundPost', {query: this.searchParam()})}
          </Typography>
      </div>
      </SearchComponent>
    )
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(SearchPostComponent as any)
const withRouterComponent = withRouter<any, any>(connectSearchPost(withStyles(searchPostStyles as any)(translateWrapper as any) as any));
(withRouterComponent as any).getLayout = getLayout
export default withRouterComponent
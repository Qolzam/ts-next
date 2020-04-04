// - Import react components
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import UserBoxList from '~/components/userBoxList/UserBoxListComponent';
import LoadMoreProgressComponent from '~/layouts/loadMoreProgress';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'next/router';

import SearchComponent from '~/containers/search';
import { connectSearchUser } from '~/containers/searchUser/connectSearchUser';
import { ISearchUserProps } from '~/containers/searchUser/ISearchUserProps';
import { ISearchUserState } from '~/containers/searchUser/ISearchUserState';
import { searchUserStyles } from '~/containers/searchUser/searchUserStyles';
import HomeComponent from '~/containers/home';
import { getLayout } from '~/containers/home/HomeComponent';

/**
 * Create component class
 */
export class SearchUserComponent extends Component<ISearchUserProps, ISearchUserState> {
  static async getInitialProps() {
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
  constructor(props: ISearchUserProps) {
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
    const { hasMorePeople, t, classes } = this.props
    const peopleInfo = this.props.peopleInfo!
    return (
      <SearchComponent tab='people'>
        <InfiniteScroll
          dataLength={peopleInfo ? peopleInfo.count() : 0}
          next={this.searchQuery}
          hasMore={hasMorePeople!}
          endMessage={
            <p style={{ textAlign: 'center' }}>
            </p>}
          loader={<LoadMoreProgressComponent key='find-people-load-more-progress' />}
        >
          <div className='tracks'>
            {peopleInfo && peopleInfo.count() > 0 ? (<div>
              <UserBoxList users={peopleInfo} />
              <div style={{ height: '24px' }}></div>
            </div>) : ''}
          </div>
        </InfiniteScroll>
        <div className={classNames({[classes.noDisplay]: !peopleInfo!.isEmpty() })}>
        <Typography className={classes.notFound}>
           {t!('search.notFoundUser', {query: this.searchParam()})}
          </Typography>
      </div>
      </SearchComponent>
    )
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(SearchUserComponent as any)
const withRouterComponent = withRouter<any, any>(connectSearchUser(withStyles(searchUserStyles as any)(translateWrapper as any) as any));
(withRouterComponent as any).getLayout = getLayout
export default withRouterComponent
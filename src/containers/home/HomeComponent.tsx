// - Import react components
import Link from '~/components/Link';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import ChatComponent from '~/components/chat/ChatComponent';
import Router from 'next/router'
import { Map } from 'immutable';
import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';
import NoSsr from '@material-ui/core/NoSsr';
import { withTranslation } from '~/locales/i18n';
import IdleTimer from 'react-idle-timer'
import { connect } from 'react-redux';
import TelarTextLogo from '~/layouts/telarTextLogo';
import { withRouter } from 'next/router';
import HomeHeader from '~/components/homeHeader/HomeHeaderComponent';
import * as chatActions from '~/store/actions/chatActions';
import * as globalActions from '~/store/actions/globalActions';

import { homeStyles } from './homeStyles';
import { IHomeComponentProps } from './IHomeComponentProps';
import { IHomeComponentState } from './IHomeComponentState';
import { menuItems } from './menuItems';
import MasterComponent from '../master';


export class HomeComponent extends Component<IHomeComponentProps, IHomeComponentState> {

  idleTimer: any
  /**
   * Portal Container
   */
  container: any = null

  // Constructor
  constructor(props: IHomeComponentProps) {
    super(props)
    this.idleTimer = React.createRef()

    this.state = {
      sidebarOpen: false
    }

    // Binding function to `this`
    this.toggleChat = this.toggleChat.bind(this)
    this.onActive = this.onActive.bind(this)
    this.onIdle = this.onIdle.bind(this)
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  }

  /**
   * Handle drawer toggle
   */
  handleDrawerToggle = () => {
    const { sidebarOpen } = this.state
    localStorage.setItem('sidebar.open', String(!sidebarOpen))
    this.setState((prevState) => {
      return {
        sidebarOpen: !prevState.sidebarOpen
      }
    })

  }
  componentDidMount() {
    const sidebarOpen = localStorage.getItem('sidebar.open')
    console.log('sidebarOpen ', sidebarOpen)
    if (sidebarOpen !== undefined && sidebarOpen !== null) {
      if (sidebarOpen !== String(this.state.sidebarOpen)) {
        this.setState({ sidebarOpen: sidebarOpen === 'true' })
      }
    }
    else {
      let width = window.innerWidth
      if (width >= 600 && !this.state.sidebarOpen) {
        this.handleDrawerToggle()
      }
    }
  }

  /**
   * Toggle chat window to open/close
   */
  toggleChat() {
    const { isChatOpen, openChat, closeChat } = this.props
    if (isChatOpen) {
      closeChat!()
    } else {
      openChat!()
    }
  }

  onActive() {
    console.log('time remaining', this.idleTimer.current.getRemainingTime())
  }

  onIdle() {
    console.log('last active', this.idleTimer.current.getLastActiveTime())
  }

  /**
   * Render DOM component
   */
  render() {
    const { showSendFeedback, t, classes, theme, isChatOpen } = this.props
    const { sidebarOpen } = this.state

    const drawer = (
      <div>
        {
          menuItems(this.props.uid!, showSendFeedback!).map((item: any, index) => {
            if (item.path) {
              return (<Link naked key={`home-menu-${index}`} href={item.path} as={item.as}>
                <MenuItem style={{ color: 'rgb(117, 117, 117)' }}>
                  <ListItemIcon>
                    {item.icon!}
                  </ListItemIcon>
                  <ListItemText key={`home-menu-${index}`} primary={item.label} />
                </MenuItem>
              </Link>)
            } else if (item.onClick) {
              return (
                <MenuItem key={`home-menu-${index}`} onClick={item.onClick} style={{ color: 'rgb(117, 117, 117)' }}>
                  <ListItemIcon>
                    {item.icon!}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </MenuItem>
              )
            } else {
              return <Divider key={`home-menu-divider${index}`} />
            }

          })
        }
      </div>
    )

    const anchor = theme.direction === 'rtl' ? 'right' : 'left'
    const mainElement = (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <HomeHeader onToggleDrawer={this.handleDrawerToggle!} drawerStatus={sidebarOpen!} />
          <Hidden mdUp>
            <Drawer
              variant='temporary'
              open={sidebarOpen!}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle!}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div>
                <div className={classes.drawerHeader} >
                  <TelarTextLogo viewBox='0 0 700 100' className={classes.logo} />
                </div>
                <MenuList style={{ color: 'rgb(117, 117, 117)', width: '210px', paddingTop: '0px' }}>
                  <Divider />
                  {drawer}
                </MenuList>
              </div>
            </Drawer>
          </Hidden>
          <Hidden smDown implementation='js'>
            <Drawer
              variant='persistent'
              open={sidebarOpen!}
              classes={{
                paper: classes.drawerPaperLarge,
              }}
            >
              <div>
                <MenuList className={classes.menu} style={{ color: 'rgb(117, 117, 117)', width: '210px' }}>
                  {drawer}
                </MenuList>
              </div>
            </Drawer>
          </Hidden>
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: sidebarOpen!,
              [classes[`contentShift-${anchor}`]]: sidebarOpen!,
            })}
          >
            {this.props.children}
          </main>
        </div>

        {isChatOpen && <ChatComponent open={isChatOpen!} onToggle={this.toggleChat} />}
        <NoSsr>
          <CookieConsent
            location='bottom'
            buttonText={t!('home.cookieConsentButton')}
            cookieName='social-consent'
            style={{ background: '#2B373B' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
            expires={150}
          >
            {t!('home.cookieConsentText')}{' '}
          </CookieConsent>
        </NoSsr>

      </div>
    )
    return (
      <IdleTimer
        ref={this.idleTimer}
        onActive={this.onActive}
        onIdle={this.onIdle}
        timeout={1000 * 6}>
        <MasterComponent>
          {mainElement}
        </MasterComponent>

      </IdleTimer>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch: any, ownProps: IHomeComponentProps) => {

  return {
    openChat: () => dispatch(chatActions.openChat()),
    closeChat: () => dispatch(chatActions.closeChat()),
    defaultDataDisable: () => {
      dispatch(globalActions.defaultDataDisable())
    },
    defaultDataEnable: () => {
      dispatch(globalActions.defaultDataEnable())
    },
    goTo: (url: string, as: string) => Router.push(url, as),
    showSendFeedback: () => dispatch(globalActions.showSendFeedback()),
    hideSendFeedback: () => dispatch(globalActions.hideSendFeedback()),
    toggleSidebar: () => dispatch(globalActions.toggleSidebar())
  }

}

/**
 * Map state to props
 */
const mapStateToProps = (state: Map<string, any>, ownProps: IHomeComponentProps) => {
  const isChatOpen = state.getIn(['chat', 'chatOpen'])
  const uid = state.getIn(['authorize', 'uid'], {})
  const global = state.get('global', {})
  const sidebarOpen = state.getIn(['global', 'sidebar', 'open'], false)

  return {
    isChatOpen,
    sidebarOpen,
    uid,
    authed: state.getIn(['authorize', 'authed'], false),
    global,
    loaded: state.getIn(['user', 'loaded']) && state.getIn(['imageGallery', 'loaded']) && state.getIn(['circle', 'loaded']) && state.getIn(['global', 'defaultLoadDataStatus'])
  }
}


// - Connect component to redux store
const translateWrapper = withTranslation('common')(HomeComponent as any)

const ConnectWrapper = connect(mapStateToProps, mapDispatchToProps)(withStyles(homeStyles as any, { withTheme: true })(translateWrapper as any) as any)
export const getLayout = (page: Component) => {
  return <ConnectWrapper>{page}</ConnectWrapper>
}
export default ConnectWrapper

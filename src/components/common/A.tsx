import React, { Component } from 'react'
import { redirectTo } from '../../helpers/Navigation'

interface ILink {
  as?: string
  href?: string
  innerRef?: Function
  onClick?: any
  prefetch?: boolean
  route?: string
  [props: string]: any
}

export default class A extends Component<ILink> {
  static defaultProps = {
    prefetch: false,
  }

  componentDidMount = () => typeof this.props.innerRef === 'function' && this.props.innerRef(this.ref)

  render() {
    const { as, route, href, onClick, innerRef, prefetch, ...anchorProps } = this.props
    if (mustUseDirectLink(href, anchorProps.target)) {
      return <a {...anchorProps} href={this.href} onClick={onClick} ref={this.ref} />
    }
    return <a {...anchorProps} href={this.href} onClick={this.clickHandler} ref={this.ref} />
  }

  private ref: any = React.createRef<HTMLAnchorElement>()

  private clickHandler = (e: any) => {
    if (!this.href || !this.href.startsWith('#')) e.preventDefault()
    let stop = false
    if (typeof this.props.onClick === 'function') {
      this.props.onClick({ ...e, preventDefault: () => (stop = true) })
    }
    if (this.href && !stop && !this.href.startsWith('#')) redirectTo(this.href)
  }

  private get href(): string {
    return decorateWithSlashBeforeIfInternalUri(this.props.route || this.props.as || this.props.href)
  }
}

function isExternalUrl(url: string): boolean {
  return /^http[s]?(:\/\/)(.*)/.test(url)
}

function decorateWithSlash(uri: string): string {
  return /^[\/](.*)/.test(uri) ? uri : `/${uri}`
}

function isAnchorUrl(url: string): boolean {
  return /^#.*/.test(url)
}

function notDecoration(url: string): boolean {
  return isExternalUrl(url) || isAnchorUrl(url)
}

function decorateWithSlashBeforeIfInternalUri(uri: string): string {
  if (!uri) return undefined
  if (notDecoration(uri)) return uri
  return decorateWithSlash(uri)
}

function mustUseDirectLink(href?: string, target?: string): boolean {
  const url = typeof href !== 'string' ? '' : href
  return Boolean(target) || url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://'
}

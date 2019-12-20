import React from 'react'
import PropTypes from 'prop-types'


class Inview extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.percentVisible = this.props.percentVisible ? this.props.percentVisible : 100
    this.onScroll = this.onScroll.bind(this)
    this.isInViewport = this.isInViewport.bind(this)

    this.state = {
      isInview: false
    }
  }

  isInViewport() {
    const rect = this.ref.current.getBoundingClientRect()
    const  windowHeight = (window.innerHeight || document.documentElement.clientHeight)

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < this.percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < this.percentVisible
    )
  }


  onScroll() {
    if(this.state.isInview) {
      if(!this.isInViewport()) {
        this.setState({
          isInview: false
        }, ()=> {
          this.props.onLeftViewPort()
        })
      }
    } else {
      if (this.isInViewport()) {
        this.setState({
          isInview: true
        }, ()=> {
          this.props.onEnterViewPort()
        })
      }
    }
    
  }

  componentDidMount(){
    this.setState({
      isInview: this.isInViewport()
    })
    window.addEventListener('scroll', this.onScroll, false)

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <div ref={this.ref}>
      {  this.props.children }
      </div>
    );
  }
}

Inview.propTypes = {
  percentVisible: PropTypes.number,
  onEnterViewPort: PropTypes.func,
  onLeftViewPort: PropTypes.func
}

Inview.defaultProps = {
  onEnterViewPort:()=> {},
  onLeftViewPort:() => {}
}

export default Inview

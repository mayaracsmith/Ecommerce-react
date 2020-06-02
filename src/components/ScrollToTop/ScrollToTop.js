// import React from 'react';

// class ScrollToTop extends Component {
  
//   constructor(props) {    
//     super(props){   
//     this.childDiv = React.createRef()  
//     }  
//     componentDidMount = () => this.handleScroll()
//     componentDidUpdate = () => this.handleScroll() 
//     handleScroll = () => {   
//     const { index, selected } = this.props    
//     if (index === selected) {      
//     setTimeout(() => {        
//     this.childDiv.current.scrollIntoView({ behavior: 'smooth' })
//     }, 500)    
//     }  
//     } 
//   }
// export default ScrollToTop;
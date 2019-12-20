# inview
 simple react component to detect when in viewport

 # Usage

 ```js

 import Inview from 'inview'



const App = () => {

  const onEnterViewPort=()=> {
    console.log('IN')
  }

  const onLeftViewPort=()=> {
    console.log('OUT')
  }

  return (
    <div className='App'>
      <div style={{width:'400px', height:'900px', backgroundColor:'#ff0000'}}>
        <br />
      </div>
      <Inview percentVisible={5} onEnterViewPort={onEnterViewPort} onLeftViewPort={onLeftViewPort}>
        <div>
          <span> hello</span>
          <div>this is content</div>
          <div> foo</div>
        </div>
        <span>bar</span>
      </Inview>
    </div>
  )
}

 ```

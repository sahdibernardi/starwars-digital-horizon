import vader from '../media/vader.gif'


function Loader() {
    return (
        <div className="loader-div">
            <div className='vader-div'>
            <img src={ vader } alt="darth vader gif" id="vader-loader"/>
            </div>
            <div className="loading-div">
                <h3 id="loading">LOADING</h3>
                <div className="dot-typing"></div>
            </div>
        </div>
    );
  }
  
  export default Loader;



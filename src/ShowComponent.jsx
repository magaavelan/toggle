import React, {useState} from 'react'
import profile from './assets/image.png'
import './ShowComponent.css'

const ShowComponent = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
      };
    


  return (
    <React.Fragment>
    <div className='box1'>
        <img src={profile} alt="Profile" className='imgbox'/>
        <h2 className='name sign'>Name: Yogesh B</h2>
        <h3 className='name1 sign'>Registration Number: 212221220062</h3>
        <button className='btn' onClick={handleShowDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <p className='detail'>
            Degree : B.Tech
            Dept : IT
          </p>
        )}


    </div>
    </React.Fragment>
  )
}

export default ShowComponent

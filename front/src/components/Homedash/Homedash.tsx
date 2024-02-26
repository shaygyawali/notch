import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai'
import './Homedash.css'

function Homedash() {

  const [data, setData] = React.useState<any>(null)

  const getData = async () => {
    let temp = [
      {
        "name": "Protein",
        "value": 50,
        "unit": "g",
        "goal": 107,
        "goalUnit": "g"
      },
      {
        "name": "Sleep",
        "value": 6,
        "unit": "hrs",
        "goal": 8,
        "goalUnit": "hrs"
      },
      {
        "name": "Calories",
        "value": 1300, 
        "unit": "cal",
        "goal": 1200,
        "goalUnit": "cal"
      }
    ]
    setData(temp);
  }

  React.useEffect(() => {
    getData()
  }, [])
  console.log(data);

  return (
    <div className="meters">
      {
        data?.length > 0 && data.map((item: any, index:number) => {        
          return(
            <div className = 'card' key={index}>
              <div className = 'card-header'>
                <div className='card-header-box'>
                    <div className='card-header-box-name'> {item.name} </div>
                    <div className='card-header-box-value'>{item.value} {item.unit}</div>
                </div>
                <div className='card-header-box'>
                    <div className='card-header-box-name'> Target </div>
                    <div className='card-header-box-value'>{item.goal} {item.goalUnit}</div>
                </div>
              </div>
              <CircularProgress
                  color="neutral"
                  determinate
                  size="lg"
                  value={(item.value/item.goal)*100}
                  variant="soft"
              > </CircularProgress>
              <button> Show Report <AiOutlineEye/></button>
            </div>
          );
        })
      }
    </div>
  )
}

export default Homedash
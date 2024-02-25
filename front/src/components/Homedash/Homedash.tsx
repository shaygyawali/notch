import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai'
import './Homedash.css'

function Homedash() {

  const [data, setData] = React.useState<any>(null)

  const getData = async () => {
    let temp = [
      {
        "name": "Calories In",
        "value": 2000,
        "unit": "kcal",
        "goal": 2500,
        "goalUnit": "kcal"
      },
      {
        "name": "Sleep",
        "value": 6,
        "unit": "hrs",
        "goal": 8,
        "goalUnit": "hrs"
      },
      {
        "name": "Steps",
        "value": 8400, 
        "unit": "steps",
        "goal": 10000,
        "goalUnit": "steps"
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
                  variant="solid"
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
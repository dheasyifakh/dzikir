import React,{useState} from 'react'
import DzikirItem from '../../components/DzikirItem'
import Tasbih from '../../components/Tasbih'
import { useParams } from 'react-router-dom'
import { data } from '../../data/dzikr'

const DzikirDetail = () => {
  const [showTranslation, setShowTranslation] = useState(true);

  let params = useParams()
  console.log(params.time)
  return (
    <div>
      <div className="mt-8 flex justify-center items-center ">
        <h2 className='text-4xl font-bold text-gray-900 sm:text-4xl'>Dzikir {params.time}</h2>
      </div>
        
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
            {/* <DzikirItem time={params.time}/> */}
            <div className="md:col-span-2 lg:col-span-3 sm:pl-3 md:pl-10 lg:pl-10">
            <div className="mt-4 flex md:justify-end sm:justify-center">
                <button className='mr-3 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'>Hide Translate</button>
                <button className='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'>Hide Faedah</button>
            </div>
              <DzikirItem
                data={{
                  id: 0,
                  arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
                  latin: '',
                  faedah: '',
                  narrator: '',
                  note: 'Dibaca 1x',
                  title: `Ta'awudz`,
                  translate_id:
                    'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.',
                  time: '',
                }}
              />
            {data.dzikr
              .filter((item)=>['', params.time].includes(item.time))
              .map((item)=>{
                if(item.arabic.indexOf('@') > 0){
                  const arabics = item.arabic.split('@')
                  const narrators = item.narrator.split('@')
                  const translates = item.translate_id.split('@')
                  const title = item.title.split('@')
                  return(
                    <div  className=''>
                      {arabics.map((arabic, index)=>(
                        <div className=''>
                          <DzikirItem
                            index={index}
                            noFaedah={index < arabics.length - 1}
                            data={{
                              ...item,
                              arabic,
                              narrator: narrators[index],
                              translate: translates[index],
                              title
                            }}
                            key={item.id}
                          />
                          {/* { index > 0 && (
                            <div>
                              <h3 className='font-bold'>{item.title}</h3>
                              <b>{item.note}</b>
                            </div>
                          )
                          }
                          <div
                            dangerouslySetInnerHTML={{__html: arabic}}
                          />
                          <i className='my-12'>{item.latin}</i>
                          <p>"{translates[index]}"{narrators[index] && `${narrators[index]}`}</p> */}
                        </div>
                      ))

                      }
                    </div>
                  )
                }else{
                  return(
                    <DzikirItem
                      data={item}
                      key={item.id}
                    />
                  )
                }
                // else{
                //   return (
                //     <div key={item.id}>
                //             <div>
                //               <h3 className='font-bold'>{item.title}</h3>

                //             <div
                //             dangerouslySetInnerHTML={{__html: item.arabic}}
                //           />
                //               <b>{item.note}</b>
                //             </div>
                        
                //           <i className='my-12'>{item.latin}</i>
                      
                //     </div>
                //   )
                // }
              })
              }
            </div>
            
            <Tasbih/>
        </div>
    </div>
  )
}

export default DzikirDetail
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import styles from '../styles/Home.module.css'
import { formatNumber } from '../utils/formatNumber'
// import Odometer from "react-odometerjs";
// import VisibilitySensor from 'react-visibility-sensor'

export default function Home() {

  const [counter, setCounter] = useState(0)
  const [interval, setInterval] = useState(3000)
  const [soma, setSoma] = useState(3000)
  const [tofixedNumber, setToFixedNumber] = useState(3)
  const [config, setConfig] = useState(false)
  const [counterEdit, setCounterEdit] = useState(0)
  const [intervalEdit, setIntervalEdit] = useState(3000 / 1000)
  const [somaEdit, setSomaEdit] = useState(3000 / 1000000)
  const [tofixedNumberEdit, setToFixedNumberEdit] = useState(3)


  useEffect(() => {

    const time = Math.floor(Math.random() * interval) + interval / 2;

    const sum = 0.000001 * Math.floor(Math.random() * soma);


    const timeOut = setTimeout(() => {
      setCounter(counter + sum)
    }, time)


    return () => clearInterval(timeOut);
  }, [counter])

  const handleConfig = () => {
    setCounter(+counterEdit)
    setInterval(+intervalEdit * 1000)
    setSoma(+somaEdit * 1000000)
    setToFixedNumber(tofixedNumberEdit)
    setConfig(false)
    return
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`${styles.main} ${styles.background}`}>

        <div className="content">


          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <img src="/FrinapeLogo.png" alt="" className='frinapeLogo' />

            </div>
          </div>
          <div className="row my-4">
            <div className="col-12 d-flex justify-content-center counter">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className={styles.description}>
                    Toneladas de carbono emitidas no evento
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 d-flex align-items-end">

                  {/* <Odometer format="d" duration={1000} value={0} /> */}



                  <p className="number">
                    {formatNumber(counter.toFixed(tofixedNumber))}
                  </p>
                  <p className='CO2 text-center ms-4'>
                    t CO<sub>2</sub>e
                  </p>
                </div>
              </div>


            </div>
            <div className="row mt-5" >
              <div className="col-12 d-flex justify-content-center">
                <img src="/logo1.png" alt="" className='akvoLogo' />
              </div>
            </div>
          </div>


          {/* <h1 className={styles.title}>
          <img src="/FrinapeLogo.png" alt="" className='frinapeLogo' />
          </h1> */}





          {/* <div className='counter'>
            <p className={styles.description}>
              Toneladas de carbono emitidas no evento:
            </p>
            <p className='text-success'>
              Toneladas de carbono emitidas no evento:
            </p>
              0,005
              <p className='CO2'>
                t CO<sub>2</sub>e
              </p>
          </div> */}

          {/* <h1 className={styles.title}>

            <img src="/logo1.png" alt="" className='akvoLogo' />

          </h1> */}
          <div className="row">
            <div className="col-12 d-flex justify-content-start">

              <button type="button" className="btn" onClick={() => { setConfig(!config); setCounterEdit(counter.toFixed(3)) }}>
                -
              </button>
              {config && (
                <div className='formBg'>
                  <div className='mx-3'>
                    <label for="exampleFormControlInput1" class="form-label">N??mero inicial</label>
                    <input type="number" className="form-control " id="exampleFormControlInput1" placeholder="N??mero inicial" value={counterEdit} onChange={e => setCounterEdit(e.target.value)} />
                  </div>
                  <div className='mx-3'>
                    <label for="exampleFormControlInput1" class="form-label">Soma</label>
                    <input type="number" className="form-control " id="exampleFormControlInput1" placeholder="N??mero inicial" value={somaEdit} onChange={e => setSomaEdit(e.target.value)} />
                  </div>
                  <div className='mx-3'>
                    <label for="exampleFormControlInput1" class="form-label">Intervalo</label>
                    <input type="number" className="form-control " id="exampleFormControlInput1" placeholder="N??mero inicial" value={intervalEdit} onChange={e => setIntervalEdit(e.target.value)} />
                  </div>
                  <div className='mx-3'>
                    <label for="exampleFormControlInput1" class="form-label">N??meros depois da v??rgula</label>
                    <input type="number" className="form-control " id="exampleFormControlInput1" placeholder="N??mero inicial" value={tofixedNumberEdit} onChange={e => setToFixedNumberEdit(e.target.value)} />
                  </div>
                  <div className="mx-3">
                    <button className='btn btn-success' onClick={() => handleConfig()}>OK</button>
                  </div>
                </div>
              )}
            </div>
          </div>



        </div>

      </main>








    </div>
  )
}

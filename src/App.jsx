import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Plx from 'react-plx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="Forest.webp" alt="background" />
      </Plx>
     <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "10vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "37vw"
          }}
          src="/Black logo - no background copy.svg"
          alt="Goonies"
        />
      </Plx> 
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: -1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "4vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/why.png"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
    </>
  )
}

export default App

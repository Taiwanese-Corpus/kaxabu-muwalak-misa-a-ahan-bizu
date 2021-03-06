import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import BunliPlayer from '../BunliPlayer'

const PlayerMenu = ({showPlayerMenu, handleClose, imtong}) => {

  const transitions = useTransition(showPlayerMenu, null, {
      from: {
        opacity: 0, transform: 'translate3d(0,50px,0)'
      },
      enter: {
      	opacity: 1, transform: 'translate3d(0,0,0)'
      },
      leave: {
      	opacity: 0, transform: 'translate3d(0,50,0)'
      }
  })

   return transitions.map(({item, key, props}) =>
  	item && <animated.div key={key}
		  		className="ui inverted bottom fixed menu"
			  	style={props}
			>
        		<BunliPlayer
        			handleClose={handleClose}
              imtong={imtong}
        		/>
      		</animated.div>
	)
}

export default PlayerMenu
import React, {FC, useEffect} from 'react'
import {useLocation} from 'react-router'
import {ChildrenProps} from "../../../config-global";

const Content: FC<ChildrenProps> = ({children}) => {
  const location = useLocation()

  return (
    <div id='kt_content_container' className="container">
      {children}
    </div>
  )
}

export {Content}

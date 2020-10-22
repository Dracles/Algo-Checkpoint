import React from 'react'
import ProfilPhoto from './profile/ProfilPhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'

const Main = () =><div className="main">
                    <ProfilPhoto />
                    <div className="part">
                    <FullName />
                    <Address />
                    </div>
                </div>

export default Main
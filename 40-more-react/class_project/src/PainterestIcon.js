import React from 'react'
import withRandomColor from './hocs/withRandomColor'

const PainterestIcon = ({icon, color}) => <i className={`${color} ${icon} icon`}></i>

export default withRandomColor(PainterestIcon)

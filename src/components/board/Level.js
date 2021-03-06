import React from 'react'
import PropTypes from 'prop-types'
import { Group } from 'react-konva'

import Node from './Node'
import PlusSign from './PlusSign'

const Level = ({nodes, index, constants, onPlusClick, onNodeClick, onNodeDoubleClick}) => {
  return (
    <Group x={0 + constants.applyOddLevelXShift(index)} y={0 + index * constants.levelDifferenceY}
      height={constants.levelDifferenceY} width={1100}>
      <Group x={0} y={0} height={constants.levelDifferenceY} width={1000}>
        {
          nodes.map((node, nodeIndex) => (
            <Node weight={node.weight} clicked={node.clicked} nodeIndex={nodeIndex}
              constants={constants}
              count={node.globalIndex}
              key={`nd-${index * 10 + nodeIndex}`}
              onClick={() => onNodeClick(nodeIndex)}
              onDoubleClick={(newWeight) => onNodeDoubleClick(nodeIndex, newWeight)} />
          ))
        }
      </Group>
      <PlusSign offsetX={1020} offsetY={20} onClick={onPlusClick} />
    </Group>
  )
}

Level.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      weight: PropTypes.number,
      clicked: PropTypes.bool,
      globalIndex: PropTypes.number
    })
  ),
  index: PropTypes.number.isRequired,
  constants: PropTypes.shape({
    nodeDifferenceX: PropTypes.number,
    levelDifferenceY: PropTypes.number,
    nodeRadius: PropTypes.number,
    nodeWeightTextSize: PropTypes.number,
    applyOddLevelXShift: PropTypes.func
  }),
  onPlusClick: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeDoubleClick: PropTypes.func.isRequired
}

export default Level

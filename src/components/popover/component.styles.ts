import { motion } from 'framer-motion'
import styled from 'styled-components'

import { addSXTypography } from '@local/components/typography'
import { addOutline } from '@local/styles/add'
import { addSX } from '@local/styles/sx'

import { StyledPopoverProps } from '.'

/****************************************** Default *************************************************/
export const PopoverWrapper = styled(motion.div)<StyledPopoverProps>`
  background-color: darkgray;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: ${props => props.$padding || '16px'};
  ${addOutline};
  ${addSXTypography};
  ${addSX};
`

import { useGetResourceAll } from '@jenesei-software/jenesei-web-id-api'
import { FC } from 'react'

import { Typography } from '@components/typography'

import { ModuleResourceProps, ModuleResourceWrapper } from '.'

export const ModuleResource: FC<ModuleResourceProps> = (props) => {
  const { data: dataResourceAll } = useGetResourceAll({ retry: false })

  return (
    <ModuleResourceWrapper>
      <Typography variant="h6">Jenesei Resources</Typography>
    </ModuleResourceWrapper>
  )
}

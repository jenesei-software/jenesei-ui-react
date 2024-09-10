import { useGetResourceAll } from '@jenesei-software/jenesei-web-id-api'
import { FC } from 'react'

import { Divider } from '@components/divider'
import { Typography } from '@components/typography'

import {
  ModuleResourceListItemStatusWrapper,
  ModuleResourceListItemWrapper,
  ModuleResourceListWrapper,
  ModuleResourceProps,
  ModuleResourceWrapper,
} from '.'

export const ModuleResource: FC<ModuleResourceProps> = () => {
  const { data: dataResourceAll } = useGetResourceAll({ retry: false })

  return (
    <ModuleResourceWrapper>
      <Typography weight={700} variant="h6" color="graySarah">
        Jenesei Resources
      </Typography>
      <Divider height="2px" color="graySarah" />
      <ModuleResourceListWrapper>
        {dataResourceAll?.map((e, key) => (
          <ModuleResourceListItemWrapper key={key}>
            <Typography weight={700} variant="h6" color="graySarah">
              {e.resourceName}
            </Typography>
            {e.isActive && (
              <ModuleResourceListItemStatusWrapper>
                <Typography weight={400} variant="h6" color="graySarah">
                  Status: Active
                </Typography>
              </ModuleResourceListItemStatusWrapper>
            )}
            <Divider height="1px" color="graySarah" />
          </ModuleResourceListItemWrapper>
        ))}
      </ModuleResourceListWrapper>
    </ModuleResourceWrapper>
  )
}

import { useGetSSOSessionAllWS } from '@jenesei-software/jenesei-web-id-api'
import moment from 'moment'
import { FC, useMemo } from 'react'
import UAParser from 'ua-parser-js'

import { Button } from '@components/button'
import { Divider } from '@components/divider'
import { Stack } from '@components/flex'
import { Typography } from '@components/typography'

import {
  ModuleSessionListItemWrapper,
  ModuleSessionListWrapper,
  ModuleSessionProps,
  ModuleSessionWrapper,
} from '.'

export const ModuleSession: FC<ModuleSessionProps> = (props) => {
  const { data: dataSessionAll } = useGetSSOSessionAllWS({})

  const dataSessionAllList = useMemo(() => {
    return dataSessionAll
      ? Object.entries(dataSessionAll)
          .map(([key, session]) => {
            const uaParser = new UAParser(session.userAgent)
            const uaResult = `${uaParser.getResult().browser.name} ${uaParser.getResult().browser.version} on ${uaParser.getResult().os.name} ${uaParser.getResult().os.version}`

            return {
              key: key,
              session: session,
              isCurrent: !!session.current,
              uaResult: uaResult,
              dateResult: moment(session.lastActivity).format(
                'MMMM Do YYYY, h:mm:ss a',
              ),
              lastActivity: new Date(session.lastActivity),
            }
          })
          .sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime())
      : []
  }, [dataSessionAll])

  return (
    <ModuleSessionWrapper>
      <Typography weight={700} variant="h6" color="graySarah">
        Jenesei Sessions
      </Typography>
      <Divider height="2px" color="graySarah" />
      <ModuleSessionListWrapper>
        {dataSessionAllList.map((e, key) => (
          <ModuleSessionListItemWrapper key={key}>
            {e.isCurrent && (
              <Typography weight={700} variant="h6" color="black100">
                This is the current session
              </Typography>
            )}
            <Stack gap="2px" flexDirection="row" flexWrap="wrap">
              <Typography weight={700} variant="h6" color="graySarah">
                {'Device: '}
              </Typography>
              <Typography weight={400} variant="h6" color="graySarah">
                {e.uaResult}
              </Typography>
            </Stack>
            <Stack gap="2px">
              <Typography weight={700} variant="h6" color="graySarah">
                {'Last activity: '}
              </Typography>
              <Typography weight={400} variant="h6" color="graySarah">
                {e.dateResult}
              </Typography>
            </Stack>
            <Button
              genre={'gray'}
              size={'small'}
              onClick={() => props.onDeleteSession(e.key, e.isCurrent)}
            >
              {e.isCurrent ? 'Logout' : 'Close the session'}
            </Button>
            <Divider height="1px" color="graySarah" />
          </ModuleSessionListItemWrapper>
        ))}
      </ModuleSessionListWrapper>
    </ModuleSessionWrapper>
  )
}

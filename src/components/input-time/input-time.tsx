import {
  InputTimeProps,
  StyledInputItem,
  StyledInputItems,
  StyledInputTime,
  InputTimeStyledInputDefault,
} from '.'
import { InputDefaultPrefixContent } from '../../main'
import { UIFrameFlexCenter } from '../../main'
import { getTimeToMinutes } from '../../main'
import { memo, useEffect, useState } from 'react'

function getAllHours() {
  const hours = []
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = hour < 10 ? '0' + hour : String(hour)
    hours.push(formattedHour)
  }
  return hours
}

function getAnotherMinutes() {
  const hoursOfDay = ['00', '15', '30', '45']
  return hoursOfDay
}

function getFormatMinutesToHour(minutes: string) {
  const hours = Math.floor(+minutes / 60)
  const formattedHours = String(hours).padStart(2, '0')
  return String(formattedHours)
}

function getFormatMinutesToMinutes(minutes: string) {
  const mins = +minutes >= 60 ? +minutes % 60 : +minutes
  const formattedMins = String(mins).padStart(2, '0')
  return String(formattedMins)
}

export const InputTime = memo((props: InputTimeProps) => {
  const [hour, setHour] = useState<string | undefined>(
    props.input.value
      ? getFormatMinutesToHour(String(props.input.value))
      : undefined
  )
  const [minute, setMinute] = useState<string | undefined>(
    props.input.value
      ? getFormatMinutesToMinutes(String(props.input.value))
      : undefined
  )

  useEffect(() => {
    setHour(
      props.input.value
        ? getFormatMinutesToHour(String(props.input.value))
        : undefined
    )
    setMinute(
      props.input.value
        ? getFormatMinutesToMinutes(String(props.input.value))
        : undefined
    )
  }, [props.input.value])
  const isError =
    hour || minute
      ? props.input.isDisabled ??
        !getTimeToMinutes(`${hour ?? 0}:${minute ?? 0}`)
      : false
  return (
    <UIFrameFlexCenter
      className={props.className}
      $position="relative"
      width="100%"
    >
      <InputTimeStyledInputDefault
        $prefixLeft={props.input.prefixContent?.left}
        $prefixRight={props.input.prefixContent?.left}
        $prefixWidth={props.input.prefixContent?.width}
        tabIndex={1}
        $genre={props.input.genre}
        $isError={isError}
        $isFocus={props.input.isDisabled === true ? false : undefined}
        $isDisabled={props.input.isDisabled}
        $isPlaceholder={
          !props.input.value && hour == undefined && minute == undefined
        }
      >
        {props.input.prefixContent && (
          <InputDefaultPrefixContent
            $width={props.input.prefixContent.width}
            $left={props.input.prefixContent.left}
          >
            {props.input.prefixContent.content}
          </InputDefaultPrefixContent>
        )}
        {hour || minute
          ? props.isShowMinutes
            ? `${getTimeToMinutes(`${hour ?? 0}:${minute ?? 0}`)} мин.`
            : `${hour ?? '00'}:${minute ?? '00'}`
          : props.input.placeholder}
        <StyledInputTime id="input-time" $isError={isError}>
          <StyledInputItems>
            {getAllHours().map((e, index) => (
              <StyledInputItem
                key={index}
                $isChoice={e === hour}
                onClick={() => {
                  setHour(e)
                  props.onChange &&
                    props.onChange(getTimeToMinutes(`${e}:${minute ?? 0}`))
                }}
              >
                {e}
              </StyledInputItem>
            ))}
          </StyledInputItems>
          <StyledInputItems>
            {getAnotherMinutes().map((e, index) => (
              <StyledInputItem
                key={index}
                $isChoice={e === minute}
                onClick={() => {
                  setMinute(e)
                  props.onChange &&
                    props.onChange(getTimeToMinutes(`${hour ?? 0}:${e}`))
                }}
              >
                {e}
              </StyledInputItem>
            ))}
          </StyledInputItems>
        </StyledInputTime>
      </InputTimeStyledInputDefault>
    </UIFrameFlexCenter>
  )
})

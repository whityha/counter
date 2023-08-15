import { Button, Icon } from './styled'

export const NavigateButton = ({ disabled, type, onClick }: {disabled?: boolean; type: 'next' | 'prev'; onClick: () => void}) => {
    const durations = {
        prev: <Icon width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="currentColor" strokeWidth="1"/>
            </Icon>,
        next: <Icon width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="currentColor" strokeWidth="1"/>
            </Icon>,
    }
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
        {durations[type]}        
    </Button>
  )
}

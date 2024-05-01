import { VoidFunctionType } from 'src/@types/typeUtils';
import { CustomButton } from './CustomButton';
import { Typography } from '@mui/material';

function PageConfirmation(onClose: VoidFunctionType, pageTitle: string, 
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>) {
    const close = onClose;
    const headerText = `Exit ${pageTitle} without Saving`
    const text = `Please confirm if you would like to exit from ${ pageTitle } without Saving`;
    const handleConfirm = () => {
      close();
      setConfirm(true)
    }
  return (
    <div className='remove-from-list'>
        <Typography variant='h4'>{headerText}</Typography>
        <Typography variant='h5'>{text}</Typography>
        <CustomButton className='lr-btn' onClick={handleConfirm}>Confirm</CustomButton>
    </div>
  )
}

export default PageConfirmation
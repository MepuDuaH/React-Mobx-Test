import React from 'react';
import { observer } from 'mobx-react-lite';

interface IRadioButtonProps {
  selected: boolean;
}
const RadioButton: React.FC<IRadioButtonProps> = observer(
  ({ selected }): JSX.Element => {
    return (
      <div className='radiobutton'>
        {selected && <div className='radiobutton-selected'></div>}
      </div>
    );
  },
);

export default RadioButton;
// import {ChangeEvent, useState} from 'react';
// import { SlowComponent } from './slowComponent/SlowComponent';
//
// //find the problem and fix it as part of composition
//
// export const Task_3 = () => {
//     const [value, setValue] = useState('');
//     console.log('Task_3')
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <input type="text" value={value} onChange={onChange} />
//
//         </div>
//     );
// };


// import {ChangeEvent, useState} from 'react';
// import { SlowComponent } from './slowComponent/SlowComponent';
//
//
// find the problem and fix it as part of memo
//
// export const Task_3 = () => {
//   const [value, setValue] = useState('');
//     console.log('Task_3')
//   const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//   return (
//     <div>
//       <div>Lags when change value</div>
//       <input type="text" value={value} onChange={onChange} />
//       <SlowComponent />
//     </div>
//   );
// };



// import { ChangeEvent, FC, ReactNode, useState } from 'react';
//
// type Task_3Type = {
//     children: ReactNode
// }
//
// //find the problem and fix it as part of children
//
// export const Task_3:FC<Task_3Type> = ({children}) => {
//     const [value, setValue] = useState('');
//     console.log('Task_3')
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <input type="text" value={value} onChange={onChange} />
//             {children}
//         </div>
//     );
// };



// import { ChangeEvent, FC, ReactNode, useState } from 'react';
// import { SlowComponent } from "./slowComponent/SlowComponent";
//
// type Task_3Type = {
//     children: ReactNode
// }
//
// //find the problem and fix it as part of  useMemo
//
// export const Task_3:FC<Task_3Type> = () => {
//     const [value, setValue] = useState('');
//     console.log('Task_3')
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <input type="text" value={value} onChange={onChange} />
//             <SlowComponent />
//         </div>
//     );
// };



import { useRef } from 'react';
import { SlowComponent } from "./slowComponent/SlowComponent";


//find the problem and fix it as part of composition useRef
export const Task_3 = () => {

    console.log('Task_3')

    let inputRef = useRef <HTMLInputElement | null>(null)
    const onClickText = () => {
        alert(inputRef.current.value)
    }

    return (
        <div>
            <div  onClick={onClickText} >Lags when change value</div>
            <input type="text" ref={inputRef}/>
            <SlowComponent />
        </div>
    );
};

import {useCallback} from 'react';

export const App = () => {
    const onClick = useCallback( () => (e) => {
        console.log(e.target);
    }, []);

    return (
        <div onClick = {onClick()}></div>
    )
}
import {useRef, useContext, useEffect} from 'react';
import {useOnScreen} from './useOnScreen';
import {NavContext} from '../context/navContext';

export const useNav = (navLinkId) => {
	const ref=useRef(null);
	const {setActiveLinkId} = useContext(NavContext);
    const isOnScreen = useOnScreen(ref);
    useEffect(()=>{
    	if(isOnScreen){
    		setActiveLinkId(navLinkId);
    	}
    }, [isOnScreen,setActiveLinkId, navLinkId]);
	return ref;
}